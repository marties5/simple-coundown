"use client"
import Countdown from "@/components/CoundownComponent";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8  gap-16 sm:p-20 bg-purple-950">
      <Countdown />
    </div>
  );
}
