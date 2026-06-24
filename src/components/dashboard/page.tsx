import UserCard from "@/components/dashboard/UserCard";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import NotesWidget from "@/components/dashboard/NotesWidget";
import TimerWidget from "@/components/dashboard/TimerWidget";
import NewsWidget from "@/components/dashboard/NewsWidget";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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

        <div className="mt-6">
          <TimerWidget />
        </div>
      </div>
    </main>
  );
}