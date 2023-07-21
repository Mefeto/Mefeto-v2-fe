import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { zx } from "zodix";
import { z } from "zod";
import { LoaderArgs } from "@remix-run/server-runtime";

export async function GET(req: NextRequest, { params }: LoaderArgs) {
  const result = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  const res = await sql`
    SELECT
      id, title, thumbnail_url, categories, boundary, created_at, content
    FROM articles
    WHERE id = ${result.data.id}
  `;
  return NextResponse.json(res.rows[0]);
}
