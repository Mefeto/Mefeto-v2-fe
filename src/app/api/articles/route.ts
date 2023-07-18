import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  const urlParams = new URLSearchParams(new URL(req.url).search);
  const id = urlParams.get("id");
  let res;
  if (id) {
    res =
      await sql`SELECT id, title, thumbnail_url, categories, boundary, created_at FROM articles WHERE id = ${id};`;
  } else {
    res =
      await sql`SELECT id, title, thumbnail_url, categories, boundary, created_at FROM articles;`;
  }
  return NextResponse.json(res.rows);
}
