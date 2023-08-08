import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type Article = {
  id: number;
  created_at: string;
  title: string;
  thumbnail_url: string;
  categories: string[];
  boundary: number;
  content: string;
};

const fetchArticles = async () => {
  const res = await axios.get("/api/articles");
  return res.data;
};

const fetchSingleArticle = async (id: number) => {
  const res = await axios.get(`/api/articles/${id}`);
  return res.data;
};

export const useArticles = () => {
  return useQuery<Article[]>(["articles"], {
    queryFn: fetchArticles,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

export const useSingleArticle = (id: number) => {
  return useQuery<Article>(["article", id], {
    queryFn: () => fetchSingleArticle(id),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
