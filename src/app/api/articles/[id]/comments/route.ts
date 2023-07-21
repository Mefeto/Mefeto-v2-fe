import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { zx } from "zodix";
import { z } from "zod";
import { LoaderArgs } from "@remix-run/server-runtime";
import { getArticleComments } from "@/lib/fn/article";
import { currentUser } from "@clerk/nextjs";

export async function GET(req: NextRequest, { params }: LoaderArgs) {
  const result = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  return NextResponse.json(await getArticleComments(result.data.id));
}

export async function POST(req: NextRequest, { params }: LoaderArgs) {
  const paramResult = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!paramResult.success) {
    return NextResponse.json(paramResult.error, { status: 400 });
  }

  const articleCount = await sql`
    SELECT COUNT(*)::int FROM articles WHERE id = ${paramResult.data.id}
  `;
  if (articleCount.rows[0].count === 0) {
    return new Response("Article not found", { status: 404 });
  }

  const bodyResult = z
    .object({
      content: z.string().min(1),
    })
    .safeParse(await req.json());
  if (!bodyResult.success) {
    return NextResponse.json(bodyResult.error, { status: 400 });
  }

  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const res = await sql`
    INSERT INTO article_comments (article_id, user_id, content)
    VALUES (${paramResult.data.id}, ${user.id}, ${bodyResult.data.content})
    RETURNING id, content, created_at
  `;
  const item = res.rows[0];
  return NextResponse.json({ ...item, user });
}
