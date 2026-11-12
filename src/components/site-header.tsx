"use client";

import { catalogItems } from "@/lib/catalog";
import { ArrowUpRight, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { catalogIcons } from "./catalog-icons";
import { useLanguage, type Lang } from "./language";

const categories = [
  { id: "catalog", href: "/" },
  { id: "security", href: "/#lock" },
  { id: "sensors", href: "/#entry" },
  { id: "lighting", href: "/#entry" },
  { id: "hubs", href: "/#hardware" },
  { id: "rentals", href: "/#hardware" },
  { id: "about", href: "/#about" },
] as const;

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const openedByHover = useRef(false);
  const [query, setQuery] = useState("");
  const [miss, setMiss] = useState("");
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setCatalogOpen(false);
  }

  useEffect(() => {
    openedByHover.current = false;
  }, [pathname]);

  useEffect(() => {
    if (!catalogOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setCatalogOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCatalogOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [catalogOpen]);

  return (
    <header className="sticky top-0 z-20 bg-white text-[#1c1c1c]">
      <div className="border-b border-[#ececec]">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[13px] sm:px-6">
          <p className="truncate text-black">{t.tagline}</p>
          <div className="flex shrink-0 items-center gap-3">
            <LanguageButton code="ka" current={lang} onSelect={setLang}>
              ქარ
            </LanguageButton>
            <LanguageButton code="en" current={lang} onSelect={setLang}>
              EN
            </LanguageButton>
          </div>
        </div>
      </div>

      <div className="border-b border-[#ececec]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 md:min-h-[74px] md:flex-row md:items-center md:gap-6 md:py-0">
          <div className="flex items-center justify-between gap-3 md:contents">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-black text-[22px] font-semibold leading-none text-white">
                M
              </span>
              <span className="leading-none">
                <span className="block text-[22px] font-bold tracking-[-0.04em]">MANELA</span>
               
              </span>
            </Link>
            <CartMark className="md:hidden" label={t.cart} />
          </div>

          <form
            className="min-w-0 md:flex-1"
            onSubmit={(event) => {
              event.preventDefault();
              setMiss(query.trim());
            }}
          >
            <label className="flex h-11 items-center gap-2.5 rounded-full border border-[#e4e4e4] bg-white px-4">
              <Search className="shrink-0 text-[#1c1c1c]" size={18} strokeWidth={1.7} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setMiss("");
                }}
                placeholder={t.search}
                className="w-full bg-transparent text-sm text-[#1c1c1c] outline-none placeholder:text-[#b0b0b0]"
              />
            </label>
            {miss ? <p className="px-4 pt-1 text-xs text-black">{t.noResults(miss)}</p> : null}
          </form>

          <CartMark className="hidden md:flex" label={t.cart} />
        </div>
      </div>

      <nav
        ref={navRef}
        className="relative border-b border-[#ececec]"
        aria-label={t.navLabel}
        onMouseLeave={(event) => {
          const next = event.relatedTarget;
          if (next instanceof Node && event.currentTarget.contains(next)) return;
          openedByHover.current = false;
          setCatalogOpen(false);
        }}
      >
        <ul className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-4 text-[15px] sm:px-6">
          {categories.map((item) => (
            <li
              key={item.id}
              className="shrink-0"
              onMouseEnter={() => {
                if (item.id !== "catalog") setCatalogOpen(false);
              }}
            >
              {item.id === "catalog" ? (
                <button
                  type="button"
                  className={`inline-flex h-12 items-center whitespace-nowrap ${catalogOpen ? "shadow-[inset_0_-2px_0_0_#171614]" : ""}`}
                  aria-expanded={catalogOpen}
                  aria-controls="catalog-menu"
                  onMouseEnter={() => {
                    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                      openedByHover.current = true;
                      setCatalogOpen(true);
                    }
                  }}
                  onClick={() => {
                    if (openedByHover.current) return;
                    setCatalogOpen((open) => !open);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setCatalogOpen(true);
                    }
                  }}
                >
                  {t.categories.catalog}
                </button>
              ) : (
                <a href={item.href} className="inline-flex h-12 items-center whitespace-nowrap hover:text-black">
                  {t.categories[item.id]}
                </a>
              )}
            </li>
          ))}
        </ul>

        {catalogOpen ? (
          <div id="catalog-menu" className="catalog-panel absolute inset-x-0 top-[calc(100%-2px)] z-30 max-h-[calc(100dvh-10.5rem)] overflow-y-auto pt-0.5">
            <div className="border-b border-[#ececec] bg-white">
            <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-5 px-4 py-5 sm:grid-cols-2 sm:px-6 md:grid-cols-3">
              {catalogItems.map((item) => {
                const Icon = catalogIcons[item.id];
                return (
                  <li key={item.id}>
                    <Link
                      href={`/catalog/${item.id}`}
                      className="group flex flex-col"
                      onClick={() => setCatalogOpen(false)}
                    >
                      <span className="text-[12px] font-semibold tracking-[0.08em] text-[#8b9098]">{item.number}</span>
                      <Icon className="mt-2.5 text-[#1c1c1c]" size={20} strokeWidth={1.6} aria-hidden="true" />
                      <span className="mt-2.5 flex items-center gap-3">
                        <span className="max-w-[9.5rem] text-[14px] font-bold leading-snug text-[#1c1c1c]">
                          {t.catalogMenu[item.id]}
                        </span>
                        <ArrowUpRight
                          className="shrink-0 text-[#8b9098] transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1c1c1c]"
                          size={14}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function LanguageButton({
  code,
  current,
  onSelect,
  children,
}: {
  code: Lang;
  current: Lang;
  onSelect: (lang: Lang) => void;
  children: string;
}) {
  const active = code === current;
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(code)}
      className={active ? "font-semibold text-[#1c1c1c]" : "text-[#9a9a9a] hover:text-[#1c1c1c]"}
    >
      {children}
    </button>
  );
}

function CartMark({ className, label }: { className?: string; label: string }) {
  return (
    <p className={`flex items-center gap-2 text-[15px] ${className ?? ""}`}>
      <ShoppingCart className="text-[#1c1c1c]" size={22} strokeWidth={1.7} aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <span className="text-black">0</span>
    </p>
  );
}
