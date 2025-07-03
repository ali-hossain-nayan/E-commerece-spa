import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <nav className="bg-purple-200 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">E-Shop</Link>
      </div>
      <div className="flex gap-6 text-gray-700 text-lg">
        <Link to="/" className="hover:text-purple-600 cursor-pointer">Home</Link>
        <button
          onClick={() => setIsCartOpen(true)}
          className="hover:text-purple-600 cursor-pointer"
        >
          Cart ({cartItems.length})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
