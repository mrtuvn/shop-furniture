//import { create } from 'zustand';
import { CartItem, User } from "../types";

interface Store {
  cart: CartItem[];
  user: User | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setUser: (user: User | null) => void;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  user: null,
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (i) => i.product.id === item.product.id,
      );
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.product.id === item.product.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    })),
  setUser: (user) => set({ user }),
}));
