import { NextRequest, NextResponse } from "next/server";
import { getVideoDetails } from "youtube-caption-extractor";

export async function GET(req: NextRequest) {
  const urlParams = new URLSearchParams(new URL(req.url).search);
  const videoID = urlParams.get("videoID") || "";
  const lang = urlParams.get("lang") || "ko";
  const join = urlParams.get("lang") || "true";

  const videoDetails = await getVideoDetails({ videoID, lang });
  const res = join
    ? {
        title: videoDetails.title,
        description: videoDetails.description,
        caption: videoDetails.subtitles.reduce(
          (caption, snippet) => caption + " " + snippet.text,
          ""
        ),
      }
    : videoDetails;

  return NextResponse.json(res);
}
