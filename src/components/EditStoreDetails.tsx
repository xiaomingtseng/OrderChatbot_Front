import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData, updateStore } from '../api/apiService';
import NavBar from '../components/NavBar';
import { Store } from '../types/store'; // Ensure you have a proper Store type

const EditStoreDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // ✅ Extract store ID from URL
  const navigate = useNavigate();

  const [store, setStore] = useState<Store | null>(null); // ✅ Change from Store[] to Store | null

  useEffect(() => {
    const fetchStore = async () => {
      if (!id) {
        console.error('Store ID is undefined');
        return;
      }

      try {
        //console.log('Fetching store details for ID:', id);
        const fetchedStore = await fetchData(`/stores/${id}`);
        console.log('Fetched store details:', fetchedStore);
        setStore(fetchedStore);
      } catch (error) {
        console.error('Error fetching store details:', error);
      }
    };

    fetchStore();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !store) return;

    try {
      const { _id, ...storeWithoutId } = store; // Destructure and omit the id
      console.log('Updating store:', store);
      await updateStore(id, storeWithoutId);
      console.log('Store updated successfully');
      navigate('/store-list'); // ✅ Navigate back after update
    } catch (error) {
      console.error('Error updating store:', error);
    }
  };

  const handleUpdateMenuItem = () => {
    console.log('Update menu item button clicked');
    

  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">修改店家資料</h1>
      </header>

      {store ? (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">店名</label>
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
              value={store.location}
              onChange={(e) => setStore({ ...store, location: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded mt-2">
            更新店家
          </button>
          <button
            type="button"
            onClick={handleUpdateMenuItem}
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded mt-2"
          >
            更新菜單項目
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500 mt-4">Loading store details...</p>
      )}

      <NavBar />
    </div>
  );
};

export default EditStoreDetails;
