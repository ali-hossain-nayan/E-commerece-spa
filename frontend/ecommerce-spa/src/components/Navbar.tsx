import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-purple-200 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">E-Shop</Link>
      </div>
      <div className="flex gap-6 text-gray-700 text-lg">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="#" onClick={(e) => e.preventDefault()} className="hover:text-blue-600">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
