import { CartItem, useCartStore } from "@/store/cartStore";
import { useCallback } from "react";

/**
 * Custom hook for cart functionality using Zustand
 * This provides a simplified interface for components to interact with the cart
 */
export const useCart = () => {
  const {
    items,
    isOpen,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    setCartOpen,
  } = useCartStore();

  // Calculate the total number of items in the cart
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  // Add item with optimized signature
  const addToCart = useCallback(
    (product: Omit<CartItem, "quantity"> & { quantity?: number }) => {
      addItem({
        ...product,
        quantity: product.quantity || 1,
      });
    },
    [addItem],
  );

  // Check if an item is in the cart
  const isInCart = useCallback(
    (id: string) => {
      return items.some((item) => item.id === id);
    },
    [items],
  );

  // Get an item from the cart
  const getItem = useCallback(
    (id: string) => {
      return items.find((item) => item.id === id);
    },
    [items],
  );

  return {
    // State
    items,
    isOpen,
    total,
    itemCount,

    // Actions
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    setCartOpen,

    // Helpers
    isInCart,
    getItem,
  };
};
