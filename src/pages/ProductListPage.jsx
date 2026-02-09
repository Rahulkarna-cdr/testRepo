import { useParams } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import { getCategoryById } from '../data/categories';
import { getProductsByCategory, getBrands } from '../services/productService';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductGrid from '../components/product/ProductGrid';
import SortDropdown from '../components/product/SortDropdown';
import ProductFilters from '../components/product/ProductFilters';

const sortProducts = (list, sortBy) => {
  const arr = [...list];
  switch (sortBy) {
    case 'price-asc':
      return arr.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    case 'price-desc':
      return arr.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    case 'newest':
      return arr;
    case 'rating':
      return arr.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case 'popularity':
    default:
      return arr.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
  }
};

const filterProducts = (list, filters) => {
  if (!filters || !Object.keys(filters).length) return list;
  return list.filter((p) => {
    const price = p.price ?? 0;
    if (filters.priceRange) {
      const range = filters.priceRange;
      if (range === '500+') {
        if (price < 500) return false;
      } else {
        const [min, max] = range.split('-').map(Number);
        if (price < min || (max != null && !isNaN(max) && price > max)) return false;
      }
    }
    if (filters.rating) {
      const r = Number(filters.rating);
      if ((p.rating ?? 0) < r) return false;
    }
    if (filters.brands?.length && p.brand && !filters.brands.includes(p.brand)) return false;
    return true;
  });
};

const PAGE_SIZE = 24;

const ProductListPage = () => {
  const { categoryId, subcategoryId } = useParams();
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({});
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const category = getCategoryById(categoryId);
  const rawProducts = useMemo(
    () => getProductsByCategory(categoryId, subcategoryId || null),
    [categoryId, subcategoryId]
  );
  const brands = useMemo(() => getBrands(), []);
  const filtered = useMemo(() => filterProducts(rawProducts, filters), [rawProducts, filters]);
  const sorted = useMemo(() => sortProducts(filtered, sortBy), [filtered, sortBy]);
  const displayed = useMemo(() => sorted.slice(0, visibleCount), [sorted, visibleCount]);
  const hasMore = sorted.length > visibleCount;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [categoryId, subcategoryId, filters, sortBy]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
      </div>
    );
  }

  const subcategory = subcategoryId
    ? category.subcategories?.find((s) => s.id === subcategoryId)
    : null;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: category.name, href: `/category/${categoryId}` },
    ...(subcategory ? [{ label: subcategory.name }] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {subcategory ? subcategory.name : category.name}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 shrink-0">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              brands={brands}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                {sorted.length} product{sorted.length !== 1 ? 's' : ''}
              </p>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>
            <ProductGrid products={displayed} />
            {hasMore && (
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
      </main>
    </div>
  );
};

export default ProductListPage;
