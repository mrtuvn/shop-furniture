import { useCart } from "@/hooks/use-cart";
import { addItem } from "@/redux/cart.slice";
import { useAppDispatch } from "@/store";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  productId: string;
  name: string;
  price: number;
  image: string;
  attributes?: Record<string, string>;
  useZustand?: boolean;
}

export const AddToCartButton = ({
  productId,
  name,
  price,
  image,
  attributes,
  useZustand = false,
}: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // Redux implementation
  const dispatch = useAppDispatch();

  // Zustand implementation
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);

    const product = {
      id: productId,
      name,
      price,
      image,
      quantity,
      attributes,
    };

    if (useZustand) {
      // Use Zustand
      addToCart(product);
    } else {
      // Use Redux
      dispatch(addItem(product));
    }

    // Show animation for 500ms
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="flex items-center">
      {/* Quantity selector */}
      <div className="flex items-center border rounded-md mr-4">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="w-8 h-8 flex items-center justify-center"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="w-8 h-8 flex items-center justify-center"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        className={`flex items-center justify-center px-4 py-2 bg-black text-white rounded-md transition-all ${
          isAdding ? "bg-green-600" : ""
        }`}
        disabled={isAdding}
      >
        <ShoppingBag className="mr-2 h-4 w-4" />
        {isAdding ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};
