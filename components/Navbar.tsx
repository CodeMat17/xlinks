"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All services" },
      { href: "/admissions", label: "University admissions" },
      { href: "/visa-processing", label: "Visa processing" },
      { href: "/services#language", label: "Language training" },
      { href: "/services#destinations", label: "Tours & holidays" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Desktop dropdown. Opens on click or focus, closes on Escape, outside
 *  pointer-down, or when focus leaves the whole group — no blur timers. */
function ServicesMenu({
  link,
  isActive,
  onDark,
}: {
  link: NavLink;
  isActive: boolean;
  onDark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        wrapRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={wrapRef}
      className="relative"
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={menuId}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 font-display text-sm font-semibold transition-colors ${
          onDark
            ? "text-white/85 hover:bg-white/10 hover:text-white"
            : isActive
              ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300"
              : "text-ink-muted hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/60 dark:hover:text-brand-300"
        }`}
      >
        {link.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="absolute top-full left-0 mt-2 w-60 overflow-hidden rounded-2xl border border-hairline bg-surface p-1.5 shadow-xl"
      >
        {link.children?.map((child) => (
          <li key={child.href + child.label}>
            <Link
              href={child.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/60 dark:hover:text-brand-300"
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function ThemeToggle({ onDark }: { onDark: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-xl p-2.5 transition-colors ${
        onDark
          ? "text-white/85 hover:bg-white/10 hover:text-white"
          : "text-ink-muted hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/60"
      }`}
      // Deliberately theme-independent: a label derived from resolvedTheme
      // differs between server and client render and causes a hydration
      // mismatch on the very first paint.
      aria-label="Switch between light and dark theme"
      aria-pressed={isDark}
    >
      {/* Both icons render; CSS picks one. Avoids a hydration mismatch and
          the icon-swap flash without waiting for an effect. */}
      <Sun className="hidden h-5 w-5 dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();
  const scrolled = useScrolled();

  const isHome = pathname === "/";
  // Transparent only over the hero on the homepage.
  const onDark = isHome && !scrolled;

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname],
  );

  // The sheet is closed by each link's own onClick, so no route-change effect
  // is needed here.

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        onDark
          ? "bg-transparent"
          : "border-b border-hairline bg-surface/85 shadow-sm backdrop-blur-lg"
      }`}
    >
      <nav className="shell" aria-label="Primary">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Xlinks Educational and Travel Consult — home"
          >
            {/* Eager but not `priority`: a 40px mark does not deserve a
                preload slot competing with the hero image for bandwidth,
                but it shouldn't pop in either. Empty alt because the
                surrounding link is already labelled. */}
            <Image
              src="/xlinks_logo.webp"
              alt=""
              width={40}
              height={40}
              loading="eager"
              className="h-9 w-9 rounded-lg object-cover lg:h-10 lg:w-10"
            />
            <span className="leading-tight">
              <span
                className={`block font-display text-base font-extrabold tracking-tight transition-colors ${
                  onDark ? "text-white" : "text-brand-700 dark:text-brand-300"
                }`}
              >
                XLINKS
              </span>
              <span
                className={`block font-display text-[0.5625rem] font-bold tracking-[0.14em] uppercase transition-colors ${
                  onDark ? "text-white/65" : "text-ink-subtle"
                }`}
              >
                Educational &amp; Travel Consult
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <ServicesMenu
                  key={link.href}
                  link={link}
                  isActive={isActive(link.href)}
                  onDark={onDark}
                />
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2 font-display text-sm font-semibold transition-colors ${
                      onDark
                        ? "text-white/85 hover:bg-white/10 hover:text-white"
                        : isActive(link.href)
                          ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300"
                          : "text-ink-muted hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/60 dark:hover:text-brand-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle onDark={onDark} />

            <Link
              href="/contact"
              className="btn-primary hidden px-5 py-2.5 sm:inline-flex"
            >
              Free consultation
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={`rounded-xl p-2.5 transition-colors lg:hidden ${
                    onDark
                      ? "text-white hover:bg-white/10"
                      : "text-ink-muted hover:bg-brand-50 dark:hover:bg-brand-950/60"
                  }`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full p-0 sm:max-w-sm">
                <SheetTitle className="px-6 pt-6 font-display text-lg font-extrabold text-ink">
                  Menu
                </SheetTitle>

                <nav aria-label="Mobile" className="px-3 pt-4 pb-8">
                  <ul className="space-y-1">
                    {navLinks.map((link) =>
                      link.children ? (
                        <li key={link.href}>
                          <button
                            type="button"
                            onClick={() => setMobileServices((o) => !o)}
                            aria-expanded={mobileServices}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-display text-base font-semibold text-ink transition-colors hover:bg-brand-50 dark:hover:bg-brand-950/60"
                          >
                            {link.label}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
                                mobileServices ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                          <ul hidden={!mobileServices} className="mt-1 space-y-0.5 pl-4">
                            {link.children.map((child) => (
                              <li key={child.href + child.label}>
                                <Link
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-950/60 dark:hover:text-brand-300"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`block rounded-xl px-4 py-3 font-display text-base font-semibold transition-colors ${
                              isActive(link.href)
                                ? "bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300"
                                : "text-ink hover:bg-brand-50 dark:hover:bg-brand-950/60"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>

                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary mt-4 w-full"
                  >
                    Book a free consultation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
