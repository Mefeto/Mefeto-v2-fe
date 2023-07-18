import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await sql`
    SELECT
      id, title, thumbnail_url, categories, boundary, created_at, content
    FROM articles
    WHERE id = ${id}
  `;
  return NextResponse.json(res.rows[0]);
}
