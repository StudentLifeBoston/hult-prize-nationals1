"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = "2026-05-01T09:00:00-04:00";

type CountdownState = {
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdownState(): CountdownState {
  const now = Date.now();
  const target = new Date(TARGET_DATE).getTime();
  const diff = target - now;

  if (diff <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { done: false, days, hours, minutes, seconds };
}

export default function HomeCountdown() {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdownState);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      { label: "Days", value: countdown.days },
      { label: "Hours", value: countdown.hours },
      { label: "Minutes", value: countdown.minutes },
      { label: "Seconds", value: countdown.seconds },
    ],
    [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]
  );

  if (countdown.done) {
    return (
      <div className="inline-flex items-center rounded-xl border border-heritage/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
        Competition has begun.
      </div>
    );
  }

  return (
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-hp-gray">
        Competition begins in
      </p>
      <div className="grid w-full grid-cols-4 gap-3 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="rounded-xl border border-hp-border bg-white px-3 py-3 text-center shadow-sm"
          >
            <p className="text-2xl font-black leading-none text-hp-black sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-hp-gray sm:text-xs">
              {unit.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
