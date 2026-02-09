import { useParams, Link } from 'react-router-dom';
import { getCategoryById } from '../data/categories';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductGrid from '../components/product/ProductGrid';
import { getProductsByCategory } from '../services/productService';
import { useMemo, useState, useEffect } from 'react';

const PAGE_SIZE = 24;

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const products = useMemo(
    () => (categoryId ? getProductsByCategory(categoryId) : []),
    [categoryId]
  );
  const displayed = useMemo(() => products.slice(0, visibleCount), [products, visibleCount]);
  const hasMore = products.length > visibleCount;

  useEffect(() => setVisibleCount(PAGE_SIZE), [categoryId]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: category.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{category.name}</h1>

        {category.subcategories?.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Subcategories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  to={`/category/${categoryId}/${sub.id}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <p className="font-medium text-gray-900">{sub.name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">All products</h2>
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
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;
