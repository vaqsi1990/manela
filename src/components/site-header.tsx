"use client";

import { useState } from "react";
import { useLanguage, type Lang } from "./language";

const categories = [
  { id: "catalog", href: "#top" },
  { id: "security", href: "#lock" },
  { id: "sensors", href: "#entry" },
  { id: "lighting", href: "#entry" },
  { id: "hubs", href: "#hardware" },
  { id: "rentals", href: "#hardware" },
  { id: "about", href: "#about" },
] as const;

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [miss, setMiss] = useState("");

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
            <a href="#top" className="flex shrink-0 items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[6px] bg-black text-[22px] font-semibold leading-none text-white">
                M
              </span>
              <span className="leading-none">
                <span className="block text-[22px] font-bold tracking-[-0.04em]">MANELA</span>
               
              </span>
            </a>
            <ListMark className="md:hidden" label={t.list} />
          </div>

          <form
            className="min-w-0 md:flex-1"
            onSubmit={(event) => {
              event.preventDefault();
              setMiss(query.trim());
            }}
          >
            <label className="flex h-11 items-center gap-2.5 rounded-full border border-[#e4e4e4] bg-white px-4">
              <SearchIcon />
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

          <ListMark className="hidden md:flex" label={t.list} />
        </div>
      </div>

      <nav className="border-b border-[#ececec]" aria-label={t.navLabel}>
        <ul className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-4 text-[15px] sm:px-6">
          {categories.map((item) => (
            <li key={item.id} className="shrink-0">
              <a href={item.href} className="inline-flex h-12 items-center whitespace-nowrap hover:text-black">
                {t.categories[item.id]}
              </a>
            </li>
          ))}
        </ul>
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

function ListMark({ className, label }: { className?: string; label: string }) {
  return (
    <p className={`flex items-center gap-2 text-[15px] ${className ?? ""}`}>
      <BookmarkIcon />
      <span>{label}</span>
      <span className="text-[#9a9a9a]">0</span>
    </p>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-[#1c1c1c]">
      <circle cx="11" cy="11" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16 16.5 20 20.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-[#1c1c1c]">
      <path
        d="M7 4.5h10a1 1 0 0 1 1 1V20l-6-3.4L6 20V5.5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
