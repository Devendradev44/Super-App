import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  image: string;
  color: string;
}

interface CategoryGridProps {
  categories: Category[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export default function CategoryGrid({
  categories,
  selectedCategories,
  toggleCategory,
}: CategoryGridProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
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