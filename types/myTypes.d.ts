declare interface Article {
  id: number;
  title: string;
  subtitle: string;
  images: Record<string, string>;
  date: Date;
  category: string;
  article: string;
}

// eslint-disable-next-line no-unused-vars
declare interface NewsProps {
  news?: Array<Article>;
}
