export const CATEGORIES = [
  {
    title: "Action",
    image: "/images/categories/action.avif",
    color: "#FF5209",
  },
  {
    title: "Drama",
    image: "/images/categories/drama.avif",
    color: "#D7A4FF",
  },
  {
    title: "Romance",
    image: "/images/categories/romance.avif",
    color: "#148A08",
  },
  {
    title: "Thriller",
    image: "/images/categories/thriller.avif",
    color: "#84C2FF",
  },
  {
    title: "Fantasy",
    image: "/images/categories/fantasy.avif",
    color: "#F062FF",
  },
  {
    title: "Music",
    image: "/images/categories/music.avif",
    color: "#FF3A3A",
  },
  {
    title: "Horror",
    image: "/images/categories/horror.avif",
    color: "#7358FF",
  },
  {
    title: "Fiction",
    image: "/images/categories/fiction.avif",
    color: "#6CD061",
  },
] as const;

export type Category = (typeof CATEGORIES)[number];