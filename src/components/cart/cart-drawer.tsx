import { removeItem, toggleCart, updateQuantity } from "@/redux/cart.slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCartStore } from "@/store/cartStore";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";

// Uncomment to use Zustand instead of Redux
// const USE_ZUSTAND = true;

const CartDrawer = () => {
  // Choose between Redux and Zustand
  const useRedux = true; // Change to false to use Zustand

  // Redux implementation
  const dispatch = useAppDispatch();
  const { items, isOpen, total } = useAppSelector((state) => state.cart);

  const closeCartRedux = () => dispatch(toggleCart());
  const removeItemRedux = (id: string) => dispatch(removeItem(id));
  const updateQuantityRedux = (id: string, quantity: number) =>
    dispatch(updateQuantity({ id, quantity }));

  // Zustand implementation
  const {
    items: zustandItems,
    isOpen: zustandIsOpen,
    total: zustandTotal,
    toggleCart: toggleZustandCart,
    removeItem: removeZustandItem,
    updateQuantity: updateZustandQuantity,
  } = useCartStore();

  // Use the appropriate state and actions based on the chosen implementation
  const cartItems = useRedux ? items : zustandItems;
  const cartIsOpen = useRedux ? isOpen : zustandIsOpen;
  const cartTotal = useRedux ? total : zustandTotal;

  const closeCart = useRedux ? closeCartRedux : toggleZustandCart;
  const handleRemoveItem = useRedux ? removeItemRedux : removeZustandItem;
  const handleUpdateQuantity = useRedux
    ? updateQuantityRedux
    : updateZustandQuantity;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
          cartIsOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Cart drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          cartIsOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart ({cartItems.length})</h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1),
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded-md"
                      >
                        -
                      </button>
                      <span className="mx-2 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with total and checkout */}
        <div className="border-t p-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-bold">${cartTotal.toFixed(2)}</span>
          </div>

          <button
            className="w-full py-3 bg-black text-white text-center font-medium rounded-md hover:bg-gray-800 transition-colors"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
