export const currentUser = {
  id: 'user-001',
  name: 'Alex Morgan',
  email: 'alex.morgan@email.com',
  phone: '+1 234 567 8900',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  addresses: [
    {
      id: 'addr-001',
      type: 'home',
      isDefault: true,
      name: 'Alex Morgan',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      country: 'United States',
      phone: '+1 234 567 8900'
    },
    {
      id: 'addr-002',
      type: 'work',
      isDefault: false,
      name: 'Alex Morgan',
      street: '456 Market Street, Suite 300',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      country: 'United States',
      phone: '+1 234 567 8900'
    }
  ],
  wishlist: ['prod-001', 'prod-003', 'prod-006'],
  recentlyViewed: ['prod-001', 'prod-004', 'prod-005', 'prod-018']
};
