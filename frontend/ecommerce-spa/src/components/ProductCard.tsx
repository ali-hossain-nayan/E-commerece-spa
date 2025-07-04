import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="
    w-[200px] rounded-lg shadow-md p-4
    bg-gradient-to-br from-purple-50 to-purple-100
    transform transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-xl
  "
    >
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-2 text-md font-semibold text-purple-800 truncate">
          {product.title}
        </h3>
        <p className="text-purple-600 font-bold">${product.price}</p>
      </Link>
      <button
        onClick={() => {
          addToCart(product);
          toast.success(`${product.title} added to cart!`);
        }}
        className="mt-3 w-full cursor-pointer bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
