export const CATEGORIES = [
  "Action",
  "Drama",
  "Romance",
  "Thriller",
  "Fantasy",
  "Music",
  "Horror",
  "Fiction",
] as const;

export type Category = (typeof CATEGORIES)[number];