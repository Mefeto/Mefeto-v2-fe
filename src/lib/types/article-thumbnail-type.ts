export interface ArticleThumbnailType {
  date: string;
  contents: ArticleThumbnailContentType[];
}

export interface ArticleThumbnailContentType {
  categories: string[];
  imgUrl: string;
  title: string;
  shortDescription: string;
  signed: number;
  boundary: number;
}
