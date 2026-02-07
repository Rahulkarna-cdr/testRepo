import { getTrendingProducts } from '../../data/products';
import ProductCard from '../common/ProductCard';
import { useWishlist } from '../../context/CartContext';

const TrendingProducts = () => {
  const products = getTrendingProducts();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (products.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h2>
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
    </section>
  );
};

export default TrendingProducts;
