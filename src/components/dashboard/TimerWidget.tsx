"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function TimerWidget() {
  const { timer, setTimer } = useStore();

  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      if (
        timer.hours === 0 &&
        timer.minutes === 0 &&
        timer.seconds === 0
      ) {
        setTimer({
          ...timer,
          isRunning: false,
        });
        return;
      }

      let { hours, minutes, seconds } = timer;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }

      setTimer({
        hours,
        minutes,
        seconds,
        isRunning: true,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimer]);

  const increaseHours = () =>
    setTimer({
      ...timer,
      hours: timer.hours + 1,
    });

  const increaseMinutes = () =>
    setTimer({
      ...timer,
      minutes: timer.minutes + 1,
    });

  const increaseSeconds = () =>
    setTimer({
      ...timer,
      seconds: timer.seconds + 1,
    });

  const startPause = () =>
    setTimer({
      ...timer,
      isRunning: !timer.isRunning,
    });

  const reset = () =>
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
    });

  return (
    <div className="rounded-[28px] bg-[#1F1F1F] p-8 text-white shadow-lg">

      <h2 className="mb-8 text-3xl font-bold">
        Timer
      </h2>

      <div className="mb-8 grid grid-cols-3 gap-6 text-center">

        <div>
          <p className="mb-2 text-sm text-neutral-400">Hours</p>

          <p className="text-5xl font-bold">
            {String(timer.hours).padStart(2, "0")}
          </p>

          <button
            onClick={increaseHours}
            className="mt-4 rounded-lg bg-neutral-700 px-4 py-2 hover:bg-neutral-600"
          >
            +
          </button>
        </div>

        <div>
          <p className="mb-2 text-sm text-neutral-400">Minutes</p>

          <p className="text-5xl font-bold">
            {String(timer.minutes).padStart(2, "0")}
          </p>

          <button
            onClick={increaseMinutes}
            className="mt-4 rounded-lg bg-neutral-700 px-4 py-2 hover:bg-neutral-600"
          >
            +
          </button>
        </div>

        <div>
          <p className="mb-2 text-sm text-neutral-400">Seconds</p>

          <p className="text-5xl font-bold">
            {String(timer.seconds).padStart(2, "0")}
          </p>

          <button
            onClick={increaseSeconds}
            className="mt-4 rounded-lg bg-neutral-700 px-4 py-2 hover:bg-neutral-600"
          >
            +
          </button>
        </div>

      </div>

      <div className="flex gap-4">

        <button
          onClick={startPause}
          className="flex-1 rounded-xl bg-[#148A08] py-3 font-semibold transition hover:opacity-90"
        >
          {timer.isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={reset}
          className="flex-1 rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-500"
        >
          Reset
        </button>

      </div>

    </div>
  );
}