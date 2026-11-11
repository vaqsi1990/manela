"use client";

import { LanguageProvider } from "./language";
import { SiteHeader } from "./site-header";

export function HomeExperience() {
  return (
    <LanguageProvider>
      <SiteHeader />
    </LanguageProvider>
  );
}
