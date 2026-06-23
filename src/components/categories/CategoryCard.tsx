"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CategoryCardProps {
  title: string;
  image: string;
  color: string;
  selected: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  image,
  color,
  selected,
  onClick,
}: CategoryCardProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={clsx(
        "flex flex-col rounded-2xl p-3 text-left transition-all",
        "border-4",
        selected ? "border-[#72DB73]" : "border-transparent"
      )}
      style={{
        backgroundColor: color,
      }}
    >
      <h3 className="mb-3 text-2xl font-semibold text-white">
        {title}
      </h3>

      <div className="relative h-28 w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </motion.button>
  );
}