import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { zx } from "zodix";

export async function GET(req: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const results = zx.parseQuerySafe(req, {
    limit: z.optional(z.coerce.number().min(0).max(50)).default(10),
    offset: z.optional(z.coerce.number().min(0)).default(0),
  });

  if (!results.success) {
    return NextResponse.json(results.error, { status: 400 });
  }

  const { limit, offset } = results.data;
  const res = await sql`
    SELECT *
    FROM articles
    WHERE author_id = ${userId}
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;
  return NextResponse.json(res.rows);
}
