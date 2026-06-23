"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { CATEGORIES } from "@/constants/categories";
import { useStore } from "@/store/useStore";

import CategoryGrid from "@/components/categories/CategoryGrid";
import CategoryChip from "@/components/categories/CategoryChip";

export default function CategoriesPage() {
  const router = useRouter();

  const { selectedCategories, toggleCategory } = useStore();

  const [error, setError] = useState("");

  const canContinue = useMemo(() => {
    return selectedCategories.length >= 3;
  }, [selectedCategories]);

  const handleContinue = () => {
    if (!canContinue) {
      setError("Minimum 3 categories required");
      return;
    }

    setError("");

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-8 py-10 lg:flex-row">

        {/* Left */}

        <section className="flex flex-1 flex-col justify-center gap-8">

          <div>

            <h1 className="text-5xl font-bold text-[#72DB73]">
              Super app
            </h1>

            <h2 className="mt-10 text-6xl font-bold leading-tight">
              Choose your entertainment category
            </h2>

          </div>

          <div className="flex flex-wrap gap-3">

            {selectedCategories.map((category) => (
              <CategoryChip
                key={category}
                title={category}
                onRemove={() => toggleCategory(category)}
              />
            ))}

          </div>

          {error && (
            <p className="text-red-500 text-lg">
              ⚠ {error}
            </p>
          )}

        </section>

        {/* Right */}

        <section className="flex-[1.2]">

          <CategoryGrid
            categories={CATEGORIES}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />

          <div className="mt-10 flex justify-end">

            <button
              onClick={handleContinue}
              className="rounded-full bg-[#148A08] px-10 py-3 text-lg font-semibold transition hover:opacity-90"
            >
              Next Page
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}