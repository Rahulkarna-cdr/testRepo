import { mapFakeStoreCategory } from './categoryMap';

const FAKE_STORE_BASE = 'https://fakestoreapi.com';

/**
 * Fetches all products from Fake Store API.
 */
export async function fetchFakeStoreProducts() {
  const res = await fetch(`${FAKE_STORE_BASE}/products`);
  if (!res.ok) throw new Error(`Fake Store API error: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

/**
 * Normalizes a Fake Store product to our internal product shape.
 */
export function normalizeFakeStoreProduct(item, index) {
  const rating = item.rating != null
    ? (typeof item.rating === 'object' ? item.rating?.rate : item.rating)
    : 4;
  const reviewCount = item.rating?.count ?? Math.floor(50 + Math.random() * 200);
  const { categoryId, subcategoryId } = mapFakeStoreCategory(item.category);
  const price = Number(item.price) || 0;
  const stock = Math.floor(20 + Math.random() * 480);

  return {
    id: `fs-${item.id ?? index}`,
    name: item.title ?? 'Unknown Product',
    category: categoryId,
    subcategory: subcategoryId ?? undefined,
    brand: null,
    price,
    originalPrice: price > 0 ? Math.round(price * 1.2 * 100) / 100 : undefined,
    discount: price > 0 ? Math.min(30, Math.floor(5 + Math.random() * 25)) : 0,
    rating: Math.min(5, Math.max(0, Number(rating))),
    reviewCount,
    inStock: true,
    stock,
    images: item.image ? [item.image] : [],
    description: item.description ?? '',
    features: [],
    variants: [],
    specifications: {},
    isFeatured: Math.random() > 0.6,
    isFlashDeal: Math.random() > 0.7,
    isTrending: Math.random() > 0.5,
  };
}
