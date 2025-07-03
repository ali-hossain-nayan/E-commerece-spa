import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalAmount,
    setIsCheckoutOpen,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed right-0 top-0 w-72 sm:w-80 bg-white h-full shadow-lg p-5 z-50 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-700">Your Cart</h2>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-sm text-gray-500 cursor-pointer hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            className="border-b border-gray-200 pb-3 mb-3"
          >
            <p className="font-medium text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-600">
              ${item.price} x {item.quantity}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateQuantity(item._id, -1)}
                className="px-2 py-1 bg-purple-100 text-purple-700 cursor-pointer rounded hover:bg-purple-200"
              >
                −
              </button>
              <button
                onClick={() => updateQuantity(item._id, 1)}
                className="px-2 py-1 bg-purple-100 text-purple-700 cursor-pointer rounded hover:bg-purple-200"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item._id)}
                className="ml-auto text-red-600 cursor-pointer hover:underline text-xs"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div className="mt-6">
        <p className="font-semibold text-gray-800">
          Total: <span className="text-purple-700">${totalAmount.toFixed(2)}</span>
        </p>
        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="w-full mt-4 bg-purple-600 text-white py-2 cursor-pointer rounded hover:bg-purple-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
