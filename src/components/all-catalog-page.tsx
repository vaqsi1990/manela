"use client";

import { ProductGrid } from "@/components/product-grid";
import { useLanguage } from "@/components/language";
import { catalogItems } from "@/lib/catalog";
import { products, productsIn } from "@/lib/products";
import { LayoutGrid } from "lucide-react";

export function AllCatalogPage() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-16 sm:px-6">
      <p className="text-[13px] font-semibold tracking-[0.08em] text-[#8b9098]">07</p>
      <LayoutGrid className="mt-6 text-[#1c1c1c]" size={32} strokeWidth={1.6} aria-hidden="true" />
      <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight">{t.catalogMenu.all}</h1>
      <p className="mt-3 text-sm text-[#8b9098]">{t.productCount(products.length)}</p>
      <div className="mt-12 flex flex-col gap-14">
        {catalogItems.map((item) => (
          <section key={item.id}>
            <h2 className="mb-5 text-2xl font-bold tracking-tight">{t.catalogMenu[item.id]}</h2>
            <ProductGrid products={productsIn(item.id)} />
          </section>
        ))}
      </div>
    </main>
  );
}
