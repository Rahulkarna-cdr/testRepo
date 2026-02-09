import { createContext, useContext, useState, useEffect } from 'react';
import { loadProducts } from '../services/productService';

const ProductsContext = createContext(null);

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return ctx;
}

export function ProductsProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    loadProducts()
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err?.message ?? 'Failed to load products');
        setLoading(false);
      });
  }, []);

  const retry = () => {
    setLoading(true);
    setError(null);
    loadProducts()
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err?.message ?? 'Failed to load products');
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600">Loading products…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4 px-4">
        <p className="text-red-600 text-center">{error}</p>
        <button
          type="button"
          onClick={retry}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ProductsContext.Provider value={{ loading: false, error: null }}>
      {children}
    </ProductsContext.Provider>
  );
}
