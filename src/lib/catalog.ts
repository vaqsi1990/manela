export const catalogItems = [
  { id: "security", number: "01" },
  { id: "sensors", number: "02" },
  { id: "lighting", number: "03" },
  { id: "hubs", number: "04" },
  { id: "network", number: "05" },
  { id: "it", number: "06" },
] as const;

export type CatalogId = (typeof catalogItems)[number]["id"];

export function isCatalogId(value: string): value is CatalogId {
  return catalogItems.some((item) => item.id === value);
}
