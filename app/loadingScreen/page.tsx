"use client";

import { useEffect, useState } from "react";
import "./loading.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [bootIndex, setBootIndex] = useState(0);

  const bootLines = [
    "> INITIALIZING SYSTEM...",
    "> BOOTING NEURAL INTERFACE...",
    "> CONNECTING TO NET...",
    "> BYPASSING CORPORATE FIREWALL...",
    "> ACCESS GRANTED",
    "> LOADING UI MODULES...",
  ];

  useEffect(() => {
    const bootInterval = setInterval(() => {
      setBootIndex((prev) => {
        if (prev < bootLines.length - 1) return prev + 1;
        return prev;
      });
    }, 900);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-cyan-400 overflow-hidden neon-border px-4">

      {/* CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines"></div>

      {/* Terminal Boot Text */}
      <div className="font-mono text-left mb-6 w-full max-w-xl break-words">
        {bootLines.slice(0, bootIndex + 1).map((line, i) => (
          <p key={i} className="boot-line">{line}</p>
        ))}
      </div>

      {/* Glitchy LOADING text */}
      <h1 className="text-3xl md:text-4xl mb-6 font-mono tracking-widest glitch-text">
        LOADING...
      </h1>

      {/* Progress Bar */}
      <div className="w-full max-w-md h-4 md:h-5 bg-gray-900 border-2 border-cyan-400 rounded-sm overflow-hidden shadow-cyber">
        <div
          className="h-full bg-cyan-500 neon-bar transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-4 text-lg md:text-2xl font-mono text-magenta-400">
        {progress}%
      </p>
    </div>
  );
}