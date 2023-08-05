import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req: Request) {
  const { messages } = await req.json();
  const streamOrNot = req.headers.get("stream") || "true";

  if (streamOrNot === "true") {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      stream: true,
      messages: messages,
    });
    if (response.status !== 200) return NextResponse.error();
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } else {
    const response = await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo-16k",
        stream: false,
        messages: messages,
      })
      .then((res) => res.json());
    if (response.hasOwnProperty("error")) return NextResponse.error();
    return NextResponse.json(response);
  }
}
