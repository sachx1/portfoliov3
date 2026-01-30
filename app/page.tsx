"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen/page";
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total time the loading screen stays visible
    const timer = setTimeout(() => setLoading(false), 6500);

    return () => clearTimeout(timer);
  }, []);

  const handleType = (count: number) => {
    console.log(count)
  }

  const handleDone = () => {
    console.log("Done after 5 loops!");
  }

  if (loading) return <LoadingScreen />;

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-mono neon-welcome">
        <Typewriter
            words={[`Welcome to Sachin Khargie's Page`, `Take a look`, `At their experience`]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
      </h1>
    </main>
  );
}
