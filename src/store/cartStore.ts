import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  attributes?: Record<string, string>;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  total: number;

  // Actions
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      total: 0,

      addItem: (item: CartItem) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (existingItem) => existingItem.id === item.id,
          );

          if (existingItemIndex >= 0) {
            // Item already exists, increase quantity
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += item.quantity || 1;

            return {
              items: updatedItems,
              total: calculateTotal(updatedItems),
            };
          } else {
            // Add new item
            const updatedItems = [
              ...state.items,
              { ...item, quantity: item.quantity || 1 },
            ];

            return {
              items: updatedItems,
              total: calculateTotal(updatedItems),
            };
          }
        }),

      removeItem: (id: string) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);

          return {
            items: updatedItems,
            total: calculateTotal(updatedItems),
          };
        }),

      updateQuantity: (id: string, quantity: number) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          );

          return {
            items: updatedItems,
            total: calculateTotal(updatedItems),
          };
        }),

      clearCart: () =>
        set({
          items: [],
          total: 0,
        }),

      toggleCart: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),

      setCartOpen: (isOpen: boolean) =>
        set({
          isOpen,
        }),
    }),
    {
      name: "furniture-shop-cart", // name for localStorage
    },
  ),
);
