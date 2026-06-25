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
  <div className="h-[465px] overflow-hidden rounded-[28px] bg-[#F5F5F5] shadow-lg">

    <div className="relative h-[240px]">

      <Image
        src={article.urlToImage}
        alt={article.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4">

        <h2 className="line-clamp-2 text-2xl font-semibold text-white">
          {article.title}
        </h2>

        <p className="mt-2 text-sm text-neutral-200">
          {new Date(article.publishedAt).toLocaleDateString()}{" "}
          {new Date(article.publishedAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

      </div>

    </div>

    <div className="p-6 flex flex-col h-[225px]">

      <p className="line-clamp-[8] text-base leading-7 text-[#444]">
        {article.description}
      </p>

    </div>

  </div>
);
}