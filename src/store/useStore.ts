"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import type { User } from "@/types/user";

export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
}

interface SuperAppStore {
  // User
  user: User | null;
  setUser: (user: User) => void;

  // Categories
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  toggleCategory: (category: string) => void;

  // Notes
  notes: string;
  setNotes: (notes: string) => void;

  // Timer
  timer: TimerState;
  setTimer: (timer: TimerState) => void;

  // Reset
  resetStore: () => void;
}

const initialTimer: TimerState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isRunning: false,
};

export const useStore = create<SuperAppStore>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) =>
        set({
          user,
        }),

      selectedCategories: [],

      setSelectedCategories: (categories) =>
        set({
          selectedCategories: categories,
        }),

      toggleCategory: (category) =>
        set((state) => {
          const exists = state.selectedCategories.includes(category);

          return {
            selectedCategories: exists
              ? state.selectedCategories.filter((item) => item !== category)
              : [...state.selectedCategories, category],
          };
        }),

      notes: "",

      setNotes: (notes) =>
        set({
          notes,
        }),

      timer: initialTimer,

      setTimer: (timer) =>
        set({
          timer,
        }),

      resetStore: () =>
        set({
          user: null,
          selectedCategories: [],
          notes: "",
          timer: initialTimer,
        }),
    }),
    {
      name: "super-app-storage",

      storage: createJSONStorage(() => localStorage),
    }
  )
);