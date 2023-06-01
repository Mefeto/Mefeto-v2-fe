import { articleThumbnail } from "@/lib/const/article-thumbnail";

export const getArticle = (id: number) => {
  let items = [];
  articleThumbnail.forEach((item) => {
    item.contents.forEach((item) => items.push(item));
  });
  return items.at(id - 1);
};
