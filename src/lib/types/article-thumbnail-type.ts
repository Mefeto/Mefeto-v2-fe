export interface ArticleThumbnailType {
  date: string;
  contents: ArticleThumbnailContentType[];
}

export interface ArticleThumbnailContentType {
  id: number;
  categories: string[];
  imgUrl: string;
  title: string;
  shortDescription: string;
  signed: number;
  boundary: number;
}
