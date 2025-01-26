import React from 'react';
import NavBar from '../components/NavBar';

const testOrders = [
  { id: 1, storeName: 'Store A', address: '123 Main St', date: '2023-10-01' },
  { id: 2, storeName: 'Store B', address: '456 Elm St', date: '2023-10-02' },
  { id: 3, storeName: 'Store C', address: '789 Oak St', date: '2023-10-03' },
];

function HistoryOrder() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">History Orders</h1>
      <ul className="space-y-4">
        {testOrders.map(order => (
          <li key={order.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{order.storeName}</h2>
            <p className="text-sm text-gray-500">{order.address}</p>
            <p className="text-sm text-gray-500">{order.date}</p>
          </li>
        ))}
      </ul>

      <NavBar />
    </div>
  );
}

export default HistoryOrder;