import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { zx } from "zodix";
import { z } from "zod";
import { LoaderArgs } from "@remix-run/server-runtime";
import { getArticleComments } from "@/lib/fn/article";

export async function GET(req: NextRequest, { params }: LoaderArgs) {
  const result = zx.parseParamsSafe(params, { id: z.coerce.number() });
  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  return NextResponse.json(await getArticleComments(result.data.id));
}
