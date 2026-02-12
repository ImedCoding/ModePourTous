import { NextResponse } from "next/server";

const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const honeypot = typeof body?.honeypot === "string" ? body.honeypot.trim() : "";
  const startedAt = typeof body?.startedAt === "number" ? body.startedAt : null;

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Email invalide." }, { status: 400 });
  }

  if (honeypot) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (startedAt) {
    const delta = Date.now() - startedAt;
    if (delta < 1500) {
      return NextResponse.json(
        { ok: false, error: "Trop rapide. Réessayez." },
        { status: 429 }
      );
    }
  }

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Webhook Google Sheets manquant." },
      { status: 500 }
    );
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Erreur Google Sheets." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
