import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  const urlParams = new URLSearchParams(new URL(req.url).search);
  const id = urlParams.get("id");
  let res;
  if (id) {
    res = await sql`SELECT * FROM articles WHERE id = ${id};`;
  } else {
    res = await sql`SELECT * FROM articles;`;
  }
  return NextResponse.json(res.rows);
}
