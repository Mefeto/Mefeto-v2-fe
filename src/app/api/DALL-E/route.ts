import { Configuration, OpenAIApi, ResponseTypes } from "openai-edge";
import { NextResponse } from "next/server";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await openai.createImage({
    prompt: prompt,
    size: "512x512",
    response_format: "url",
  });
  const data = (await response.json()) as ResponseTypes["createImage"];
  const url = data.data?.[0]?.url;
  return NextResponse.json({ url: url });
}
