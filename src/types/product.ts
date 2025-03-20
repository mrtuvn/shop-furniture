export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    specifications: Record<string, string>;
    reviews: Review[];
  }
  
  export interface Review {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
  }