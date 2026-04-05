export type Brand = "Elliview" | "Zestech" | "Carlinkit";
export type BadgeType =
  | "Best Seller"
  | "VinFast Optimized"
  | "New"
  | "Premium"
  | null;

export interface Product {
  id: number;
  name: string;
  brand: Brand;
  price: number;
  image: string;
  badge: BadgeType;
  chip: string;
  ram: string;
  rom: string;
  android: string;
  compatibility: string[];
  rating: number;
  reviews: number;
  popular: number;
  createdAt: number;
}
