import Link from "next/link";

import UserCard from "@/components/dashboard/UserCard";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import NewsWidget from "@/components/dashboard/NewsWidget";
import TimerWidget from "@/components/dashboard/TimerWidget";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="space-y-6">
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

        <div className="mt-3">
          <div className="w-full lg:w-2/3">
          <TimerWidget />

            </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/movies"
            className="rounded-full bg-green-500 px-8 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Browse
          </Link>
        </div>

      </div>
    </main>
  );
}