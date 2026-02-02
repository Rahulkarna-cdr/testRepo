# Ecommerce Frontend

A modern, responsive ecommerce frontend built with React, Vite, and Tailwind CSS.

## Features

- 🛍️ **Product Listing**: Browse through a catalog of products
- 🔍 **Product Details**: View detailed information about each product
- 🛒 **Shopping Cart**: Add items to cart, update quantities, and remove items
- 💰 **Price Calculation**: Automatic price calculation for cart items
- 📦 **Checkout**: Complete order placement with shipping information
- ✅ **Order Confirmation**: View order details after successful placement
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/         # React Context for state management
│   └── CartContext.jsx
├── data/           # Mock data
│   └── products.js
├── pages/          # Page components
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── OrderConfirmation.jsx
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Technologies Used

- **React 18**: UI library
- **React Router**: Client-side routing
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Context API**: State management for cart

## Features in Detail

### Shopping Cart
- Add products to cart from product listing or product detail page
- Update item quantities
- Remove items from cart
- View cart total and item count
- Persistent cart state during session

### Checkout Process
- Form validation for shipping information
- Multiple payment method options
- Order summary with itemized list
- Order placement and confirmation

### Product Management
- 12 sample products across different categories
- Product images, descriptions, and pricing
- Category-based organization

## Notes

- This is a frontend-only application with no backend integration
- Product data is stored in a mock data file
- Cart and order data persist only during the session (page refresh will reset)
- No authentication or user accounts are implemented

