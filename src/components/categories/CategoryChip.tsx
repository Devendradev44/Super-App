interface SelectedCategoryProps {
  title: string;
  onRemove: () => void;
}

export default function CategoryChip({
  title,
  onRemove,
}: SelectedCategoryProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-[#148A08] px-4 py-2 text-white">
      <span>{title}</span>

      <button
        onClick={onRemove}
        className="text-lg font-bold hover:text-red-300"
      >
        ×
      </button>
    </div>
  );
}