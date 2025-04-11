import { NextResponse } from "next/server";

const API_URL = process.env.PORTFOLIO_BOT_LINK || "http://127.0.0.1:8000";

export async function POST(request: Request) {
  const { action, user_id } = await request.json();

  try {
    const res = await fetch(`${API_URL}/resume`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, user_id }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling resume API:", error);
    return NextResponse.json({ response: "⚠️ Error resuming conversation." }, { status: 500 });
  }
}
