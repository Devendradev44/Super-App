"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function TimerWidget() {
  const { timer, setTimer } = useStore();

  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      let { hours, minutes, seconds } = useStore.getState().timer;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        useStore.getState().setTimer({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isRunning: false,
        });

        return;
      }

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

      useStore.getState().setTimer({
        hours,
        minutes,
        seconds,
        isRunning: true,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  const increaseHours = () =>
    setTimer({
      ...timer,
      hours: Math.min(timer.hours + 1, 23),
    });

  const increaseMinutes = () =>
    setTimer({
      ...timer,
      minutes: (timer.minutes + 1) % 60,
    });

  const increaseSeconds = () =>
    setTimer({
      ...timer,
      seconds: (timer.seconds + 1) % 60,
    });

  const decreaseHours = () =>
    setTimer({
      ...timer,
      hours: Math.max(timer.hours - 1, 0),
    });

  const decreaseMinutes = () =>
    setTimer({
      ...timer,
      minutes: Math.max(timer.minutes - 1, 0),
    });

  const decreaseSeconds = () =>
    setTimer({
      ...timer,
      seconds: Math.max(timer.seconds - 1, 0),
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
        <div className="w-full rounded-[28px] bg-[#1C2340] p-4 text-white shadow-lg">

      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">

        {/* Circle */}

        <div className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-[#FF6B6B]">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#1C2340] text-2xl font-semibold">

            {String(timer.hours).padStart(2, "0")}:
            {String(timer.minutes).padStart(2, "0")}:
            {String(timer.seconds).padStart(2, "0")}

          </div>

        </div>

        {/* Controls */}

        <div className="flex flex-1 items-center justify-evenly">

          {/* Hours */}

          <div className="text-center">

            <p className="mb-1 text-xs text-neutral-400">
              Hours
            </p>

            <button
              onClick={increaseHours}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▲
            </button>

            <p className="my-2 text-5xl font-light">
              {String(timer.hours).padStart(2, "0")}
            </p>

            <button
              onClick={decreaseHours}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▼
            </button>

          </div>

          <div className="pb-4 text-4xl">:</div>

          {/* Minutes */}

          <div className="text-center">

            <p className="mb-1 text-xs text-neutral-400">
              Minutes
            </p>

            <button
              onClick={increaseMinutes}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▲
            </button>

            <p className="my-2 text-5xl font-light">
              {String(timer.minutes).padStart(2, "0")}
            </p>

            <button
              onClick={decreaseMinutes}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▼
            </button>

          </div>

          <div className="pb-4 text-4xl">:</div>

          {/* Seconds */}

          <div className="text-center">

            <p className="mb-1 text-xs text-neutral-400">
              Seconds
            </p>

            <button
              onClick={increaseSeconds}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▲
            </button>

            <p className="my-2 text-5xl font-light">
              {String(timer.seconds).padStart(2, "0")}
            </p>

            <button
              onClick={decreaseSeconds}
              className="text-lg hover:text-[#FF6B6B]"
            >
              ▼
            </button>

          </div>

        </div>

      </div>

        <div className="mt-5 flex gap-3">

          <button
            onClick={startPause}
            className="flex-1 rounded-full bg-[#FF6B6B] py-2 text-lg font-semibold"
          >
            {timer.isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={reset}
            className="rounded-full bg-[#374151] px-4 py-2 text-xl"
            title="Reset"
          >
            ↺
          </button>

        </div>

    </div>
  );
}