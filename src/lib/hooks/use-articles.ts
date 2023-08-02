import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const article_type = z.object({
  id: z.number(),
  created_at: z.string().datetime(),
  title: z.string().min(1).max(255),
  thumbnail_url: z.string().url(),
  categories: z.array(z.string().min(1).max(255)),
  boundary: z.number(),
  content: z.string(),
});

export type Article = z.infer<typeof article_type>;

export const useArticles = () => {
  const fetchArticles = async () => {
    const res = await axios.get("/api/articles");
    return res.data;
  };

  const { data, isLoading, isFetching, isError } = useQuery<Article[]>(
    ["articles"],
    {
      queryFn: fetchArticles,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return { data, isLoading, isFetching, isError };
};

export const useSingleArticle = (id: number) => {
  const fetchSingleArticle = async () => {
    const res = await axios.get(`/api/articles/${id}`);
    return res.data;
  };

  const { data, isLoading, isFetching, isError } = useQuery<Article>(
    ["article", id],
    {
      queryFn: fetchSingleArticle,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isFetching, isError };
};
