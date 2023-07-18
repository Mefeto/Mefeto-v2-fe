import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@clerk/nextjs";
import { getArticles } from "@/lib/fn/article";
import { z } from "zod";
import { zx } from "zodix";

export async function GET(req: NextRequest) {
  const results = zx.parseQuerySafe(req, {
    limit: z.optional(z.coerce.number().min(0).max(50)).default(10),
    offset: z.optional(z.coerce.number().min(0)).default(0),
  });

  if (!results.success) {
    return NextResponse.json(results.error, { status: 400 });
  }

  const { limit, offset } = results.data;
  return NextResponse.json(await getArticles(limit, offset));
}

export async function POST(req: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, thumbnail_url, categories, content } = await req.json();
  const res = await sql`
    INSERT INTO articles
      (title, thumbnail_url, categories, boundary, content, author_id)
    VALUES
      (${title}, ${thumbnail_url}, ${categories}, ${35}, ${content}, ${userId})
    RETURNING id, title, thumbnail_url, categories, boundary, created_at
  `;
  return NextResponse.json(res.rows[0]);
}
