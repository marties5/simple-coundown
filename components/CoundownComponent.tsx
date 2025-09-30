"use client";
import { useEffect, useState } from "react";

const targetDate = new Date("2033-09-30T00:00:00");

function getTimeRemaining(target: Date) {
  const now: Date = new Date();
  let delta = target.getTime() - now.getTime();
  if (delta < 0) delta = 0;

  const years = target.getFullYear() - now.getFullYear();
  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();

  if (months < 0) {
    months += 12;
  }
  if (days < 0) {
    const lastMonth = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0
    ).getDate();
    days += lastMonth;
    months--;
    if (months < 0) {
      months += 12;
    }
  }

  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((delta % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl">
      <div className="bg-purple-900/50 border-purple-700 shadow-2xl backdrop-blur-sm rounded-2xl">
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-50 mb-2 text-balance">
              Countdown Menuju
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-purple-300 font-medium">
              30 September 2033
            </p>
          </div>

          {/* Main Countdown - Years, Months, Days */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="bg-purple-800/50 rounded-lg p-6 sm:p-8 text-center border border-purple-600">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 font-mono">
                {time.years}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-purple-300 font-medium uppercase tracking-wider">
                Tahun
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-lg p-6 sm:p-8 text-center border border-purple-600">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 font-mono">
                {time.months}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-purple-300 font-medium uppercase tracking-wider">
                Bulan
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-lg p-6 sm:p-8 text-center border border-purple-600">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 font-mono">
                {time.days}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-purple-300 font-medium uppercase tracking-wider">
                Hari
              </div>
            </div>
          </div>

          {/* Secondary Countdown - Hours, Minutes, Seconds */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-purple-500/10 rounded-lg p-4 sm:p-6 text-center border border-purple-500/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-1 font-mono">
                {String(time.hours).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-300 font-medium uppercase tracking-wide">
                Jam
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-4 sm:p-6 text-center border border-purple-500/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-1 font-mono">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-300 font-medium uppercase tracking-wide">
                Menit
              </div>
            </div>

            <div className="bg-purple-500/10 rounded-lg p-4 sm:p-6 text-center border border-purple-500/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-400 mb-1 font-mono">
                {String(time.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-300 font-medium uppercase tracking-wide">
                Detik
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
