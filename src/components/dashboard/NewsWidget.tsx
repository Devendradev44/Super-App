"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getTopNews } from "@/services/news";
import type { NewsArticle } from "@/types/news";

export default function NewsWidget() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getTopNews();
        setArticles(data);
      } catch (error) {
        console.error("News Error:", error);
      }
    }

    loadNews();
  }, []);

  useEffect(() => {
    if (articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  const article = articles[currentIndex];

  if (!article) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-[28px] bg-[#1F1F1F] text-white">
        Loading news...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#1F1F1F] text-white shadow-lg">
      {article.urlToImage && (
        <Image
          src={article.urlToImage}
          alt={article.title}
          className="h-[180px] w-full object-cover"
          width={500}
          height={180}
        />
      )}

      <div className="p-5">
        <h2 className="line-clamp-2 text-xl font-bold">
          {article.title}
        </h2>

        <p className="mt-3 line-clamp-4 text-sm text-neutral-300">
          {article.description}
        </p>
      </div>
    </div>
  );
}