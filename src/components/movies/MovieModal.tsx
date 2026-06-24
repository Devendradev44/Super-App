"use client";

import Image from "next/image";

interface MovieModalProps {
  open: boolean;
  onClose: () => void;
  movie: {
    Title: string;
    Poster: string;
    Year: string;
    imdbRating?: string;
    Plot?: string;
  } | null;
}

export default function MovieModal({
  open,
  onClose,
  movie,
}: MovieModalProps) {
  if (!open || !movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <div
        className="max-w-md overflow-hidden rounded-3xl bg-[#1F1F1F] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={400}
          height={600}
          className="h-[420px] w-full object-cover"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold">
            {movie.Title}
          </h2>

          <p className="mt-2 text-neutral-400">
            {movie.Year}
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-300">
            {movie.Plot || "No description available."}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}