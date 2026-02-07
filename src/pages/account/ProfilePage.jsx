import { Link } from 'react-router-dom';
import { currentUser } from '../../data/users';

const ProfilePage = () => {
  const user = currentUser;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 md:p-8 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 grid sm:grid-cols-2 gap-6">
            <Link
              to="/account/orders"
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
            >
              <span className="text-2xl">📦</span>
              <div>
                <p className="font-medium text-gray-900">Order History</p>
                <p className="text-sm text-gray-500">View and track your orders</p>
              </div>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link
              to="/account/addresses"
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
            >
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-medium text-gray-900">Addresses</p>
                <p className="text-sm text-gray-500">Manage shipping addresses</p>
              </div>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link
              to="/account/settings"
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
            >
              <span className="text-2xl">⚙️</span>
              <div>
                <p className="font-medium text-gray-900">Settings</p>
                <p className="text-sm text-gray-500">Account preferences</p>
              </div>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
            >
              <span className="text-2xl">❤️</span>
              <div>
                <p className="font-medium text-gray-900">Wishlist</p>
                <p className="text-sm text-gray-500">Saved items</p>
              </div>
              <span className="ml-auto text-gray-400">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
