import { useState } from 'react';
import { currentUser } from '../../data/users';
import Breadcrumb from '../../components/layout/Breadcrumb';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Account', href: '/account/profile' },
            { label: 'Settings' }
          ]}
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <section className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile</h2>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Name:</span> {currentUser.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Email:</span> {currentUser.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-700">Phone:</span> {currentUser.phone}
              </p>
              <button
                type="button"
                className="text-blue-600 hover:underline font-medium text-sm"
              >
                Edit profile
              </button>
            </div>
          </section>

          <section className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Order & shipping notifications</span>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Newsletter & offers</span>
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
            </div>
          </section>

          <section className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
            <p className="text-sm text-gray-600 mb-4">
              Change your password or manage security options. (Demo – no real actions.)
            </p>
            <button
              type="button"
              className="text-blue-600 hover:underline font-medium text-sm"
            >
              Change password
            </button>
          </section>
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

export default SettingsPage;
