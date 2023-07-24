import { NextResponse, NextRequest } from "next/server";
import { sql } from "@vercel/postgres";
import { auth } from "@clerk/nextjs";
import { getArticles } from "@/lib/utils/article";
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

  // 요청 보낼 시, req에서 json을 받아오기 전에 zod의 타입 파싱이 이루어져서 await 키워드 추가했습니다.
  // 혹시 확인하시거나 수정되었다면 이 주석을 지워주세요!

  const result = z
    .object({
      title: z.string().min(1).max(255),
      thumbnail_url: z.string().url(),
      categories: z.array(z.string().min(1).max(255)),
      content: z.string().min(1),
    })
    .safeParse(await req.json());

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  // 1. short_description 이 not-null constraint를 위반했다는 에러가 뜹니다
  // 2. categories array 부분에서 syntax error가 나는 것 같습니다.
  // 혹시 확인하시거나 수정되었다면 이 주석을 지워주세요!

  const { title, thumbnail_url, categories, content } = result.data;
  const res = await sql`
    INSERT INTO articles
      (title, thumbnail_url,
        categories,
        boundary, content, author_id)
    VALUES
      (${title}, ${thumbnail_url},
        {${categories.map((v) => `"${v}"`).join()}},
        ${35}, ${content}, ${userId})
    RETURNING id, title, thumbnail_url, categories, boundary, created_at
  `;
  return NextResponse.json(res.rows[0]);
}
