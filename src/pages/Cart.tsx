import React from 'react';
import NavBar from '../components/NavBar';

const cartItems = [
  { id: 1, name: 'Product A', price: 10.99, quantity: 2 },
  { id: 2, name: 'Product B', price: 5.49, quantity: 1 },
  { id: 3, name: 'Product C', price: 7.99, quantity: 3 },
];

function Cart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">購物車</h1>
      </header>
      <ul className="space-y-4 mt-4">
        {cartItems.map(item => (
          <li key={item.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">價格: ${item.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">數量: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">小計: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-4 bg-white rounded shadow flex justify-between items-center">
        <h2 className="text-lg font-semibold">總計</h2>
        <p className="text-lg font-semibold">${total.toFixed(2)}</p>
      </div>
      
      <NavBar />
    </div>
  );
}

export default Cart;