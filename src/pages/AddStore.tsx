import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { postData } from '../api/apiService';

function AddStore() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setlocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const storeDetails = { name, description, location };
        const response = await postData('/stores', storeDetails);
        console.log('Store added:', response);
        navigate('/store-list');
    } catch (error) {
        console.error('Error adding store:', error);
    }
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">新增店家</h1>
      </header>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">店家名稱</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">店家介紹(optional)</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">地址</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded"
        >
          新增
        </button>
      </form>
      <NavBar />
    </div>
  );
}

export default AddStore;