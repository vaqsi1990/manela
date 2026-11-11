"use client";

import { catalogIcons } from "@/components/catalog-icons";
import { useLanguage } from "@/components/language";
import { ProductGrid } from "@/components/product-grid";
import { catalogItems, type CatalogId } from "@/lib/catalog";
import { productsIn } from "@/lib/products";

export function CategoryPage({ slug }: { slug: CatalogId }) {
  const { t } = useLanguage();
  const item = catalogItems.find((entry) => entry.id === slug) ?? catalogItems[0];
  const Icon = catalogIcons[item.id];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-16 sm:px-6">
      <p className="text-[13px] font-semibold tracking-[0.08em] text-[#8b9098]">{item.number}</p>
      <Icon className="mt-6 text-[#1c1c1c]" size={32} strokeWidth={1.6} aria-hidden="true" />
      <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight">{t.catalogMenu[item.id]}</h1>
      <p className="mt-3 text-sm text-[#8b9098]">{t.productCount(productsIn(item.id).length)}</p>
      <div className="mt-10">
        <ProductGrid products={productsIn(item.id)} />
      </div>
    </main>
  );
}
