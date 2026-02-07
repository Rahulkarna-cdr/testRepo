import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const Footer = () => {
  const mainCategories = categories.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">ShopHub</h3>
            <p className="text-sm">
              Your one-stop shop for electronics, fashion, beauty, and more. Demo store – UI only.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Shop by Category</h3>
            <ul className="space-y-2 text-sm">
              {mainCategories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account/orders" className="hover:text-white transition-colors">Order History</Link></li>
              <li><Link to="/account/addresses" className="hover:text-white transition-colors">Addresses</Link></li>
              <li><Link to="/account/settings" className="hover:text-white transition-colors">Settings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} ShopHub. Demo purposes only. No real transactions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
