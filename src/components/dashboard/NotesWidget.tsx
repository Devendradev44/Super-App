"use client";

import { ChangeEvent } from "react";
import { useStore } from "@/store/useStore";

export default function NotesWidget() {
  const { notes, setNotes } = useStore();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  return (
    <div className="flex h-[465px] flex-col rounded-[28px] bg-[#F1C75B] p-8 shadow-lg">

      <h2 className="mb-4 text-3xl font-bold text-black">
        All notes
      </h2>

      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write your notes..."
        className="
          mt-6
          flex-1
          w-full
          resize-none
          overflow-y-auto
          bg-transparent
          text-lg
          leading-9
          text-black
          outline-none
          placeholder:text-neutral-700
        "
      />

      <div className="mt-auto pt-3 text-right text-xs text-neutral-700">
        {notes.length} characters
      </div>

    </div>
  );
}