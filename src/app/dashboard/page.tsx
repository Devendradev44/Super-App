import Link from "next/link";

import UserCard from "@/components/dashboard/UserCard";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import NewsWidget from "@/components/dashboard/NewsWidget";
import TimerWidget from "@/components/dashboard/TimerWidget";

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-y-auto bg-black p-4">

      <div className="mx-auto flex max-w-7xl flex-col">

        <div className="grid gap-4 lg:grid-cols-[1.15fr_1.15fr_1.1fr]">

          <div className="space-y-4">
            <UserCard />
            <WeatherWidget />
          </div>

          <div>
            <NotesWidget />
          </div>

          <div>
            <NewsWidget />
          </div>

        </div>

        <div className="mt-4 flex items-end justify-between gap-4">

          <div className="w-full lg:w-[72%]">
            <TimerWidget />
          </div>

          <Link
            href="/movies"
            className="rounded-full bg-green-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Browse
          </Link>

        </div>

      </div>

    </main>
  );
}