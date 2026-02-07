import { currentUser } from '../../data/users';
import Badge from '../../components/common/Badge';
import Breadcrumb from '../../components/layout/Breadcrumb';
import { Link } from 'react-router-dom';

const AddressesPage = () => {
  const addresses = currentUser.addresses ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Account', href: '/account/profile' },
            { label: 'Addresses' }
          ]}
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Saved Addresses</h1>

        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <p className="font-semibold text-gray-900 capitalize">{addr.type}</p>
                {addr.isDefault && (
                  <Badge variant="success">Default</Badge>
                )}
              </div>
              <p className="text-gray-700">{addr.name}</p>
              <p className="text-gray-600 text-sm mt-1">{addr.street}</p>
              <p className="text-gray-600 text-sm">
                {addr.city}, {addr.state} {addr.zipCode}
              </p>
              <p className="text-gray-600 text-sm">{addr.country}</p>
              <p className="text-gray-500 text-sm mt-2">{addr.phone}</p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Edit
                </button>
                {!addr.isDefault && (
                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:underline"
                  >
                    Set as default
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
        >
          + Add new address
        </button>

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

export default AddressesPage;
