import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

interface Payload {
  parentName: string;
  email: string;
  childAge: string;
  notes?: string;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

const FROM = "Anna from Auruby <hello@auruby.io>";

function confirmationHtml(parentName: string): string {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:32px 16px;background:#EEEDFE;font-family:'Josefin Sans','Outfit',system-ui,-apple-system,sans-serif;color:#3D3B5C;">
    <div style="max-width:480px;margin:0 auto;padding:8px;font-family:Outfit,system-ui,-apple-system,sans-serif;">
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hi ${parentName}!</p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        Thanks for reserving a spot in <strong>THE CLUB: Young Founders</strong>.
      </p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        Spots are filled in order of sign-up, and I'll reply within a day to
        confirm the group, day and time.
      </p>
      <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">
        No payment is needed now &mdash; the first session is free.
      </p>
      <p style="margin:0 0 12px;font-size:16px;line-height:1.6;">&mdash; Anna, Auruby</p>
      <p style="margin:0;font-size:13px;line-height:1.6;">
        <a href="https://www.auruby.io" style="color:#3D3B5C;text-decoration:underline;">auruby.io</a>
      </p>
    </div>
  </body>
</html>`;
}

async function sendConfirmationEmail(
  to: string,
  parentName: string,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(
      "[club-signup] RESEND_API_KEY not set — skipping confirmation email.",
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      subject: "You're in — THE CLUB: Young Founders",
      html: confirmationHtml(parentName),
    });
    if (error) {
      console.error("[club-signup] resend send failed", error);
    }
  } catch (err) {
    console.error("[club-signup] resend threw", err);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function notificationHtml(payload: {
  parentName: string;
  email: string;
  childAge: string;
  notes: string | null;
}): string {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:32px 16px;background:#EEEDFE;font-family:'Josefin Sans','Outfit',system-ui,-apple-system,sans-serif;color:#3D3B5C;">
    <div style="max-width:480px;margin:0 auto;padding:8px;font-family:Outfit,system-ui,-apple-system,sans-serif;">
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        New sign-up for <strong>THE CLUB: Young Founders</strong>.
      </p>
      <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
        <tr>
          <td style="padding:6px 0;color:#6B67A0;">Parent's name</td>
          <td style="padding:6px 0;">${escapeHtml(payload.parentName)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#6B67A0;">Email</td>
          <td style="padding:6px 0;">${escapeHtml(payload.email)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#6B67A0;">Child's age</td>
          <td style="padding:6px 0;">${escapeHtml(payload.childAge)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#6B67A0;vertical-align:top;">Notes</td>
          <td style="padding:6px 0;">${payload.notes ? escapeHtml(payload.notes) : "&mdash;"}</td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

async function sendNotificationEmail(payload: {
  parentName: string;
  email: string;
  childAge: string;
  notes: string | null;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CLUB_SIGNUP_NOTIFY_EMAIL;
  if (!apiKey || !notifyTo) {
    console.info(
      "[club-signup] RESEND_API_KEY or CLUB_SIGNUP_NOTIFY_EMAIL not set — skipping notification email.",
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: notifyTo,
      replyTo: payload.email,
      subject: `New Young Founders signup — ${payload.parentName}`,
      html: notificationHtml(payload),
    });
    if (error) {
      console.error("[club-signup] resend notification send failed", error);
    }
  } catch (err) {
    console.error("[club-signup] resend notification threw", err);
  }
}

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isNonEmptyString(body.parentName)) {
    return NextResponse.json({ error: "invalid_parent_name" }, { status: 400 });
  }
  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!isNonEmptyString(body.childAge)) {
    return NextResponse.json({ error: "invalid_child_age" }, { status: 400 });
  }

  const cleanParentName = body.parentName.trim();
  const cleanEmail = body.email.toLowerCase().trim();
  const cleanChildAge = body.childAge.trim();
  const cleanNotes =
    typeof body.notes === "string" && body.notes.trim().length > 0
      ? body.notes.trim()
      : null;

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Storage not configured — succeed silently so the form still works
    // in dev. Production deploys should set SUPABASE_URL and
    // SUPABASE_SERVICE_ROLE_KEY.
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("young_founders_signups").insert({
    parent_name: cleanParentName,
    email: cleanEmail,
    child_age: cleanChildAge,
    notes: cleanNotes,
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error("[club-signup] supabase insert failed", error);
    return NextResponse.json({ error: "storage_failed" }, { status: 500 });
  }

  // Fire-and-forget the confirmation + notification emails. We've already
  // persisted the signup; an email-send failure shouldn't fail the
  // signup response.
  await Promise.all([
    sendConfirmationEmail(cleanEmail, cleanParentName),
    sendNotificationEmail({
      parentName: cleanParentName,
      email: cleanEmail,
      childAge: cleanChildAge,
      notes: cleanNotes,
    }),
  ]);

  return NextResponse.json({ ok: true, stored: true });
}
