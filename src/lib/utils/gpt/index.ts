import {
  ChatCompletionResponseMessage,
  Configuration,
  OpenAIApi,
} from "openai";
import { functionsDescription } from "./functions";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function completeChat(chatLog: ChatCompletionResponseMessage[]) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0613",
    messages: chatLog,
    functions: functionsDescription,
  });
  return completion.data.choices[0];
}

export async function embed(text: string) {
  const embedding = await openai
    .createEmbedding({
      model: "text-embedding-ada-002",
      input: text,
    })
    .then((embedding) => embedding.data.data.map((object) => object.embedding));
  return embedding;
}
