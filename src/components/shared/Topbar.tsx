"use client";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar() {
  return (
    <header className="h-16 bg-background border-b px-6 flex items-center justify-between">
      <div className="text-lg font-semibold">Welcome to Crypto Platform</div>
      <ThemeToggle />
    </header>
  );
}
