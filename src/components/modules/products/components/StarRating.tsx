import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-white/20"
          }
        />
      ))}
    </div>
  );
}
