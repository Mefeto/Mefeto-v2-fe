export interface ArticleThumbnailType {
  date: string;
  contents: ArticleThumbnailContentType[];
}

export interface ArticleRelatedPropositionType {
  id: string;
  name: string;
  tag: string;
}

export interface ArticleThumbnailContentType {
  id: number;
  categories: string[];
  imgUrl: string;
  title: string;
  shortDescription: string;
  mainContent: string;
  signed: number;
  boundary: number;
  relatedPropositions?: ArticleRelatedPropositionType[];
}
