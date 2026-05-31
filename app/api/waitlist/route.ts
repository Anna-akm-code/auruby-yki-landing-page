import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

interface Payload {
  email: string;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const FROM = "Anna from Auruby <hello@auruby.io>";

const CONFIRMATION_HTML = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#F5F1E8;font-family:Outfit,system-ui,-apple-system,sans-serif;color:#2D2D2D;">
    <div style="max-width:480px;margin:0 auto;background:#FAF8F3;border-radius:14px;padding:28px;">
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hi!</p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        You&rsquo;re on the Auruby waitlist. Your early-bird price of
        <strong>&euro;11.99/mo</strong> (instead of
        <span style="text-decoration:line-through;color:#8A8578;">&euro;22.99</span>)
        is locked.
      </p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        We&rsquo;ll email you when the app launches this summer. Nothing
        else &mdash; no spam.
      </p>
      <p style="margin:24px 0 0;font-size:16px;line-height:1.6;">— Anna, Auruby</p>
    </div>
  </body>
</html>`;

async function sendConfirmationEmail(to: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(
      "[waitlist] RESEND_API_KEY not set — skipping confirmation email.",
    );
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      subject: "You're on the Auruby waitlist!",
      html: CONFIRMATION_HTML,
    });
    if (error) {
      console.error("[waitlist] resend send failed", error);
    }
  } catch (err) {
    console.error("[waitlist] resend threw", err);
  }
}

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = (await req.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const cleanEmail = body.email.toLowerCase().trim();

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Storage not configured — succeed silently so the form still works
    // in dev. Production deploys should set SUPABASE_URL and
    // SUPABASE_SERVICE_ROLE_KEY.
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("waitlist").upsert(
    {
      email: cleanEmail,
      created_at: new Date().toISOString(),
    },
    { onConflict: "email" },
  );

  if (error) {
    console.error("[waitlist] supabase upsert failed", error);
    return NextResponse.json({ error: "storage_failed" }, { status: 500 });
  }

  // Fire-and-forget the confirmation email. We've already persisted the
  // signup; an email-send failure shouldn't fail the signup response.
  await sendConfirmationEmail(cleanEmail);

  return NextResponse.json({ ok: true, stored: true });
}
