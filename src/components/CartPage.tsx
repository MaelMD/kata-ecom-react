import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const handleQuantityChange = (item: any, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity } });
  };

  const calculateTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const deliveryCharge = 15;

  return (
    <section className="py-7 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
          {state.items.length > 0 ? (
            state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-t border-gray-200 py-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-xl leading-8 text-black">
                      {item.title}
                    </h4>
                    <p className="font-normal text-lg leading-8 text-gray-500">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="form-input rounded-lg bg-gray-300 text-lg p-3"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {state.items.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6 w-full mb-8">
            <div className="flex justify-between mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <p className="font-semibold text-xl leading-8 text-gray-900">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Delivery Charge
              </p>
              <p className="font-semibold text-xl leading-8 text-gray-900">
                ${deliveryCharge}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <p className="font-medium text-2xl leading-9 text-indigo-500">
                ${(calculateTotal() + deliveryCharge).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
        <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
          <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
            Add Coupon Code
          </span>
        </button>

        <Link
          to="/checkout"
          className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"
        >
          Continue to Payment
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
