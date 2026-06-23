"use client";

import { useStore } from "@/store/useStore";

export default function UserCard() {
  const { user, selectedCategories } = useStore();

  return (
    <div className="rounded-3xl bg-[#5746EA] p-6 text-white shadow-lg">
      <div className="space-y-2">
        <p className="text-lg">{user?.name || "Guest User"}</p>

        <p className="text-sm opacity-80">
          {user?.email || "example@email.com"}
        </p>

        <h2 className="text-5xl font-bold">
          {user?.username || "superapp"}
        </h2>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {selectedCategories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-[#9F94FF] px-4 py-2 text-sm"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}