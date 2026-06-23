"use client";

import { ChangeEvent } from "react";
import { useStore } from "@/store/useStore";

export default function NotesWidget() {
  const { notes, setNotes } = useStore();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  return (
    <div className="h-[320px] rounded-[28px] bg-[#F1C75B] p-8 shadow-lg">
      <h2 className="mb-5 text-4xl font-bold text-black">
        All notes
      </h2>

      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write your notes..."
        className="
          h-[220px]
          w-full
          resize-none
          overflow-y-auto
          bg-transparent
          text-lg
          leading-8
          text-black
          outline-none
          placeholder:text-neutral-700
        "
      />

      <div className="mt-3 text-right text-sm text-neutral-700">
        {notes.length} characters
      </div>
    </div>
  );
}