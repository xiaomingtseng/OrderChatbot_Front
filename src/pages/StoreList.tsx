import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { fetchData } from '../api/apiService';

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      try {
        const result = await fetchData('/stores');
        setStores(result);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    getStores();
  }, []);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">Store List</h1>
        <Link to="/" className="text-blue-500">返回主畫面</Link>
      </header>
      <ul className="space-y-4">
        {stores.map(store => (
          <li key={store.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="text-sm text-gray-500">{store.address}</p>
            <p className="text-sm text-gray-500">{store.id}</p>
          </li>
        ))}
      </ul>
      <NavBar />
    </div>
  );
}

export default StoreList;