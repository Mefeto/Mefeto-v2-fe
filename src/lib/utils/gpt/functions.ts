import { embed } from ".";
import { encode } from "gpt-tokenizer";
import { createClient } from "@supabase/supabase-js";

export const functions = {
  get_related_info: async (input: string) => {
    const embedding = await embed(input);
    const supabaseClient = createClient(
      "https://tpajyjqgbswcgpcmmanf.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_CLIENT_KEY!
    );

    const { data: documents, error: mathError } = await supabaseClient.rpc(
      "match_documents",
      {
        query_embedding: embedding[0],
        match_threshold: 0.75, // Choose an appropriate threshold for your data
        match_count: 10, // Choose the number of matches
      }
    );

    let tokenCount = 0;
    let contextText = "";

    // Concat matched documents
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];
      const content = document.content;
      const encoded = encode(content);
      tokenCount += encoded.length;

      // Limit context to max 1500 tokens (configurable)
      if (tokenCount > 1500) {
        break;
      }

      contextText += `${content.trim()}\n---\n`;
    }

    return contextText;
  },
};

export const functionsDescription = [
  {
    name: "get_related_info",
    description: "input과 관련된 정책 뉴스를 찾는다.",
    parameters: {
      type: "object",
      properties: {
        input: {
          type: "string",
          description: "관련 있는 정책 뉴스를 찾고자 하는 검색어",
        },
      },
      required: ["input"],
    },
  },
];
