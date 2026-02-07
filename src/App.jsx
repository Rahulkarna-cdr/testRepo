import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import ProfilePage from './pages/account/ProfilePage';
import OrderHistoryPage from './pages/account/OrderHistoryPage';
import AddressesPage from './pages/account/AddressesPage';
import SettingsPage from './pages/account/SettingsPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="category/:categoryId" element={<CategoryPage />} />
            <Route path="category/:categoryId/:subcategoryId" element={<ProductListPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation/:id" element={<OrderConfirmation />} />
            <Route path="account">
              <Route path="profile" element={<ProfilePage />} />
              <Route path="orders" element={<OrderHistoryPage />} />
              <Route path="addresses" element={<AddressesPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
