"use client";

import { useLanguage } from "@/components/language";
import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  const { lang } = useLanguage();

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id} className="flex flex-col rounded-[8px] border border-[#e4e4e4] bg-white p-5">
          <h3 className="text-[17px] font-bold leading-snug">{product.name[lang]}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-[#4a4a4a]">{product.detail[lang]}</p>
          <p className="mt-6 text-[15px] font-semibold">{product.price} ₾</p>
        </li>
      ))}
    </ul>
  );
}
