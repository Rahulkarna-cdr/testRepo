import { Link } from 'react-router-dom';
import { dummyOrders } from '../../data/orders';
import Badge from '../../components/common/Badge';
import Breadcrumb from '../../components/layout/Breadcrumb';

const statusVariant = (status) => {
  switch (status) {
    case 'delivered':
      return 'success';
    case 'shipped':
      return 'info';
    case 'cancelled':
      return 'danger';
    default:
      return 'default';
  }
};

const OrderHistoryPage = () => {
  const orders = dummyOrders;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Account', href: '/account/profile' },
            { label: 'Order History' }
          ]}
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()} · {order.itemCount} item
                    {order.itemCount !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={statusVariant(order.status)}>
                    {order.status}
                  </Badge>
                  <span className="font-bold text-gray-900">
                    ${Number(order.total).toFixed(2)}
                  </span>
                </div>
              </div>
              <ul className="divide-y divide-gray-100">
                {order.items.map((item, index) => (
                  <li key={index} className="p-4 md:p-6 flex justify-between text-sm">
                    <span className="text-gray-700">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="p-4 md:p-6 bg-gray-50 text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-1">Shipping address</p>
                <p>
                  {order.shippingAddress?.name},{' '}
                  {order.shippingAddress?.street},{' '}
                  {order.shippingAddress?.city}, {order.shippingAddress?.state}{' '}
                  {order.shippingAddress?.zipCode}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/account/profile"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
