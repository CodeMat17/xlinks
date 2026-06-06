"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon, GraduationCap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  {
    href: "#services",
    label: "Services",
    children: [
      { href: "#admissions", label: "Admissions" },
      { href: "#visa", label: "Visa Processing" },
      { href: "#language", label: "Language Training" },
      { href: "#travel", label: "Travel Services" },
    ],
  },
  { href: "#destinations", label: "Destinations" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-md shadow-emerald-100/50 dark:shadow-emerald-900/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Xlinks Educational Consult – Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
              <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-900 font-black text-emerald-700 dark:text-emerald-400 tracking-tight">
                XLINKS
              </span>
              <span className="block text-[10px] font-semibold text-teal-600 dark:text-teal-400 tracking-widest uppercase -mt-0.5">
                Educational Consult
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-600 font-semibold transition-colors ${
                      scrolled
                        ? "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-emerald-100 dark:border-emerald-900/50 overflow-hidden py-1"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.href} role="none">
                            <a
                              href={child.href}
                              role="menuitem"
                              onClick={(e) => { e.preventDefault(); scrollTo(child.href); setServicesOpen(false); }}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      scrolled
                        ? "text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
                suppressHydrationWarning
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2.5 rounded-xl transition-colors ${
                  scrolled
                    ? "text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Moon className="w-5 h-5" aria-hidden="true" />
                )}
              </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200"
            >
              Get Started
            </a>

            {/* Mobile menu button */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                    scrolled
                      ? "text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-0">
                <ul className="py-4 space-y-1 px-2 mt-6" role="list">
                  {navLinks.map((link) =>
                    link.children ? (
                      <li key={link.href}>
                        <button
                          onClick={() => setMobileServicesOpen((o) => !o)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                          aria-expanded={mobileServicesOpen}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>
                        {mobileServicesOpen && (
                          <ul className="pl-4 mt-1 space-y-1" role="list">
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <a
                                  href={child.href}
                                  onClick={(e) => { e.preventDefault(); scrollTo(child.href); }}
                                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                        className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                    )
                  )}
                  <li className="pt-2">
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                      className="block px-4 py-3 rounded-xl text-base font-bold text-white text-center bg-gradient-to-r from-emerald-600 to-teal-600"
                    >
                      Get Started Free
                    </a>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>


      </nav>
    </header>
  );
}
