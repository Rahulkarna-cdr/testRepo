import { Link } from 'react-router-dom';

const CartSummary = ({ subtotal, discount = 0, itemCount }) => {
  const total = subtotal - discount;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({itemCount} items)</span>
          <span>${Number(subtotal).toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Discount</span>
            <span>-${Number(discount).toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
      </div>
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>${Number(total).toFixed(2)}</span>
        </div>
      </div>
      <Link
        to="/checkout"
        className="mt-6 block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Proceed to Checkout
      </Link>
      <Link
        to="/"
        className="mt-3 block w-full text-center text-gray-600 hover:text-gray-900 text-sm"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
