import axiosInstance from "@/lib/axios";
import type { Movie, MovieDetails } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

interface MovieSearchResponse {
  Search: Movie[];
  Response: string;
}

export const getMovies = async (
  category: string
): Promise<Movie[]> => {
  const response = await axiosInstance.get<MovieSearchResponse>(
    "https://www.omdbapi.com/",
    {
      params: {
        s: category,
        type: "movie",
        apikey: API_KEY,
      },
    }
  );

  return response.data.Search ?? [];
};

export const getMovieDetails = async (
  imdbID: string
): Promise<MovieDetails> => {
  const response = await axiosInstance.get<MovieDetails>(
    "https://www.omdbapi.com/",
    {
      params: {
        i: imdbID,
        plot: "full",
        apikey: API_KEY,
      },
    }
  );

  return response.data;
};