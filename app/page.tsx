"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen/page";
import { Typewriter } from 'nextjs-simple-typewriter'
import IntroSection from "./introSection/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total time the loading screen stays visible
    const timer = setTimeout(() => setLoading(false), 6500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <IntroSection />
    </main>
  );
}
