"use client";

import {
  ArrowUpDown,
  ChevronDown,
  Filter,
  Search,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Brand, Product } from "./models/type";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/shared/utils";
import { ProductCard } from "./components/ProductCard";
import { Button } from "@/components/ui/button";

const MAX_PRICE = 6000000;
const ALL_BRANDS: Brand[] = ["Elliview", "Zestech", "Carlinkit"];
const ALL_VEHICLES = [
  "VinFast VF8",
  "VinFast VF9",
  "VinFast VF6",
  "VinFast VF7",
  "Ford",
  "Toyota",
  "Honda",
  "Mazda",
];

type SortOption = "popular" | "newest" | "price-asc" | "price-desc";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "VIN-TECH Pro 8",
    brand: "Elliview",
    price: 3490000,
    image:
      "https://images.unsplash.com/photo-1615473967657-9dc21773bf37?w=600&q=80",
    badge: "Best Seller",
    chip: "Snapdragon 6125",
    ram: "8GB",
    rom: "128GB",
    android: "Android 13",
    compatibility: ["VinFast VF8", "VinFast VF9"],
    rating: 4.9,
    reviews: 312,
    popular: 98,
    createdAt: 3,
  },
  {
    id: 2,
    name: "VIN-TECH Lite 4",
    brand: "Zestech",
    price: 1990000,
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&q=80",
    badge: "VinFast Optimized",
    chip: "Snapdragon 450",
    ram: "4GB",
    rom: "64GB",
    android: "Android 12",
    compatibility: ["VinFast VF6", "VinFast VF7"],
    rating: 4.7,
    reviews: 187,
    popular: 82,
    createdAt: 10,
  },
  {
    id: 3,
    name: "CarLink Ultra",
    brand: "Carlinkit",
    price: 2490000,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    badge: "New",
    chip: "Helio P60",
    ram: "4GB",
    rom: "64GB",
    android: "Android 13",
    compatibility: ["Ford", "Toyota"],
    rating: 4.5,
    reviews: 43,
    popular: 54,
    createdAt: 1,
  },
  {
    id: 4,
    name: "Elliview D4 Max",
    brand: "Elliview",
    price: 4290000,
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80",
    badge: "Premium",
    chip: "Snapdragon 665",
    ram: "6GB",
    rom: "128GB",
    android: "Android 13",
    compatibility: ["VinFast VF9"],
    rating: 4.8,
    reviews: 96,
    popular: 88,
    createdAt: 7,
  },
  {
    id: 5,
    name: "VIN-TECH Go",
    brand: "Zestech",
    price: 1290000,
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80",
    badge: null,
    chip: "MT8167",
    ram: "2GB",
    rom: "32GB",
    android: "Android 11",
    compatibility: ["Toyota", "Honda"],
    rating: 4.2,
    reviews: 74,
    popular: 40,
    createdAt: 30,
  },
  {
    id: 6,
    name: "CarPlay Pro X",
    brand: "Carlinkit",
    price: 2990000,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    badge: null,
    chip: "Helio P70",
    ram: "4GB",
    rom: "64GB",
    android: "Android 12",
    compatibility: ["Ford", "Mazda"],
    rating: 4.6,
    reviews: 58,
    popular: 66,
    createdAt: 14,
  },
  {
    id: 7,
    name: "Elliview E8 Ultra",
    brand: "Elliview",
    price: 5490000,
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=80",
    badge: "Best Seller",
    chip: "Snapdragon 8cx Gen3",
    ram: "8GB",
    rom: "256GB",
    android: "Android 14",
    compatibility: ["VinFast VF8", "VinFast VF9", "VinFast VF6", "VinFast VF7"],
    rating: 5.0,
    reviews: 204,
    popular: 95,
    createdAt: 5,
  },
  {
    id: 8,
    name: "VIN-TECH Max Pro",
    brand: "Zestech",
    price: 3990000,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    badge: "VinFast Optimized",
    chip: "Snapdragon 6125",
    ram: "8GB",
    rom: "128GB",
    android: "Android 13",
    compatibility: ["VinFast VF8", "VinFast VF9"],
    rating: 4.8,
    reviews: 151,
    popular: 91,
    createdAt: 8,
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [sort, setSort] = useState<SortOption>("popular");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleBrand = (brand: Brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const toggleVehicle = (vehicle: string) => {
    setSelectedVehicles((prev) =>
      prev.includes(vehicle)
        ? prev.filter((v) => v !== vehicle)
        : [...prev, vehicle],
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedVehicles([]);
    setPriceRange([0, MAX_PRICE]);
    setSearch("");
  };

  const activeFilterCount =
    selectedBrands.length +
    selectedVehicles.length +
    (priceRange[0] > 0 || priceRange[1] < MAX_PRICE ? 1 : 0);

  const filtered = useMemo(() => {
    let result = [...PRODUCTS];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.chip.toLowerCase().includes(q) ||
          p.compatibility.some((c) => c.toLowerCase().includes(q)),
      );
    }

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (selectedVehicles.length > 0) {
      result = result.filter((p) =>
        p.compatibility.some((c) => selectedVehicles.includes(c)),
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    if (sort === "popular") result.sort((a, b) => b.popular - a.popular);
    else if (sort === "newest")
      result.sort((a, b) => a.createdAt - b.createdAt);
    else if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, selectedBrands, selectedVehicles, priceRange, sort]);

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? "" : "hidden lg:block w-64 shrink-0"}`}>
      <div className="sticky top-24 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-primary" />
            <span className="font-display font-bold text-white text-sm">
              Bộ Lọc
            </span>
          </div>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              data-testid="button-clear-filters"
            >
              <X size={12} />
              Xóa ({activeFilterCount})
            </button>
          )}
        </div>

        {/* Brand */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Thương Hiệu
          </h4>
          <div className="space-y-2">
            {ALL_BRANDS.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-3 cursor-pointer group"
                data-testid={`filter-brand-${brand}`}
              >
                <div
                  onClick={() => toggleBrand(brand)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    selectedBrands.includes(brand)
                      ? "bg-primary border-primary"
                      : "border-white/20 group-hover:border-primary/50"
                  }`}
                >
                  {selectedBrands.includes(brand) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-background rounded-sm"
                    />
                  )}
                </div>
                <span
                  onClick={() => toggleBrand(brand)}
                  className={`text-sm transition-colors ${
                    selectedBrands.includes(brand)
                      ? "text-white"
                      : "text-muted-foreground group-hover:text-white"
                  }`}
                >
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Khoảng Giá
          </h4>
          <div className="px-1">
            <Slider
              min={0}
              max={MAX_PRICE}
              step={100000}
              value={priceRange}
              onValueChange={(val) => setPriceRange(val)}
              className="mb-3"
              data-testid="slider-price-range"
            />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Vehicle Compatibility */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Tương Thích Xe
          </h4>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {ALL_VEHICLES.map((vehicle) => (
              <label
                key={vehicle}
                className="flex items-center gap-3 cursor-pointer group"
                data-testid={`filter-vehicle-${vehicle.replace(/\s/g, "-")}`}
              >
                <div
                  onClick={() => toggleVehicle(vehicle)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all shrink-0 ${
                    selectedVehicles.includes(vehicle)
                      ? "bg-primary border-primary"
                      : "border-white/20 group-hover:border-primary/50"
                  }`}
                >
                  {selectedVehicles.includes(vehicle) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-background rounded-sm"
                    />
                  )}
                </div>
                <span
                  onClick={() => toggleVehicle(vehicle)}
                  className={`text-sm transition-colors leading-tight ${
                    selectedVehicles.includes(vehicle)
                      ? "text-white"
                      : "text-muted-foreground group-hover:text-white"
                  }`}
                >
                  {vehicle}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck size={14} className="text-primary" />
            <span>Bảo hành 2 năm 1 đổi 1</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap size={14} className="text-primary" />
            <span>Lắp đặt tận nơi miễn phí</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <main className="flex-1 pt-24 pb-20">
        {/* Page Header */}
        <div className="relative overflow-hidden border-b border-white/[0.06] mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <ShoppingCart size={13} className="text-primary" />
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                  Cửa Hàng
                </span>
              </div>
              <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-3">
                Tất Cả <span className="text-primary">Sản Phẩm</span>
              </h1>
              <p className="text-muted-foreground max-w-xl">
                Khám phá dòng sản phẩm Android Box cao cấp — tương thích VinFast
                và nhiều dòng xe phổ biến tại Việt Nam.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          {/* Search + Sort bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="search"
                placeholder="Tìm sản phẩm, thương hiệu, chip..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-muted-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/40 focus:shadow-[0_0_15px_rgba(0,149,255,0.15)]"
                data-testid="input-search"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  data-testid="button-clear-search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <ArrowUpDown
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none bg-white/[0.04] border border-white/[0.08] rounded-xl pl-9 pr-9 py-3 text-sm text-white outline-none focus:border-primary transition-all cursor-pointer min-w-[180px]"
                data-testid="select-sort"
              >
                <option value="popular" className="bg-[#0a0a14]">
                  Phổ biến nhất
                </option>
                <option value="newest" className="bg-[#0a0a14]">
                  Mới nhất
                </option>
                <option value="price-asc" className="bg-[#0a0a14]">
                  Giá: Thấp đến Cao
                </option>
                <option value="price-desc" className="bg-[#0a0a14]">
                  Giá: Cao đến Thấp
                </option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white hover:border-primary/40 transition-all"
              data-testid="button-mobile-filters"
            >
              <Filter size={14} />
              Bộ lọc
              {activeFilterCount > 0 && (
                <span className="bg-primary text-background text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Results count */}
          <div className="mb-6 text-sm text-muted-foreground">
            Hiển thị{" "}
            <span className="text-white font-semibold">{filtered.length}</span>{" "}
            sản phẩm
            {activeFilterCount > 0 && " (đã lọc)"}
          </div>

          {/* Main layout */}
          <div className="flex gap-10">
            {/* Desktop Sidebar */}
            <FilterSidebar />

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              <LayoutGroup>
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
                >
                  <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                      filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="col-span-full flex flex-col items-center justify-center py-24 text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                          <Search size={24} className="text-muted-foreground" />
                        </div>
                        <h3 className="font-display font-bold text-white text-lg mb-2">
                          Không tìm thấy sản phẩm
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6">
                          Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.
                        </p>
                        <button
                          onClick={clearFilters}
                          className="text-sm text-primary hover:underline"
                          data-testid="button-reset-filters"
                        >
                          Xóa tất cả bộ lọc
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </LayoutGroup>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-80 bg-[#080810] border-r border-white/[0.07] p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-white">
                  Bộ Lọc
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-muted-foreground hover:text-white transition-colors"
                  data-testid="button-close-filters"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterSidebar mobile={true} />
              <Button
                className="w-full mt-6 bg-primary text-background font-semibold rounded-xl glow-blue"
                onClick={() => setSidebarOpen(false)}
                data-testid="button-apply-filters"
              >
                Áp Dụng ({filtered.length} sản phẩm)
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
