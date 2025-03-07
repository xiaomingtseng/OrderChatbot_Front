import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { postData, updateMenu } from '../api/apiService';
import { parseStoreString } from '../utils/parseStoreString';

function AddStore() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create a menu first
      const menuResponse = await postData('/menus', {
        store_id: "",
        image_id: "",
        menu_item_ids: [],
      });
      console.log('Menu added:', menuResponse._id);
      const menuId = menuResponse._id;
  
      // Create the store with the new menu ID
      const storeDetails = {
        name : name,
        description : description,
        location : location,
        menu_id : menuId,
      };
      console.log('Adding store:', storeDetails);
      const storeResponse = parseStoreString(await postData('/stores', storeDetails));
      console.log('Store added:', storeResponse);
      
      // Update the menu with the new store ID
      const newMenu = await updateMenu(menuResponse._id, {
        store_id: storeResponse?._id,
        image_id: "",
        menu_item_ids: [],
      });
      console.log('Menu updated successfully');
      console.log(newMenu)
      
      // Navigate to store list
      navigate('/store-list');
    } catch (error) {
      console.error('Error:', error);
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
          <label className="block text-sm font-medium text-gray-700">店家介紹 (可選)</label>
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
            onChange={(e) => setLocation(e.target.value)}
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
