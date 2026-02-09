/**
 * Maps API category names to our internal category and optional subcategory ids.
 * Used when normalizing products from Fake Store API, DummyJSON, etc.
 */
const FAKE_STORE_MAP = {
  electronics: { categoryId: 'electronics', subcategoryId: null },
  jewelery: { categoryId: 'accessories', subcategoryId: 'jewelry' },
  "men's clothing": { categoryId: 'fashion-men', subcategoryId: null },
  "women's clothing": { categoryId: 'fashion-women', subcategoryId: null },
};

const DUMMY_JSON_MAP = {
  smartphones: { categoryId: 'electronics', subcategoryId: 'smartphones' },
  laptops: { categoryId: 'electronics', subcategoryId: 'laptops' },
  tablets: { categoryId: 'electronics', subcategoryId: 'tablets' },
  cameras: { categoryId: 'electronics', subcategoryId: 'cameras' },
  fragrances: { categoryId: 'beauty', subcategoryId: 'fragrances' },
  skincare: { categoryId: 'beauty', subcategoryId: 'skincare' },
  groceries: { categoryId: 'home-kitchen', subcategoryId: null },
  'home-decoration': { categoryId: 'home-kitchen', subcategoryId: 'decor' },
  furniture: { categoryId: 'home-kitchen', subcategoryId: 'furniture' },
  tops: { categoryId: 'fashion-women', subcategoryId: 'womens-tops' },
  'womens-dresses': { categoryId: 'fashion-women', subcategoryId: 'womens-dresses' },
  'womens-shoes': { categoryId: 'fashion-women', subcategoryId: 'womens-shoes' },
  'mens-shirts': { categoryId: 'fashion-men', subcategoryId: 'mens-shirts' },
  'mens-shoes': { categoryId: 'fashion-men', subcategoryId: 'mens-shoes' },
  'mens-watches': { categoryId: 'accessories', subcategoryId: 'watches' },
  'womens-watches': { categoryId: 'accessories', subcategoryId: 'watches' },
  'womens-bags': { categoryId: 'fashion-women', subcategoryId: 'womens-bags' },
  'womens-jewellery': { categoryId: 'accessories', subcategoryId: 'jewelry' },
  sunglasses: { categoryId: 'accessories', subcategoryId: 'sunglasses' },
  automotive: { categoryId: 'accessories', subcategoryId: null },
  motorcycle: { categoryId: 'sports', subcategoryId: 'outdoor' },
  lighting: { categoryId: 'home-kitchen', subcategoryId: 'decor' },
};

function normalizeCategoryKey(str) {
  if (!str || typeof str !== 'string') return null;
  return str.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function mapFakeStoreCategory(apiCategory) {
  const key = normalizeCategoryKey(apiCategory);
  return FAKE_STORE_MAP[key] ?? { categoryId: 'accessories', subcategoryId: null };
}

export function mapDummyJsonCategory(apiCategory) {
  if (!apiCategory) return { categoryId: 'accessories', subcategoryId: null };
  const key = String(apiCategory).trim().toLowerCase().replace(/\s+/g, '-');
  return DUMMY_JSON_MAP[key] ?? { categoryId: 'accessories', subcategoryId: null };
}
