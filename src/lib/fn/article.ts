import { articleThumbnail } from "@/lib/const/article-thumbnail";
import { propositions } from "@/lib/const/proposition";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import { sql } from "@vercel/postgres";

export const getArticles = async (limit: number, offset: number) => {
  const res = await sql`
    SELECT
      id, title, thumbnail_url, categories, boundary, created_at
    FROM articles
    ORDER BY created_at DESC
    LIMIT ${limit}
    OFFSET ${offset}
  `;

  return res.rows as ArticleThumbnailContentType[];
};

export const getArticle = (id: number) => {
  let items: ArticleThumbnailContentType[] = [];
  articleThumbnail.forEach((item) => {
    item.contents.forEach((item) => items.push(item));
  });
  return items.at(id) as ArticleThumbnailContentType;
};

export const getProposition = (id: string) => {
  for (let i = 0; i < propositions.length; i++) {
    if (propositions[i].BILL_ID === id) {
      return propositions[i];
    }
  }
};
