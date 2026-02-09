import { useSearchParams } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import ProductGrid from '../components/product/ProductGrid';

const PAGE_SIZE = 24;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    if (!q) return [];
    return getProducts().filter(
      (p) =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
  }, [q]);
  const displayed = useMemo(() => results.slice(0, visibleCount), [results, visibleCount]);
  const hasMore = results.length > visibleCount;

  useEffect(() => setVisibleCount(PAGE_SIZE), [q]);

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
        <ProductGrid products={q ? displayed : []} />
        {q && hasMore && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
