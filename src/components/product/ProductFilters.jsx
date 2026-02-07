import { useState } from 'react';

const PRICE_RANGES = [
  { id: '0-25', label: 'Under $25', min: 0, max: 25 },
  { id: '25-50', label: '$25 - $50', min: 25, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: '100-500', label: '$100 - $500', min: 100, max: 500 },
  { id: '500+', label: '$500 & above', min: 500, max: Infinity }
];

const RATINGS = [4, 3, 2, 1];

const ProductFilters = ({ filters, onFiltersChange, brands = [] }) => {
  const [priceRange, setPriceRange] = useState(filters?.priceRange ?? '');
  const [rating, setRating] = useState(filters?.rating ?? '');
  const [selectedBrands, setSelectedBrands] = useState(filters?.brands ?? []);

  const applyFilters = () => {
    onFiltersChange?.({
      priceRange,
      rating,
      brands: selectedBrands
    });
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setPriceRange('');
    setRating('');
    setSelectedBrands([]);
    onFiltersChange?.({});
  };

  return (
    <aside className="bg-white rounded-xl border border-gray-200 p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Clear all
        </button>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Price</h4>
        <ul className="space-y-1">
          {PRICE_RANGES.map((range) => (
            <li key={range.id}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange === range.id}
                  onChange={() => setPriceRange(range.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{range.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Rating</h4>
        <ul className="space-y-1">
          {RATINGS.map((r) => (
            <li key={r}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={rating === String(r)}
                  onChange={() => setRating(String(r))}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{r} & up</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {brands.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Brand</h4>
          <ul className="space-y-1 max-h-40 overflow-y-auto">
            {brands.map((brand) => (
              <li key={brand}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={applyFilters}
        className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default ProductFilters;
