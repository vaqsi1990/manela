import { Laptop, Lightbulb, Lock, Wifi, type LucideIcon, type LucideProps } from "lucide-react";
import type { CatalogId } from "@/lib/catalog";

export function SensorIcon({ size = 24, strokeWidth = 1.7, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.2 8.4a4.2 4.2 0 0 0 0 7.2" />
      <path d="M6.8 6.2a7.2 7.2 0 0 0 0 11.6" />
      <circle cx="12" cy="12" r="1.35" fill="currentColor" stroke="none" />
      <path d="M14.8 8.4a4.2 4.2 0 0 1 0 7.2" />
      <path d="M17.2 6.2a7.2 7.2 0 0 1 0 11.6" />
    </svg>
  );
}

export function SwitchIcon({ size = 24, strokeWidth = 1.7, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="8.25" width="18" height="7.5" rx="3.75" />
      <circle cx="8.2" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const catalogIcons: Record<CatalogId, LucideIcon | typeof SensorIcon> = {
  security: Lock,
  sensors: SensorIcon,
  lighting: Lightbulb,
  hubs: SwitchIcon,
  network: Wifi,
  it: Laptop,
};
