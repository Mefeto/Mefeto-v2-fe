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

export async function POST(req: NextRequest) {
  const { title, thumbnail_url, categories, content } = await req.json();
  const res = await sql`
    INSERT INTO articles
      (title, thumbnail_url, categories, boundary, content)
    VALUES
      (${title}, ${thumbnail_url}, ${categories}, ${35}, ${content})
    RETURNING id, title, thumbnail_url, categories, boundary, created_at
  `;
  return NextResponse.json(res.rows[0]);
}
