import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Mobile phone",
      price: 15000,
      quantity: 2,
    },
    {
      id: 2,
      title: "Tablet ",
      price: 25000,
      quantity: 1,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-red-100 text-red-600 px-2 py-1 rounded hover:bg-red-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 ml-4 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                Total: ₹{totalPrice}
              </h2>
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
