import React from "react";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="card card-compact w-96 h-full shadow-2xl flex flex-col bg-[#182825] hover:scale-[1.01] border-none">
      <figure className="flex-grow bg-white h-64">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-3"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{product.title}</h2>
        <p className="text-white">${product.price}</p>
        <div className="card-actions justify-end mt-auto">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
