import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { convertToNPR } from '../utils/currency';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">Add some items to get started!</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-4">
                  <label className="text-gray-700">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <button                     
                    onClick={() => {
                        // Track decrement when clicking minus button
                        if (window.vizme) {
                          window.vizme.decrement("add_to_cart", 1, {
                            product_id: item.id.toString(),
                            product_name: item.name,
                            category: item.category || "Unknown",
                            price: String(convertToNPR(item.price)),  
                          });
                        }
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => {
                        // Track increment when clicking plus button
                        if (window.vizme) {
                          window.vizme.increment("add_to_cart", 1, {
                            product_id: item.id.toString(),
                            product_name: item.name,
                            category: item.category || "Unknown",
                            price: String(convertToNPR(item.price)),  
                          });
                        }
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => {
                  // Track decrement by full quantity when removing item
                  if (window.vizme) {
                    window.vizme.decrement("add_to_cart", item.quantity, {
                      product_id: item.id.toString(),
                      product_name: item.name,
                      category: item.category || "Unknown",
                      price: String(convertToNPR(item.price)),  
                    });
                  }
                  removeFromCart(item.id);
                }}
                className="text-red-600 hover:text-red-800 self-start sm:self-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/"
              className="block w-full text-center text-gray-600 hover:text-gray-800 mt-3"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

