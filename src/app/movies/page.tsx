"use client";

import { useEffect, useState } from "react";

import { useStore } from "@/store/useStore";
import { getMovies, getMovieDetails } from "@/services/movies";

import MovieCard from "@/components/movies/MovieCard";
import MovieModal from "@/components/movies/MovieModal";

import type { Movie, MovieDetails } from "@/types/movie";

export default function MoviesPage() {
  const { selectedCategories } = useStore();

  const [movies, setMovies] = useState<
    Record<string, Movie[]>
  >({});

  const [selectedMovie, setSelectedMovie] =
    useState<MovieDetails | null>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const result: Record<string, Movie[]> = {};

      for (const category of selectedCategories) {
        try {
          const data = await getMovies(category);

          result[category] = data.slice(0, 6);
        } catch (error) {
          console.error(error);

          result[category] = [];
        }
      }

      setMovies(result);
    }

    if (selectedCategories.length > 0) {
      loadMovies();
    }
  }, [selectedCategories]);

  const handleMovieClick = async (
    imdbID: string
  ) => {
    try {
      const data = await getMovieDetails(imdbID);

      setSelectedMovie(data);

      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-6xl font-bold text-green-500">
          Super App
        </h1>

        <p className="mb-10 text-2xl">
          Entertainment according to your choice
        </p>
              {selectedCategories.map((category) => (
        <section
          key={category}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold capitalize text-green-400">
            {category}
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {(movies[category] ?? []).map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "/images/movie-placeholder.png"
                }
                year={movie.Year}
                onClick={() =>
                  handleMovieClick(movie.imdbID)
                }
              />
            ))}
          </div>
        </section>
      ))}

      <MovieModal
        open={open}
        onClose={() => setOpen(false)}
        movie={selectedMovie}
      />

    </div>
  </main>
);
}