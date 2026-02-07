import { useState } from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';
import PriceTag from './PriceTag';

const ProductCard = ({
  product,
  onAddToWishlist,
  onQuickView,
  inWishlist = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const image = Array.isArray(product.images) ? product.images[0] : product.image;
  const productId = product.id;
  const price = product.price ?? 0;
  const originalPrice = product.originalPrice;
  const discount = product.discount;
  const rating = product.rating ?? 0;
  const reviewCount = product.reviewCount ?? 0;
  const linkTo = `/product/${productId}`;

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist?.(productId);
  };

  return (
    <div className="product-card group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{discount}%
          </span>
        </div>
      )}

      <button
        type="button"
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 z-10 bg-white/90 rounded-full p-2 shadow-md hover:scale-110 transition-transform"
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg
          className={`w-5 h-5 ${inWishlist ? 'fill-red-500 text-red-500' : 'fill-none'} stroke-current ${inWishlist ? '' : 'text-gray-600'}`}
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      <Link to={linkTo} className="block">
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <img
            src={image}
            alt={product.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {onQuickView && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                Quick View
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          {product.brand && (
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.brand}
            </p>
          )}
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <RatingStars rating={rating} size="sm" />
            {reviewCount > 0 && (
              <span className="text-xs text-gray-500">({reviewCount})</span>
            )}
          </div>
          <PriceTag
            price={price}
            originalPrice={originalPrice}
            discount={discount}
          />
          {product.inStock === false && (
            <p className="text-xs text-red-600 font-medium mt-2">Out of Stock</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
