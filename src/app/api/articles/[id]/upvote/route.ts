import { auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { zx } from "zodix";
import { z } from "zod";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const result = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }
  const { id } = result.data;

  const articleCount = await sql`
    SELECT COUNT(*)::int FROM articles WHERE id = ${id}
  `;
  if (articleCount.rows[0].count === 0) {
    return new Response("Article not found", { status: 404 });
  }

  try {
    const res = await sql`
    INSERT INTO article_upvotes (article_id, user_id)
    VALUES (${id}, ${userId})
    RETURNING article_id
  `;
    return NextResponse.json(res.rows[0]);
  } catch (e) {
    return new Response("Already upvoted", { status: 409 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const result = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }
  const { id } = result.data;

  const articleCount = await sql`
    SELECT COUNT(*)::int FROM articles WHERE id = ${id}
  `;
  if (articleCount.rows[0].count === 0) {
    return new Response("Article not found", { status: 404 });
  }

  const res = await sql`
    DELETE FROM article_upvotes
    WHERE article_id = ${id} AND user_id = ${userId}
    RETURNING article_id
  `;
  return NextResponse.json(res.rows[0]);
}
