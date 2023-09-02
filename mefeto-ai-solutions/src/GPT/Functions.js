import { embed } from "./GPT";
import { encode } from "gpt-tokenizer";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const functions = {
  get_related_info: async (input) => {
    const embedding = await embed(input);
    const supabaseClient = createClient(
      "https://tpajyjqgbswcgpcmmanf.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwYWp5anFnYnN3Y2dwY21tYW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDQ1OTEsImV4cCI6MjAwODk4MDU5MX0.ATz6N49ivu19AUaNhLCB_gO1GJqTwSN-2_fPkSNZDhA"
    );

    console.log("typeof embedding[0]:", typeof embedding[0]);
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
      const content = document.Content;
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
