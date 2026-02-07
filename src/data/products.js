// Centralized product dummy data – all product ids are strings for routing
const U = (id, w = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}`;

export const products = [
  {
    id: 'prod-001',
    name: 'Premium Wireless Noise Cancelling Headphones',
    category: 'electronics',
    subcategory: 'headphones',
    brand: 'SoundMax Pro',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.5,
    reviewCount: 1248,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600'
    ],
    description:
      'Experience premium sound quality with advanced noise cancellation technology. 30-hour battery life, comfortable over-ear design, and crystal-clear microphone for calls.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium leather ear cushions',
      'Multi-device connectivity',
      'Touch controls'
    ],
    variants: [
      { type: 'color', options: ['Black', 'Silver', 'Navy Blue', 'Rose Gold'] }
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Bluetooth Version': '5.2',
      Weight: '250g'
    },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-002',
    name: 'Ultra-Slim 15.6" Business Laptop',
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'TechCore',
    price: 1299.99,
    originalPrice: 1599.99,
    discount: 19,
    rating: 4.7,
    reviewCount: 856,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600'
    ],
    description:
      'Powerful performance meets elegant design. Intel Core i7, 16GB RAM, 512GB SSD, full HD display.',
    features: [
      'Intel Core i7 12th Gen',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      'Full HD IPS Display',
      'Backlit Keyboard'
    ],
    variants: [
      { type: 'storage', options: ['512GB', '1TB'] },
      { type: 'color', options: ['Space Gray', 'Silver'] }
    ],
    specifications: {
      Processor: 'Intel Core i7-1255U',
      RAM: '16GB DDR4',
      Storage: '512GB SSD',
      Display: '15.6" Full HD',
      Weight: '1.6kg'
    },
    isFeatured: true,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-003',
    name: 'Floral Summer Maxi Dress',
    category: 'fashion-women',
    subcategory: 'womens-dresses',
    brand: 'ChicStyle',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 4.3,
    reviewCount: 432,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600'
    ],
    description:
      'Elegant floral print maxi dress perfect for summer occasions. Lightweight, breathable fabric with adjustable straps.',
    features: [
      'Floral print design',
      'Adjustable straps',
      'Side pockets',
      'Breathable cotton blend',
      'Machine washable'
    ],
    variants: [
      { type: 'size', options: ['XS', 'S', 'M', 'L', 'XL'] },
      { type: 'color', options: ['Blue Floral', 'Pink Floral', 'Green Floral'] }
    ],
    specifications: {
      Material: '65% Cotton, 35% Polyester',
      Care: 'Machine wash cold',
      Fit: 'Regular',
      Length: 'Maxi'
    },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-004',
    name: 'Hydrating Vitamin C Serum',
    category: 'beauty',
    subcategory: 'skincare',
    brand: 'GlowLab',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    rating: 4.6,
    reviewCount: 2145,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600'
    ],
    description:
      'Brightening vitamin C serum with hyaluronic acid. Reduces dark spots, evens skin tone, and provides deep hydration.',
    features: [
      '20% Vitamin C',
      'Hyaluronic Acid',
      'Antioxidant protection',
      'Dermatologist tested',
      'Cruelty-free'
    ],
    variants: [{ type: 'size', options: ['30ml', '50ml'] }],
    specifications: {
      Volume: '30ml',
      'Key Ingredients': 'Vitamin C, Hyaluronic Acid',
      'Skin Type': 'All skin types',
      Usage: 'Morning and evening'
    },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-005',
    name: 'Minimalist LED Desk Lamp',
    category: 'home-kitchen',
    subcategory: 'decor',
    brand: 'LightHome',
    price: 45.99,
    originalPrice: 69.99,
    discount: 34,
    rating: 4.4,
    reviewCount: 628,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600'
    ],
    description:
      'Modern minimalist desk lamp with adjustable brightness and color temperature. Touch control and USB charging port.',
    features: [
      'Touch control',
      '5 brightness levels',
      '3 color temperatures',
      'USB charging port',
      'Energy efficient LED'
    ],
    variants: [{ type: 'color', options: ['White', 'Black', 'Silver'] }],
    specifications: {
      Power: '12W LED',
      Adjustability: '180° rotation',
      Features: 'Touch control, USB port',
      Dimensions: '40cm height'
    },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: false
  },
  {
    id: 'prod-006',
    name: 'Performance Running Shoes',
    category: 'sports',
    subcategory: 'sportswear',
    brand: 'RunFast',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.8,
    reviewCount: 1834,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600'
    ],
    description:
      'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    features: ['Breathable mesh', 'Responsive cushioning', 'Durable outsole'],
    variants: [
      { type: 'size', options: ['7', '8', '9', '10', '11', '12'] },
      { type: 'color', options: ['Black/Red', 'Blue/White', 'Gray/Orange'] }
    ],
    specifications: { Weight: '240g', Drop: '8mm', Use: 'Road running' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-007',
    name: 'Smart Fitness Watch',
    category: 'electronics',
    subcategory: 'smartwatches',
    brand: 'FitTech',
    price: 249.99,
    originalPrice: 299.99,
    discount: 17,
    rating: 4.6,
    reviewCount: 2103,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600'
    ],
    description:
      'Track heart rate, sleep, and 50+ sports. GPS, 7-day battery, water resistant.',
    features: ['Heart rate', 'GPS', 'Sleep tracking', '50+ sports modes', '7-day battery'],
    variants: [
      { type: 'size', options: ['40mm', '44mm'] },
      { type: 'color', options: ['Black', 'Silver', 'Rose Gold'] }
    ],
    specifications: { 'Battery': '7 days', 'Water resistance': '5 ATM', 'Display': 'AMOLED' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-008',
    name: 'Classic Leather Crossbody Bag',
    category: 'fashion-women',
    subcategory: 'womens-bags',
    brand: 'LeatherCraft',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1548036328-c925fa15c867?w=600',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600'
    ],
    description: 'Genuine leather crossbody bag with adjustable strap and multiple compartments.',
    features: ['Genuine leather', 'Adjustable strap', 'Multiple pockets', 'RFID slot'],
    variants: [{ type: 'color', options: ['Tan', 'Black', 'Burgundy'] }],
    specifications: { Material: 'Genuine leather', Dimensions: '25x20x8 cm' },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: false
  },
  {
    id: 'prod-009',
    name: 'Wireless Bluetooth Speaker',
    category: 'electronics',
    subcategory: 'headphones',
    brand: 'SoundBox',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.3,
    reviewCount: 892,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
      'https://images.unsplash.com/photo-1545454670-ac2e6daa0b9f?w=600'
    ],
    description: 'Portable Bluetooth speaker with 360° sound and IPX7 waterproof design.',
    features: ['360° sound', 'IPX7 waterproof', '12hr battery', 'Bluetooth 5.0'],
    variants: [{ type: 'color', options: ['Black', 'Blue', 'Red'] }],
    specifications: { 'Battery': '12 hours', 'Bluetooth': '5.0', 'Weight': '450g' },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-010',
    name: 'Men\'s Slim Fit Oxford Shirt',
    category: 'fashion-men',
    subcategory: 'mens-shirts',
    brand: 'UrbanWear',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 4.5,
    reviewCount: 734,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600'
    ],
    description: 'Premium cotton oxford shirt, slim fit. Perfect for office or casual wear.',
    features: ['100% cotton', 'Slim fit', 'Machine washable', 'Button-down collar'],
    variants: [
      { type: 'size', options: ['S', 'M', 'L', 'XL'] },
      { type: 'color', options: ['White', 'Light Blue', 'Pink', 'Navy'] }
    ],
    specifications: { Material: '100% Cotton', Fit: 'Slim' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: false
  },
  {
    id: 'prod-011',
    name: 'Organic Face Moisturizer',
    category: 'beauty',
    subcategory: 'skincare',
    brand: 'PureGlow',
    price: 28.99,
    originalPrice: 39.99,
    discount: 28,
    rating: 4.7,
    reviewCount: 1523,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600'
    ],
    description: 'Lightweight daily moisturizer with SPF 30. Organic ingredients, non-comedogenic.',
    features: ['SPF 30', 'Organic', 'Non-comedogenic', 'Dermatologist tested'],
    variants: [{ type: 'size', options: ['50ml', '100ml'] }],
    specifications: { 'SPF': '30', 'Volume': '50ml' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-012',
    name: 'Stainless Steel Cookware Set',
    category: 'home-kitchen',
    subcategory: 'cookware',
    brand: 'ChefPro',
    price: 199.99,
    originalPrice: 279.99,
    discount: 29,
    rating: 4.6,
    reviewCount: 445,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      'https://images.unsplash.com/photo-1584568694245-31f8f8d8b6e1?w=600'
    ],
    description: '10-piece stainless steel set. Oven safe, dishwasher safe, induction compatible.',
    features: ['10 pieces', 'Induction compatible', 'Oven safe', 'Lifetime warranty'],
    variants: [],
    specifications: { Material: '18/10 Stainless steel', Pieces: '10' },
    isFeatured: true,
    isFlashDeal: true,
    isTrending: false
  },
  {
    id: 'prod-013',
    name: 'Yoga Mat Premium',
    category: 'sports',
    subcategory: 'fitness',
    brand: 'FlexLife',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    rating: 4.5,
    reviewCount: 2108,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1601925260368-28d10c4dca8b?w=600',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600'
    ],
    description: 'Non-slip TPE yoga mat, 6mm thick. Includes carrying strap.',
    features: ['Non-slip', '6mm thick', 'TPE material', 'Carrying strap'],
    variants: [{ type: 'color', options: ['Purple', 'Blue', 'Green', 'Gray'] }],
    specifications: { Thickness: '6mm', Material: 'TPE' },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-014',
    name: 'Polarized Aviator Sunglasses',
    category: 'accessories',
    subcategory: 'sunglasses',
    brand: 'SunStyle',
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    rating: 4.4,
    reviewCount: 623,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=600',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600'
    ],
    description: 'UV400 polarized aviator sunglasses. Metal frame, scratch-resistant lenses.',
    features: ['UV400', 'Polarized', 'Metal frame', 'Scratch-resistant'],
    variants: [
      { type: 'color', options: ['Gold', 'Silver', 'Black', 'Gunmetal'] }
    ],
    specifications: { 'UV Protection': 'UV400', 'Lens': 'Polarized' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: false
  },
  {
    id: 'prod-015',
    name: 'Kids Cotton T-Shirt Pack',
    category: 'fashion-kids',
    subcategory: 'boys-clothing',
    brand: 'LittleStars',
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.6,
    reviewCount: 389,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600'
    ],
    description: 'Pack of 3 soft cotton t-shirts. Assorted colors, durable for play.',
    features: ['Pack of 3', '100% cotton', 'Machine washable', 'Assorted colors'],
    variants: [
      { type: 'size', options: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'] },
      { type: 'color', options: ['Mixed', 'Pastels', 'Brights'] }
    ],
    specifications: { Material: '100% Cotton', Pack: '3' },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-016',
    name: 'Wireless Ergonomic Mouse',
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'TechCore',
    price: 39.99,
    originalPrice: 54.99,
    discount: 27,
    rating: 4.5,
    reviewCount: 1204,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600'
    ],
    description: 'Ergonomic wireless mouse with precision sensor and 18-month battery.',
    features: ['Ergonomic', 'Wireless', 'Precision sensor', '18-month battery'],
    variants: [{ type: 'color', options: ['Black', 'White', 'Gray'] }],
    specifications: { 'Battery': '18 months', 'DPI': '16000' },
    isFeatured: false,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-017',
    name: 'Women\'s Ankle Boots',
    category: 'fashion-women',
    subcategory: 'womens-shoes',
    brand: 'StepStyle',
    price: 99.99,
    originalPrice: 139.99,
    discount: 29,
    rating: 4.4,
    reviewCount: 512,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=600'
    ],
    description: 'Leather ankle boots with block heel. Comfortable for all-day wear.',
    features: ['Genuine leather', 'Block heel', 'Cushioned insole', 'Side zipper'],
    variants: [
      { type: 'size', options: ['6', '7', '8', '9', '10'] },
      { type: 'color', options: ['Black', 'Tan', 'Burgundy'] }
    ],
    specifications: { Material: 'Leather', Heel: '2 inch' },
    isFeatured: true,
    isFlashDeal: false,
    isTrending: false
  },
  {
    id: 'prod-018',
    name: 'Insulated Water Bottle 32oz',
    category: 'sports',
    subcategory: 'outdoor',
    brand: 'HydroMax',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.7,
    reviewCount: 2845,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600'
    ],
    description: 'Stainless steel insulated bottle. Keeps cold 24hrs, hot 12hrs. BPA-free.',
    features: ['24hr cold', '12hr hot', 'BPA-free', 'Leak-proof'],
    variants: [{ type: 'color', options: ['Black', 'White', 'Blue', 'Green', 'Pink'] }],
    specifications: { Capacity: '32oz', Material: 'Stainless steel' },
    isFeatured: true,
    isFlashDeal: true,
    isTrending: true
  },
  {
    id: 'prod-019',
    name: 'Laptop Backpack',
    category: 'accessories',
    subcategory: 'watches',
    brand: 'CarryAll',
    price: 54.99,
    originalPrice: 74.99,
    discount: 27,
    rating: 4.5,
    reviewCount: 967,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600'
    ],
    description: 'Padded laptop compartment, USB charging port, water-resistant.',
    features: ['Fits 15" laptop', 'USB port', 'Water-resistant', 'Multiple pockets'],
    variants: [{ type: 'color', options: ['Black', 'Navy', 'Gray'] }],
    specifications: { 'Laptop size': 'Up to 15"', Material: 'Polyester' },
    isFeatured: false,
    isFlashDeal: false,
    isTrending: true
  },
  {
    id: 'prod-020',
    name: 'Silk Pillowcase Set',
    category: 'home-kitchen',
    subcategory: 'bedding',
    brand: 'SleepWell',
    price: 44.99,
    originalPrice: 59.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 723,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600'
    ],
    description: 'Set of 2 mulberry silk pillowcases. Hypoallergenic, reduces hair frizz.',
    features: ['Mulberry silk', 'Set of 2', 'Hypoallergenic', 'Machine washable'],
    variants: [{ type: 'color', options: ['White', 'Ivory', 'Silver', 'Blush'] }],
    specifications: { Material: 'Mulberry silk', Set: '2 pillowcases' },
    isFeatured: false,
    isFlashDeal: true,
    isTrending: false
  }
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (categoryId, subcategoryId = null) => {
  return products.filter((p) => {
    if (subcategoryId) {
      return p.category === categoryId && p.subcategory === subcategoryId;
    }
    return p.category === categoryId;
  });
};

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getTrendingProducts = () => products.filter((p) => p.isTrending);
