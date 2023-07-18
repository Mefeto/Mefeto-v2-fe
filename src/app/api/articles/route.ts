import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || 10;
  const offset = searchParams.get("offset") || 0;
  const res = await sql`
    SELECT
      id, title, thumbnail_url, categories, boundary, created_at
    FROM articles
    LIMIT ${limit}
    OFFSET ${offset}
    ORDER BY created_at DESC
  `;
  return NextResponse.json(res.rows);
}
