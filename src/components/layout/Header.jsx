import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { getCartItemCount, wishlistIds } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = getCartItemCount();
  const wishlistCount = wishlistIds?.length ?? 0;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 shrink-0">
            ShopHub
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8"
          >
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/category/electronics"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/account/profile"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Account
            </Link>
            <Link
              to="/wishlist"
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center min-w-[1rem]">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={`Cart (${cartCount} items)`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center min-w-[1rem]">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-2">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-3 py-2 border rounded-lg"
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Search
              </button>
            </form>
            <Link to="/category/electronics" className="block py-2 text-gray-700">
              Categories
            </Link>
            <Link to="/account/profile" className="block py-2 text-gray-700">
              Account
            </Link>
            <Link to="/wishlist" className="block py-2 text-gray-700">
              Wishlist
            </Link>
            <Link to="/cart" className="block py-2 text-gray-700">
              Cart
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
