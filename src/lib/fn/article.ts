import { articleThumbnail } from "@/lib/const/article-thumbnail";
import { propositions } from "@/lib/const/proposition";

export const getArticle = (id: number) => {
  let items = [];
  articleThumbnail.forEach((item) => {
    item.contents.forEach((item) => items.push(item));
  });
  return items.at(id - 1);
};

export const getProposition = (id: string) => {
  for (let i = 0; i < propositions.length; i++) {
    if (propositions[i].BILL_ID === id) {
      return propositions[i];
    }
  }
};
