export const productReviews = {
  'prod-001': [
    {
      id: 'rev-001',
      userId: 'user-123',
      userName: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      verified: true,
      title: "Best headphones I've ever owned!",
      comment:
        "The noise cancellation is incredible. I use these daily for work calls and music. Battery lasts forever!",
      helpful: 245,
      images: []
    },
    {
      id: 'rev-002',
      userId: 'user-456',
      userName: 'Mike Chen',
      rating: 4,
      date: '2024-01-10',
      verified: true,
      title: 'Great quality, minor comfort issue',
      comment:
        'Sound quality is excellent. Only downside is they get a bit warm after extended wear.',
      helpful: 89,
      images: []
    },
    {
      id: 'rev-003',
      userId: 'user-789',
      userName: 'Emma Wilson',
      rating: 5,
      date: '2024-01-05',
      verified: false,
      title: 'Worth every penny',
      comment: 'Crystal clear sound and the battery life is as advertised. Very happy with this purchase.',
      helpful: 156,
      images: []
    }
  ],
  'prod-002': [
    {
      id: 'rev-004',
      userId: 'user-101',
      userName: 'David Brown',
      rating: 5,
      date: '2024-01-20',
      verified: true,
      title: 'Perfect for remote work',
      comment: 'Lightweight, fast, and the display is gorgeous. Keyboard is comfortable for long typing sessions.',
      helpful: 98,
      images: []
    }
  ],
  'prod-003': [
    {
      id: 'rev-005',
      userId: 'user-202',
      userName: 'Jessica Lee',
      rating: 4,
      date: '2024-01-18',
      verified: true,
      title: 'Beautiful dress, true to size',
      comment: 'The fabric is soft and the fit is perfect. I ordered M and it fits as expected. Love the floral print!',
      helpful: 67,
      images: []
    }
  ],
  'prod-004': [
    {
      id: 'rev-006',
      userId: 'user-303',
      userName: 'Amanda Smith',
      rating: 5,
      date: '2024-01-12',
      verified: true,
      title: 'Visible results in 2 weeks',
      comment: 'My skin looks brighter and more even. No irritation. Will repurchase.',
      helpful: 312,
      images: []
    }
  ]
};

export const getReviewsForProduct = (productId) => productReviews[productId] || [];
