import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { zx } from "zodix";
import { z } from "zod";
import { LoaderArgs } from "@remix-run/server-runtime";
import { auth } from "@clerk/nextjs";

export async function DELETE(req: NextRequest, { params }: LoaderArgs) {
  const result = zx.parseParamsSafe(params, {
    id: z.coerce.number(),
    commentId: z.coerce.number(),
  });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const res = await sql`
    DELETE FROM article_comments
    WHERE id = ${result.data.commentId} AND user_id = ${userId}
    RETURNING id
  `;
  if (res.rowCount === 0) {
    return new Response("Comment not found", { status: 404 });
  }
  return NextResponse.json(res.rows);
}
