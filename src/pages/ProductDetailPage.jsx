import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductById, getProductsByCategory } from '../services/productService';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/CartContext';
import Breadcrumb from '../components/layout/Breadcrumb';
import ImageGallery from '../components/product/ImageGallery';
import VariantSelector from '../components/product/VariantSelector';
import ReviewsList from '../components/product/ReviewsList';
import RatingStars from '../components/common/RatingStars';
import PriceTag from '../components/common/PriceTag';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: product.brand || 'Product', href: `/category/${product.category}` },
    { label: product.name }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariants);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedVariants);
    navigate('/cart');
  };

  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ImageGallery images={product.images} alt={product.name} />
          </div>
          <div>
            {product.brand && (
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <RatingStars rating={product.rating} size="md" showNumber />
              <span className="text-gray-500 text-sm">({product.reviewCount} reviews)</span>
            </div>
            <div className="mb-6">
              <PriceTag
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                size="lg"
              />
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            {product.variants?.length > 0 && (
              <div className="mb-6">
                <VariantSelector
                  variants={product.variants}
                  selected={selectedVariants}
                  onChange={setSelectedVariants}
                />
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  −
                </button>
                <span className="px-4 py-2 border-x min-w-[3rem] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 min-w-[140px]"
              >
                Add to Cart
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBuyNow}
                className="flex-1 min-w-[140px]"
              >
                Buy Now
              </Button>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <svg
                  className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'fill-none'} stroke-current text-gray-600`}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(product.specifications).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="text-gray-500">{k}</dt>
                      <dd className="text-gray-900 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-12">
          <ReviewsList productId={product.id} />
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">You may also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  inWishlist={isInWishlist(p.id)}
                  onAddToWishlist={toggleWishlist}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetailPage;
