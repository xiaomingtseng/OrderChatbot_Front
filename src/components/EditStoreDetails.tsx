import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

interface Store {
  id?: number;
  name: string;
  address: string;
}

function EditStoreDetails() {
  const { id } = useParams<{ id: string }>();
  const [store, setStore] = useState<Store>({ name: '', address: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the store details from the server or state
      // For example:
      const fetchedStore = { id: Number(id), name: 'Store A', address: '123 Main St' };
      setStore(fetchedStore);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the existing store
    console.log('Store updated:', store);
    navigate('/store-list');
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">修改店家</h1>
      </header>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">店家名稱</label>
          <input
            type="text"
            value={store.name}
            onChange={(e) => setStore({ ...store, name: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">地址</label>
          <input
            type="text"
            value={store.address}
            onChange={(e) => setStore({ ...store, address: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded"
        >
          修改
        </button>
      </form>
      <NavBar />
    </div>
  );
}

export default EditStoreDetails;