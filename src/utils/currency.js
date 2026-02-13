/**
 * Currency configuration and formatting utilities.
 *
 * Uses a config-based exchange rate (Option B from requirements).
 * Change EXCHANGE_RATE to update conversion across the entire app.
 *
 * Format: "Rs. 1,25,000" — Nepali/Indian grouping (last 3 digits, then groups of 2).
 */

// --- Configuration ---
const EXCHANGE_RATE = 133; // 1 USD = 133 NPR
const CURRENCY_SYMBOL = 'Rs.';

/**
 * Convert a USD amount to Nepali Rupees.
 * @param {number} usd - Price in US dollars
 * @returns {number} Price in Nepali Rupees (rounded to nearest integer)
 */
export const convertToNPR = (usd) => {
  return Math.round((usd ?? 0) * EXCHANGE_RATE);
};

/**
 * Format a number using Nepali/Indian numbering system.
 * e.g. 125000 → "1,25,000"
 *
 * The pattern: last 3 digits form the first group, then groups of 2.
 * @param {number} num - The number to format
 * @returns {string} Formatted number string
 */
export const formatNepaliNumber = (num) => {
  const n = Math.abs(Math.round(num));
  const str = String(n);

  if (str.length <= 3) return str;

  // Last 3 digits
  const last3 = str.slice(-3);
  // Remaining digits, grouped in pairs from right to left
  const remaining = str.slice(0, -3);
  const pairs = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

  return (num < 0 ? '-' : '') + pairs + ',' + last3;
};

/**
 * Convert USD price to formatted NPR string.
 * e.g. 940 → "Rs. 1,25,020"
 * @param {number} usd - Price in US dollars
 * @returns {string} Formatted Nepali Rupee price string
 */
export const formatPriceNPR = (usd) => {
  const npr = convertToNPR(usd);
  return `${CURRENCY_SYMBOL} ${formatNepaliNumber(npr)}`;
};

export { EXCHANGE_RATE, CURRENCY_SYMBOL };
