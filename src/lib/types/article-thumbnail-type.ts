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
  thumbnail_url: string;
  title: string;
  short_description: string;
  content: string;
  signed: number;
  boundary: number;
  relatedPropositions?: ArticleRelatedPropositionType[];
}
