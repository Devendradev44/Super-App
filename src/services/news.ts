// import axiosInstance from "@/lib/axios";
// import type { NewsArticle } from "@/types/news";

// const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

// interface GNewsResponse {
//   articles: NewsArticle[];
// }

// export const getTopNews = async (): Promise<NewsArticle[]> => {
//   const response = await axiosInstance.get<GNewsResponse>(
//     "https://gnews.io/api/v4/top-headlines",
//     {
//       params: {
//         category: "general",
//         lang: "en",
//         country: "us",
//         max: 10,
//         apikey: API_KEY,
//       },
//     }
//   );
//   console.log(process.env.NEXT_PUBLIC_GNEWS_API_KEY);
//   return response.data.articles;
// };

// console.log(process.env.NEXT_PUBLIC_GNEWS_API_KEY);

import axiosInstance from "@/lib/axios";
import type { NewsArticle } from "@/types/news";

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_API_KEY;

interface GNewsResponse {
  articles: NewsArticle[];
}

export const getTopNews = async (): Promise<NewsArticle[]> => {
  const response = await axiosInstance.get<GNewsResponse>(
    "https://gnews.io/api/v4/top-headlines",
    {
      params: {
        token: API_KEY,
        lang: "en",
        max: 10,
      },
    }
  );

  return response.data.articles;
};