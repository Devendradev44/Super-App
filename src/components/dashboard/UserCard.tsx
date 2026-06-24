"use client";

import { useStore } from "@/store/useStore";
import Image from "next/image";

export default function UserCard() {
  const { user, selectedCategories } = useStore();

  return (
    <div className="rounded-3xl bg-[#5746EA] p-6 text-white shadow-lg">
      <div className="space-y-2">
        <div className="flex items-center gap-4">

  <Image
    src="/images/avatar.webp"
    alt="User Avatar"
    width={80}
    height={80}
    className="rounded-full object-cover"
  />

  <div>
    <p className="text-base">
      {user?.name || "Guest User"}
    </p>

    <p className="text-sm opacity-80">
      {user?.email || "example@email.com"}
    </p>

    <h2 className="text-3xl font-bold">
      {user?.username || "superapp"}
    </h2>
  </div>

</div>
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