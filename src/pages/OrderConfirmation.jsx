import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { id } = useParams();
  const { orders } = useCart();
  const order = orders.find((o) => o.id === parseInt(id));

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order not found</h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 mx-auto text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your order ID is <strong>#{order.id}</strong>
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Details
          </h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="text-gray-800 font-medium">{order.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800 font-medium">{order.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Address:</span>
              <span className="text-gray-800 font-medium">{order.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="text-gray-800 font-medium capitalize">
                {order.paymentMethod}
              </span>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Items Ordered:</h3>
            <ul className="space-y-1">
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-lg font-bold text-gray-800 mt-4 pt-4 border-t">
              <span>Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;

