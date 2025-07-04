import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://mini-e-commerece-spa.onrender.com/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product)
    return (
      <div className="p-6 text-center text-gray-500 text-lg">
        Product not found.
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-semibold text-purple-700 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-purple-600 mb-4">
          ${product.price}
        </p>
        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.title} added to cart!`);
          }}
          className="
    mt-3 w-full bg-purple-600 text-white py-1 rounded
    hover:bg-purple-700 active:scale-95 active:brightness-90
    transition duration-150 ease-in-out cursor-pointer
  "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
