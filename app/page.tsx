"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen/page";

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
      <h1 className="text-5xl font-mono neon-welcome">
        Welcome to Night City
      </h1>
    </main>
  );
}
