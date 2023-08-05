import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const urlParams = new URLSearchParams(new URL(req.url).search);
  const query = urlParams.get("query") || "";
  const apiKey = process.env.GOOGLE_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${apiKey}&q=${encodeURIComponent(
      query
    )}`
  ).then((res) => res.json());

  return NextResponse.json(response);
}
