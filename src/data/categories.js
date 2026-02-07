export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600',
    subcategories: [
      { id: 'smartphones', name: 'Smartphones' },
      { id: 'laptops', name: 'Laptops' },
      { id: 'tablets', name: 'Tablets' },
      { id: 'headphones', name: 'Headphones' },
      { id: 'smartwatches', name: 'Smartwatches' },
      { id: 'cameras', name: 'Cameras' }
    ]
  },
  {
    id: 'fashion-men',
    name: "Men's Fashion",
    icon: '👔',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600',
    subcategories: [
      { id: 'mens-shirts', name: 'Shirts' },
      { id: 'mens-pants', name: 'Pants' },
      { id: 'mens-shoes', name: 'Shoes' },
      { id: 'mens-accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'fashion-women',
    name: "Women's Fashion",
    icon: '👗',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
    subcategories: [
      { id: 'womens-dresses', name: 'Dresses' },
      { id: 'womens-tops', name: 'Tops' },
      { id: 'womens-shoes', name: 'Shoes' },
      { id: 'womens-accessories', name: 'Accessories' },
      { id: 'womens-bags', name: 'Bags' }
    ]
  },
  {
    id: 'fashion-kids',
    name: 'Kids Fashion',
    icon: '👶',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600',
    subcategories: [
      { id: 'boys-clothing', name: 'Boys Clothing' },
      { id: 'girls-clothing', name: 'Girls Clothing' },
      { id: 'kids-shoes', name: 'Shoes' }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: '💄',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    subcategories: [
      { id: 'skincare', name: 'Skincare' },
      { id: 'makeup', name: 'Makeup' },
      { id: 'haircare', name: 'Haircare' },
      { id: 'fragrances', name: 'Fragrances' }
    ]
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    subcategories: [
      { id: 'furniture', name: 'Furniture' },
      { id: 'decor', name: 'Decor' },
      { id: 'cookware', name: 'Cookware' },
      { id: 'bedding', name: 'Bedding' }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    icon: '⚽',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
    subcategories: [
      { id: 'fitness', name: 'Fitness Equipment' },
      { id: 'sportswear', name: 'Sportswear' },
      { id: 'outdoor', name: 'Outdoor Gear' }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: '⌚',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    subcategories: [
      { id: 'watches', name: 'Watches' },
      { id: 'jewelry', name: 'Jewelry' },
      { id: 'sunglasses', name: 'Sunglasses' }
    ]
  }
];

export const getCategoryById = (id) => categories.find((c) => c.id === id);
