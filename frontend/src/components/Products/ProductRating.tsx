import { Star, StarHalf, Star as StarOutline } from "lucide-react";

interface RatingProps {
  ratingCount: number;
}

const ProductRating = ({ ratingCount }: RatingProps) => {
  const fullStars = Math.floor(ratingCount);
  const hasHalfStar = ratingCount % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center gap-1 my-3">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          className="fill-yellow-400 text-yellow-400 w-4 h-4"
        />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <StarHalf className="fill-yellow-400 text-yellow-400 w-4 h-4" />
      )}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <StarOutline key={`empty-${index}`} className="text-gray-300 w-4 h-4" />
      ))}
    </div>
  );
};

export default ProductRating;
