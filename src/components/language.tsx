"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ka" | "en";

const copy = {
  ka: {
    tagline: "ჭკვიანი ტექნოლოგიები სახლისა და ბიზნესისთვის",
    group: "მანელა ჯგუფისგან",
    search: "მოძებნე პროდუქტი, კატეგორია ან ბრენდი",
    noResults: (query: string) => `„${query}“ ვერ მოიძებნა.`,
    cart: "კალათა",
    navLabel: "კატალოგი",
    title: "MANELA — ჭკვიანი სახლი",
    categories: {
      catalog: "კატალოგი",
      security: "უსაფრთხოება და წვდომა",
      sensors: "სენსორები",
      lighting: "განათება",
      hubs: "ჰაბები და მართვა",
      rentals: "გაქირავებისთვის",
      about: "შესახებ",
    },
    catalogMenu: {
      security: "უსაფრთხოება და წვდომა",
      sensors: "სენსორები",
      lighting: "განათება",
      hubs: "ჰაბები და მართვა",
      network: "ქსელი",
      it: "კომპიუტერები და IT",
    },
  },
  en: {
    tagline: "Smart technology for the home and for business",
    group: "From the Manela group",
    search: "Search for a product, category, or brand",
    noResults: (query: string) => `No results for “${query}”.`,
    cart: "Cart",
    navLabel: "Catalog",
    title: "MANELA — Smart home",
    categories: {
      catalog: "Catalog",
      security: "Security & access",
      sensors: "Sensors",
      lighting: "Lighting",
      hubs: "Hubs & control",
      rentals: "For rentals",
      about: "About",
    },
    catalogMenu: {
      security: "Security & access",
      sensors: "Sensors",
      lighting: "Lighting",
      hubs: "Hubs & control",
      network: "Network",
      it: "Computers & IT",
    },
  },
} as const;

type Copy = (typeof copy)[Lang];

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const saved = window.localStorage.getItem("manela-lang");
    if (saved === "en" || saved === "ka") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy[lang].title;
    window.localStorage.setItem("manela-lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, t: copy[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
