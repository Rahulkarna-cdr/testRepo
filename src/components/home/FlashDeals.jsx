import { Link } from 'react-router-dom';
import { getFlashDeals } from '../../data/products';
import ProductCard from '../common/ProductCard';
import { useWishlist } from '../../context/CartContext';

const FlashDeals = () => {
  const deals = getFlashDeals();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (deals.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Flash Deals</h2>
        <Link
          to="/category/electronics"
          className="text-blue-600 font-medium hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {deals.map((product) => (
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

export default FlashDeals;
