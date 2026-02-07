export const dummyOrders = [
  {
    id: 'ord-1001',
    date: '2024-02-01T14:30:00Z',
    status: 'delivered',
    total: 429.98,
    itemCount: 3,
    items: [
      { productId: 'prod-001', name: 'Premium Wireless Noise Cancelling Headphones', price: 299.99, quantity: 1 },
      { productId: 'prod-004', name: 'Hydrating Vitamin C Serum', price: 34.99, quantity: 2 }
    ],
    shippingAddress: {
      name: 'Alex Morgan',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States'
    }
  },
  {
    id: 'ord-1002',
    date: '2024-01-25T10:15:00Z',
    status: 'shipped',
    total: 89.99,
    itemCount: 1,
    items: [
      { productId: 'prod-006', name: 'Performance Running Shoes', price: 89.99, quantity: 1 }
    ],
    shippingAddress: {
      name: 'Alex Morgan',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States'
    }
  },
  {
    id: 'ord-1003',
    date: '2024-01-18T09:00:00Z',
    status: 'delivered',
    total: 154.98,
    itemCount: 2,
    items: [
      { productId: 'prod-005', name: 'Minimalist LED Desk Lamp', price: 45.99, quantity: 1 },
      { productId: 'prod-018', name: 'Insulated Water Bottle 32oz', price: 29.99, quantity: 2 }
    ],
    shippingAddress: {
      name: 'Alex Morgan',
      street: '456 Market Street, Suite 300',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      country: 'United States'
    }
  },
  {
    id: 'ord-1004',
    date: '2024-01-10T16:45:00Z',
    status: 'cancelled',
    total: 79.99,
    itemCount: 1,
    items: [
      { productId: 'prod-003', name: 'Floral Summer Maxi Dress', price: 79.99, quantity: 1 }
    ],
    shippingAddress: {
      name: 'Alex Morgan',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States'
    }
  }
];

export const getOrderById = (id) => dummyOrders.find((o) => o.id === id);
