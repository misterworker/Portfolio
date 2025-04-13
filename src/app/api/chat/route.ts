import { NextRequest } from "next/server";

const API_URL = process.env.PORTFOLIO_BOT_LINK || "http://127.0.0.1:8000";

export async function POST(req: NextRequest) {
  const body = await req.text();

  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
