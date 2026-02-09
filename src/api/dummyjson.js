import { mapDummyJsonCategory } from './categoryMap';

const DUMMY_JSON_BASE = 'https://dummyjson.com';

/**
 * Fetches products from DummyJSON with pagination (limit + skip).
 */
async function fetchDummyJsonPage(limit = 100, skip = 0) {
  const url = `${DUMMY_JSON_BASE}/products?limit=${limit}&skip=${skip}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`DummyJSON API error: ${res.status}`);
  const data = await res.json();
  return data;
}

/**
 * Fetches products from a specific DummyJSON category.
 */
export async function fetchDummyJsonByCategory(categoryName) {
  const url = `${DUMMY_JSON_BASE}/products/category/${encodeURIComponent(categoryName)}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
}

/**
 * Fetches all available products from DummyJSON (multiple pages).
 */
export async function fetchDummyJsonProducts() {
  const all = [];
  let skip = 0;
  const limit = 100;
  let hasMore = true;

  while (hasMore) {
    const data = await fetchDummyJsonPage(limit, skip);
    const products = data.products ?? [];
    all.push(...products);
    skip += limit;
    if (products.length < limit) hasMore = false;
  }

  return all;
}

/**
 * Normalizes a DummyJSON product to our internal product shape.
 */
export function normalizeDummyJsonProduct(item, index) {
  const { categoryId, subcategoryId } = mapDummyJsonCategory(item.category);
  const price = Number(item.price) ?? 0;
  const discount = Number(item.discountPercentage) ?? 0;
  const rating = Math.min(5, Math.max(0, Number(item.rating) ?? 4));
  const stock = Math.max(10, Number(item.stock) ?? 50);
  const images = Array.isArray(item.images) && item.images.length
    ? item.images
    : item.thumbnail
      ? [item.thumbnail]
      : [];

  return {
    id: `dj-${item.id ?? index}`,
    name: item.title ?? 'Unknown Product',
    category: categoryId,
    subcategory: subcategoryId ?? undefined,
    brand: item.brand ?? null,
    price,
    originalPrice: discount > 0 && price > 0
      ? Math.round((price / (1 - discount / 100)) * 100) / 100
      : undefined,
    discount: Math.round(discount),
    rating,
    reviewCount: Math.floor(20 + Math.random() * 300),
    inStock: stock > 0,
    stock,
    images,
    description: item.description ?? '',
    features: [],
    variants: [],
    specifications: {},
    isFeatured: Math.random() > 0.6,
    isFlashDeal: discount >= 15 || Math.random() > 0.75,
    isTrending: rating >= 4.3 || Math.random() > 0.5,
  };
}
