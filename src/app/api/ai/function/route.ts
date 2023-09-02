import { functions } from "@/lib/utils/gpt/functions";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const result = z
    .object({
      function_name: z.string(),
      arguments: z.string(),
    })
    .safeParse(await req.json());

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  const whichFunction = result.data.function_name as keyof typeof functions;

  try {
    const functionToCall = functions[whichFunction];
    const input = JSON.parse(result.data.arguments).input;
    const functionResult = await functionToCall(input);
    return NextResponse.json({
      role: "function",
      name: whichFunction,
      content: functionResult,
    });
  } catch (e) {
    return NextResponse.json({
      role: "function",
      name: whichFunction,
      content: "Invalid function call.",
    });
  }
}
