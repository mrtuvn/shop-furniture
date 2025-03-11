export interface Product {
  name: string;
  image: string;
  price: string;
  description: string;
  brand?: string;
  originalPrice?: string;
  salePrice?: string;
}

export const products: Product[] = [
  {
    name: "[Sample] Smith Journal 13",
    image: "/images/products/smith-journal-13.jpg",
    price: "$25.00",
    description:
      "Volume 13 of Smith Journal is crammed with more than its fair share of sharp minds...",
  },
  {
    name: "[Sample] Canvas Laundry Cart",
    image: "/images/products/canvas-laundry-cart.jpg",
    originalPrice: "$249.00",
    price: "$199.00",
    salePrice: "$200.00",
    description:
      "The last laundry cart you'll ever buy. This industrial non-collapsable cart...",
  },
];
