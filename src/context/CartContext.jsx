import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const useWishlist = () => {
  const { wishlistIds, toggleWishlist, isInWishlist } = useCart();
  return { wishlistIds, toggleWishlist, isInWishlist };
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [wishlistIds, setWishlistIds] = useState(["prod-001", "prod-003", "prod-006"]);

  const isInWishlist = (productId) =>
    wishlistIds.some((id) => String(id) === String(productId));

  const toggleWishlist = (productId) => {
    setWishlistIds((prev) => {
      const id = String(productId);
      if (prev.some((x) => String(x) === id)) {
        return prev.filter((x) => String(x) !== id);
      }
      return [...prev, id];
    });
  };

  const addToCart = (product, quantity = 1, selectedVariants = {}) => {
    const id = product.id;
    if (window.vizme) {
      window.vizme.increment("add_to_cart", quantity, {
        product_id: String(id),
        product_name: product.name,
        category: product.category || "Unknown",
        price: String(product.price ?? 0),
      });
    }
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => String(item.id) === String(id));
      if (existingItem) {
        return prevItems.map((item) =>
          String(item.id) === String(id)
            ? { ...item, quantity: item.quantity + quantity, selectedVariants: selectedVariants || item.selectedVariants }
            : item
        );
      }
      return [...prevItems, { ...product, quantity, selectedVariants }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => String(item.id) !== String(productId))
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        String(item.id) === String(productId) ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price ?? 0) * item.quantity,
      0
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const placeOrder = (orderData) => {
    const order = {
      id: Date.now(),
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: getCartTotal(),
      ...orderData,
      date: new Date().toISOString(),
    };
    setOrders((prevOrders) => [...prevOrders, order]);
    clearCart();
    return order;
  };

  const value = {
    cartItems,
    orders,
    wishlistIds,
    isInWishlist,
    toggleWishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    placeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
