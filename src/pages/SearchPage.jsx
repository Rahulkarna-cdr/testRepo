import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return products.filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
  }, [q]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {q ? `Search results for "${searchParams.get('q')}"` : 'Search'}
        </h1>
        {!q ? (
          <p className="text-gray-600">Enter a search term to find products.</p>
        ) : (
          <p className="text-gray-600 mb-6">
            {results.length} product{results.length !== 1 ? 's' : ''} found
          </p>
        )}
        <ProductGrid products={q ? results : []} />
      </div>
    </div>
  );
};

export default SearchPage;
