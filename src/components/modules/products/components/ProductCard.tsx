import { AnimatePresence, motion } from "framer-motion";
import { Eye, ShoppingCart, Zap } from "lucide-react";
import { useState } from "react";
import { Product } from "../models/type";
import { StarRating } from "./StarRating";
import { formatPrice } from "@/shared/utils";

const BADGE_STYLES: Record<string, string> = {
  "Best Seller": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "VinFast Optimized": "bg-primary/20 text-primary border-primary/30",
  New: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Premium: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-card border border-white/[0.07] rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,149,255,0.1)] flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${BADGE_STYLES[product.badge]}`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur hover:bg-white/20 transition-colors"
                data-testid={`button-quickview-${product.id}`}
              >
                <Eye size={16} />
                Xem Nhanh
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs text-muted-foreground font-medium">
            {product.brand}
          </span>
        </div>
        <h3 className="font-display font-bold text-white text-base leading-tight mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 rounded px-2 py-0.5 text-muted-foreground">
            {product.chip}
          </span>
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 rounded px-2 py-0.5 text-muted-foreground">
            {product.ram} RAM
          </span>
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 rounded px-2 py-0.5 text-muted-foreground">
            {product.rom} ROM
          </span>
          <span className="text-[10px] font-medium bg-white/5 border border-white/10 rounded px-2 py-0.5 text-muted-foreground">
            {product.android}
          </span>
        </div>

        {/* Compatibility */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.compatibility.slice(0, 3).map((v) => (
            <span
              key={v}
              className="text-[9px] bg-primary/10 text-primary border border-primary/20 rounded px-1.5 py-0.5"
            >
              {v}
            </span>
          ))}
          {product.compatibility.length > 3 && (
            <span className="text-[9px] bg-white/5 text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">
              +{product.compatibility.length - 3}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="text-xl font-display font-bold text-primary mb-3">
            {formatPrice(product.price)}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-xl border transition-all duration-200 ${
                added
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                  : "bg-white/5 border-white/10 text-white hover:border-primary/40 hover:text-primary"
              }`}
              data-testid={`button-addtocart-${product.id}`}
            >
              <ShoppingCart size={13} />
              {added ? "Đã thêm!" : "Giỏ hàng"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 rounded-xl bg-primary text-background hover:bg-primary/90 glow-blue transition-all duration-200"
              data-testid={`button-buynow-${product.id}`}
            >
              <Zap size={13} />
              Mua Ngay
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
