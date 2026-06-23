"use client";

import { useEffect, useState } from "react";

import { getWeather } from "@/services/weather";
import type { WeatherData } from "@/types/weather";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error("Weather Error:", error);
      }
    }

    loadWeather();
  }, []);

  return (
    <div className="rounded-3xl bg-[#101744] p-6 text-white shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Weather</h2>

        <span className="text-sm opacity-70">
          {new Date().toLocaleDateString()}
        </span>
      </div>

      <div className="mb-6 flex items-center gap-3">
        <div className="text-5xl font-bold">
          {weather?.temperature ?? "--"}°C
        </div>

        <div className="text-sm opacity-80">
          {weather?.condition ?? "Loading..."}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <p className="font-semibold">
            {weather?.windSpeed ?? "--"}
          </p>
          <p className="opacity-70">Wind</p>
        </div>

        <div>
          <p className="font-semibold">
            {weather?.pressure ?? "--"}
          </p>
          <p className="opacity-70">Pressure</p>
        </div>

        <div>
          <p className="font-semibold">
            {weather?.humidity ?? "--"}%
          </p>
          <p className="opacity-70">Humidity</p>
        </div>
      </div>
    </div>
  );
}