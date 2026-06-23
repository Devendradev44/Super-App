import CategoryCard from "./CategoryCard";
import type { Category } from "@/constants/categories";

interface CategoryGridProps {
  categories: readonly Category[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export default function CategoryGrid({
  categories,
  selectedCategories,
  toggleCategory,
}: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          image={category.image}
          color={category.color}
          selected={selectedCategories.includes(category.title)}
          onClick={() => toggleCategory(category.title)}
        />
      ))}
    </div>
  );
}