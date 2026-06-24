"use client";
import Image from "next/image";
interface MovieCardProps {
  title: string;
  poster: string;
  year: string;
  onClick: () => void;
}

export default function MovieCard({
  title,
  poster,
  year,
  onClick,
}: MovieCardProps) {
  return (
    <button
      onClick={onClick}
      className="group overflow-hidden rounded-2xl bg-[#1f1f1f] text-left transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <Image
        src={poster}
        alt={title}
        width={300}
        height={450}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {year}
        </p>
      </div>
    </button>
  );
}