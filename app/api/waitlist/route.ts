import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

interface Payload {
  email: string;
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Storage not configured — succeed silently so the form still works
    // in dev. Production deploys should set SUPABASE_URL and
    // SUPABASE_SERVICE_ROLE_KEY.
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase
    .from("waitlist")
    .upsert(
      {
        email: body.email.toLowerCase().trim(),
        email_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

  if (error) {
    console.error("[waitlist] supabase upsert failed", error);
    return NextResponse.json({ error: "storage_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
