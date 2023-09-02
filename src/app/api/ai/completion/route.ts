import { completeChat } from "@/lib/utils/gpt";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const result = z
    .array(
      z.object({
        role: z.enum(["user", "system", "assistant", "function"]),
        name: z.string().optional(),
        content: z
          .string()
          .nullable()
          .transform((x) => x ?? ""),
        function_call: z
          .object({
            name: z.string().optional(),
            arguments: z.string().optional(),
          })
          .optional(),
      })
    )
    .safeParse(await req.json());

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  try {
    const response = await completeChat(result.data);
    if (!response.message) return NextResponse.json({}, { status: 404 });
    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json(
      { error: (e as AxiosError).response?.data },
      { status: 500 }
    );
  }
}
