import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <header className="my-4">
          <div className="flex justify-center items-center p-7">
            <div className="inline-flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-gray-700 dark:hover:bg-gray-600">
              <nav
                className="text-center flex space-x-1 rounded-lg"
                aria-label="Tabs"
                role="tablist"
              >
                <Link
                  to="/"
                  className="active:bg-white active:text-gray-700 dark:active:bg-gray-800 dark:active:text-gray-400 py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/cart"
                  className="active:bg-white active:text-gray-700 dark:active:bg-gray-800 dark:active:text-gray-400 py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg dark:text-gray-400 dark:hover:text-white"
                >
                  Cart
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
