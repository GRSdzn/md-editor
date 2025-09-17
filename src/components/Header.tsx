"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 50) setShow(false);
    else setShow(true);
    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = (
    <>
      <Link
        href="/editor"
        className="px-4 py-2  font-semibold  font transition"
      >
        Редактор
      </Link>
      <ThemeToggle />
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-2xl font-bold text-foreground-light dark:text-foreground-dark"
        >
          READMEGen
        </Link>

        <nav className="hidden md:flex items-center gap-4">{navLinks}</nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground-light dark:text-foreground-dark focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark shadow-md w-full transition-all">
          <nav className="flex flex-col px-6 py-4 space-y-2">{navLinks}</nav>
        </div>
      )}
    </header>
  );
}
