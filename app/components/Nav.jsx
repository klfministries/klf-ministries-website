"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Nav({ lang = "en" }) {
  const pathname = usePathname();
  const base = `/${lang}`;
  const switchLang = lang === "en" ? "es" : "en";
  const switchedPath = pathname.replace(`/${lang}`, `/${switchLang}`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* SHRINK ON SCROLL */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* CLOSE DROPDOWN ON CLICK OUTSIDE */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* SUPPORT CLICK → GLOBAL MODAL */
  const handleSupportClick = () => {
    window.dispatchEvent(new Event("donation:open"));
    setOpen(false);
  };

  // Helpers
  const isInResources = pathname.startsWith(`${base}/resources`);
  const isArticles = pathname.startsWith(`${base}/resources/articles`);
  const isLessons = pathname.startsWith(`${base}/resources/lesson-studies`);
  const isDownloads = pathname.startsWith(`${base}/resources/downloads`);

  const links = [
    ["about", "About"],
    ["speaking", "Speaking"],
    ["books", "Books"],
    ["subscribe", "Weekly Devotional"],
    ["videos", "Videos"],
    ["prayer-request", "Prayer"],
    ["contact", "Contact"],
  ];

  /* KEYBOARD HANDLING FOR RESOURCES BUTTON */
  const handleResourcesKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setResourcesOpen((prev) => !prev);
    }

    if (e.key === "Escape") {
      setResourcesOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b h-14"
          : "bg-white h-20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
        {/* HOME + LOGO */}
        <div className="flex items-center gap-3 relative">
          <Link
            href={base}
            className="text-sm font-medium text-black hover:text-blue-900 transition"
          >
            Home
          </Link>

          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl text-black"
          >
            ➜
          </motion.span>

          <Link href={base} aria-label="Home" className="flex items-center gap-2">
            <Image
              src="/images/klf-logo.png"
              alt="KLF Ministries"
              width={scrolled ? 48 : 64}
              height={scrolled ? 48 : 64}
              className="transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-4 relative">
          {/* Regular Links */}
          {links.map(([path, label]) => {
            const href = `${base}/${path}`;
            const isActive =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <Link
                key={path}
                href={href}
                className={`px-4 py-2 font-medium transition ${
                  isActive
                    ? "text-blue-900 font-semibold underline underline-offset-4"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* ===== RESOURCES DROPDOWN (STABLE) ===== */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setResourcesOpen(true)}
          >
            {/* Trigger Button (NO ARROW ICON) */}
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              onClick={() => setResourcesOpen((prev) => !prev)}
              onKeyDown={handleResourcesKey}
              className={`px-4 py-2 font-medium transition ${
                isInResources
                  ? "text-blue-900 font-semibold underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Resources
            </button>

            {/* Dropdown */}
            {resourcesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-60 bg-white border rounded-lg shadow-lg py-2 z-50"
                role="menu"
              >
                <Link
                  href={`${base}/resources/articles`}
                  role="menuitem"
                  tabIndex={0}
                  className={`flex items-center gap-3 px-4 py-2 text-sm transition ${
                    isArticles
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setResourcesOpen(false)}
                >
                  <span>📄</span>
                  Articles
                </Link>

                <Link
                  href={`${base}/resources/lesson-studies`}
                  role="menuitem"
                  tabIndex={0}
                  className={`flex items-center gap-3 px-4 py-2 text-sm transition ${
                    isLessons
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setResourcesOpen(false)}
                >
                  <span>📘</span>
                  Lesson Studies
                </Link>

                <Link
                  href={`${base}/resources/downloads`}
                  role="menuitem"
                  tabIndex={0}
                  className={`flex items-center gap-3 px-4 py-2 text-sm transition ${
                    isDownloads
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setResourcesOpen(false)}
                >
                  <span>⬇️</span>
                  Downloads
                </Link>
              </div>
            )}
          </div>

          {/* SUPPORT BUTTON */}
          <button
            type="button"
            onClick={handleSupportClick}
            className="ml-4 rounded-xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-blue-900 hover:bg-yellow-300 transition"
          >
            {lang === "es" ? "Apoyar" : "Support"}
          </button>

          {/* LANGUAGE */}
          <Link
            href={switchedPath}
            className="ml-3 text-xs text-gray-500 hover:text-blue-900 transition"
          >
            {lang === "en" ? "ES 🇪🇸" : "EN 🇺🇸"}
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 shadow-md">
          {/* Regular Links */}
          {links.map(([path, label]) => {
            const href = `${base}/${path}`;
            const isActive =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <Link
                key={path}
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-lg font-medium py-3 border-b transition ${
                  isActive
                    ? "text-blue-900 font-semibold"
                    : "text-gray-800 hover:text-blue-900"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Mobile Resources Section */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setResourcesOpen((prev) => !prev)}
              className={`block w-full text-left text-lg font-medium py-3 transition ${
                isInResources
                  ? "text-blue-900 font-semibold"
                  : "text-gray-800 hover:text-blue-900"
              }`}
            >
              Resources
            </button>

            {resourcesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href={`${base}/resources/articles`}
                  onClick={() => {
                    setOpen(false);
                    setResourcesOpen(false);
                  }}
                  className={`block text-base transition ${
                    isArticles
                      ? "text-blue-900 font-semibold"
                      : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  📄 Articles
                </Link>

                <Link
                  href={`${base}/resources/lesson-studies`}
                  onClick={() => {
                    setOpen(false);
                    setResourcesOpen(false);
                  }}
                  className={`block text-base transition ${
                    isLessons
                      ? "text-blue-900 font-semibold"
                      : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  📘 Lesson Studies
                </Link>

                <Link
                  href={`${base}/resources/downloads`}
                  onClick={() => {
                    setOpen(false);
                    setResourcesOpen(false);
                  }}
                  className={`block text-base transition ${
                    isDownloads
                      ? "text-blue-900 font-semibold"
                      : "text-gray-700 hover:text-blue-900"
                  }`}
                >
                  ⬇️ Downloads
                </Link>
              </div>
            )}
          </div>

          {/* SUPPORT */}
          <button
            onClick={handleSupportClick}
            className="block w-full mt-4 rounded-xl bg-yellow-400 px-5 py-3 text-center font-semibold text-blue-900"
          >
            {lang === "es" ? "Apoyar" : "Support"}
          </button>

          {/* LANGUAGE */}
          <Link
            href={switchedPath}
            onClick={() => setOpen(false)}
            className="block text-center text-sm text-gray-600 mt-3 hover:text-blue-900 transition"
          >
            {lang === "en" ? "Español 🇪🇸" : "English 🇺🇸"}
          </Link>
        </div>
      )}
    </motion.header>
  );
}
