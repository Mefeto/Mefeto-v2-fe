import { articleThumbnail } from "@/lib/const/article-thumbnail";
import { propositions } from "@/lib/const/proposition";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";
import { clerkClient } from "@clerk/nextjs";
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

export const getArticleComments = async (articleId: number) => {
  const res = await sql`
    SELECT
      id, user_id, content, created_at
    FROM article_comments
    WHERE article_id = ${articleId}
  `;
  return Promise.all(
    res.rows.map(async ({ user_id, ...item }) => ({
      ...item,
      user: await clerkClient.users.getUser(user_id),
    }))
  );
};

export const getProposition = (id: string) => {
  for (let i = 0; i < propositions.length; i++) {
    if (propositions[i].BILL_ID === id) {
      return propositions[i];
    }
  }
};
