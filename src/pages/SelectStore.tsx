import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const stores = [
  { id: 1, name: 'Store A', address: '123 Main St' },
  { id: 2, name: 'Store B', address: '456 Elm St' },
  { id: 3, name: 'Store C', address: '789 Oak St' },
];

function SelectStore() {
  const navigate = useNavigate();

  const handleEditStore = (id: number) => {
    navigate(`/edit-store/${id}`);
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">選擇店家</h1>
      </header>
      <ul className="space-y-4 mt-4">
        {stores.map(store => (
          <li
            key={store.id}
            className="bg-white p-4 rounded shadow cursor-pointer"
            onClick={() => handleEditStore(store.id)}
          >
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-500">{store.address}</p>
          </li>
        ))}
      </ul>
      <NavBar />
    </div>
  );
}

export default SelectStore;