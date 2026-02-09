import { useMemo } from 'react';
import { currentUser } from '../../data/users';
import { getProductById } from '../../services/productService';
import ProductCard from '../common/ProductCard';
import { useWishlist } from '../../context/CartContext';

const RecentlyViewed = () => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const productIds = currentUser.recentlyViewed || [];
  const products = useMemo(
    () =>
      productIds
        .map((id) => getProductById(id))
        .filter(Boolean)
        .slice(0, 6),
    [productIds]
  );

  if (products.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inWishlist={isInWishlist(product.id)}
            onAddToWishlist={toggleWishlist}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;
