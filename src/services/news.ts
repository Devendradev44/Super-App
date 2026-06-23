import axiosInstance from "@/lib/axios";
import type { NewsArticle } from "@/types/news";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

interface NewsResponse {
  articles: NewsArticle[];
}

export const getTopNews = async (): Promise<NewsArticle[]> => {
  const response = await axiosInstance.get<NewsResponse>(
    "https://newsapi.org/v2/top-headlines",
    {
      params: {
        country: "us",
        pageSize: 10,
        apiKey: API_KEY,
      },
    }
  );

  return response.data.articles;
};