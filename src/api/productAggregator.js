import { fetchFakeStoreProducts, normalizeFakeStoreProduct } from './fakestore';
import { fetchDummyJsonProducts, fetchDummyJsonByCategory, normalizeDummyJsonProduct } from './dummyjson';

function normalizeTitleForDedup(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '');
}

/**
 * Fetches from all external APIs in parallel, normalizes, merges, and deduplicates.
 * Includes tablets and cameras categories from DummyJSON.
 * Returns an array of products in our internal shape (no static products here).
 */
export async function aggregateProducts() {
  const [fakeStoreRaw, dummyJsonRaw, tabletsRaw, camerasRaw] = await Promise.all([
    fetchFakeStoreProducts().catch(() => []),
    fetchDummyJsonProducts().catch(() => []),
    fetchDummyJsonByCategory('tablets').catch(() => []),
    fetchDummyJsonByCategory('cameras').catch(() => []),
  ]);
  const dummyJsonMain = dummyJsonRaw.map((item, i) => normalizeDummyJsonProduct(item, i));
  const dummyJsonTablets = tabletsRaw.map((item, i) => {
    const p = normalizeDummyJsonProduct(item, i);
    return { ...p, id: `dj-t-${i}` };
  });
  const dummyJsonCameras = camerasRaw.map((item, i) => {
    const p = normalizeDummyJsonProduct(item, i);
    return { ...p, id: `dj-c-${i}` };
  });
  const fromDummyJson = [...dummyJsonMain, ...dummyJsonTablets, ...dummyJsonCameras];

  const seenTitles = new Set();
  const merged = [];

  const fromFakeStore = fakeStoreRaw.map((item, i) => normalizeFakeStoreProduct(item, i));

  for (const p of fromFakeStore) {
    const key = normalizeTitleForDedup(p.name);
    if (key && seenTitles.has(key)) continue;
    if (key) seenTitles.add(key);
    merged.push(p);
  }

  for (const p of fromDummyJson) {
    const key = normalizeTitleForDedup(p.name);
    if (key && seenTitles.has(key)) continue;
    if (key) seenTitles.add(key);
    merged.push(p);
  }

  return merged;
}
