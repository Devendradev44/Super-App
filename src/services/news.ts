import axiosInstance from "@/lib/axios";
import type { NewsArticle } from "@/types/news";

interface GNewsResponse {
  articles: NewsArticle[];
}

export const getTopNews = async (): Promise<NewsArticle[]> => {
  const response = await axiosInstance.get<GNewsResponse>("/api/news");

  return response.data.articles;
};