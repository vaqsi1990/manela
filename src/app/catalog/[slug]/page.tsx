import { CategoryPage } from "@/components/category-page";
import { catalogItems, isCatalogId } from "@/lib/catalog";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return catalogItems.map((item) => ({ slug: item.id }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<main className="min-h-[40vh] flex-1" />}>
      <CatalogRoute params={params} />
    </Suspense>
  );
}

async function CatalogRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isCatalogId(slug)) notFound();
  return <CategoryPage slug={slug} />;
}
