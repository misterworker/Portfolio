import { NextResponse } from "next/server";

const API_URL = process.env.PORTFOLIO_BOT_LINK || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  const { fingerprint, user_id, user_input, num_rewind } = await request.json();

  try {
    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fingerprint,
        user_id,
        user_input,
        num_rewind,
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling chat API:", error);
    return NextResponse.json({ response: "⚠️ Error talking to assistant." }, { status: 500 });
  }
}
