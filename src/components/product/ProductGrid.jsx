import ProductCard from '../common/ProductCard';
import SkeletonLoader from '../common/SkeletonLoader';
import { useWishlist } from '../../context/CartContext';

const ProductGrid = ({ products, loading = false }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonLoader key={i} variant="card" />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg">No products found.</p>
        <p className="text-sm mt-2">Try adjusting filters or browse another category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          inWishlist={isInWishlist(product.id)}
          onAddToWishlist={toggleWishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
