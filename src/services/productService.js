import { products as staticProducts } from '../data/products';
import { aggregateProducts } from '../api/productAggregator';

let cachedProducts = null;

/**
 * Loads all products: static data + aggregated from external APIs.
 * Call once at app init. Safe to call multiple times; subsequent calls return cache.
 */
export async function loadProducts() {
  if (cachedProducts != null) return cachedProducts;
  const apiProducts = await aggregateProducts();
  cachedProducts = [...staticProducts, ...apiProducts];
  return cachedProducts;
}

/**
 * Returns the current product list (empty until loadProducts() has run).
 */
export function getProducts() {
  return cachedProducts ?? [];
}

export function getProductById(id) {
  const list = getProducts();
  return list.find((p) => String(p.id) === String(id)) ?? null;
}

export function getProductsByCategory(categoryId, subcategoryId = null) {
  return getProducts().filter((p) => {
    if (p.category !== categoryId) return false;
    if (subcategoryId != null && subcategoryId !== '') {
      return p.subcategory === subcategoryId;
    }
    return true;
  });
}

export function getFeaturedProducts() {
  return getProducts().filter((p) => p.isFeatured);
}

export function getFlashDeals() {
  return getProducts().filter((p) => p.isFlashDeal);
}

export function getTrendingProducts() {
  return getProducts().filter((p) => p.isTrending);
}

/**
 * Unique sorted list of brand names (for filters).
 */
export function getBrands() {
  const set = new Set(getProducts().map((p) => p.brand).filter(Boolean));
  return [...set].sort();
}
