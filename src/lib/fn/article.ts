import { articleThumbnail } from "@/lib/const/article-thumbnail";
import { propositions } from "@/lib/const/proposition";
import { ArticleThumbnailContentType } from "@/lib/types/article-thumbnail-type";

export const getArticle = (id: number) => {
  let items: ArticleThumbnailContentType[] = [];
  articleThumbnail.forEach((item) => {
    item.contents.forEach((item) => items.push(item));
  });
  return items.at(id - 1) as ArticleThumbnailContentType;
};

export const getProposition = (id: string) => {
  for (let i = 0; i < propositions.length; i++) {
    if (propositions[i].BILL_ID === id) {
      return propositions[i];
    }
  }
};
