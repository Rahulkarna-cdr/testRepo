import { Link } from 'react-router-dom';
import PriceTag from '../common/PriceTag';
import QuantitySelector from './QuantitySelector';

const CartItem = ({ product, quantity, selectedVariants, onUpdateQuantity, onRemove }) => {
  const image = Array.isArray(product?.images) ? product.images[0] : product?.image;
  const price = product?.price ?? 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-4">
      <Link
        to={`/product/${product?.id}`}
        className="shrink-0 w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-100"
      >
        <img
          src={image}
          alt={product?.name}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/product/${product?.id}`} className="font-medium text-gray-900 hover:text-blue-600 line-clamp-2">
          {product?.name}
        </Link>
        {product?.brand && (
          <p className="text-xs text-gray-500 mt-0.5">{product.brand}</p>
        )}
        {selectedVariants && Object.keys(selectedVariants).length > 0 && (
          <p className="text-xs text-gray-600 mt-1">
            {Object.entries(selectedVariants).map(([k, v]) => `${k}: ${v}`).join(', ')}
          </p>
        )}
        <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
          <QuantitySelector
            value={quantity}
            min={1}
            onChange={(q) => onUpdateQuantity(product?.id, q)}
          />
          <PriceTag price={price * quantity} size="md" />
        </div>
      </div>
      <div className="flex items-start sm:items-center">
        <button
          type="button"
          onClick={() => onRemove(product?.id)}
          className="text-red-600 hover:text-red-700 p-1"
          aria-label="Remove from cart"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
