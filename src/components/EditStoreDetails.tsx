import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchData, updateStore } from '../api/apiService';
import NavBar from '../components/NavBar';

interface Store {
  name: string;
  address: string;
  menu_id: string;
}

function EditStoreDetails() {
  const { _id } = useParams<{ _id: string }>();
  const [store, setStore] = useState<Store>({ name: '', address: '', menu_id: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStore = async () => {
      if (_id) {
        console.log('Fetching store details:', _id);
        try {
          const fetchedStore = await fetchData(`/stores/${_id}`);
          console.log('Fetched store details:', fetchedStore);
          setStore(fetchedStore);
        } catch (error) {
          console.error('Error fetching store details:', error);
        }
      } else {
        console.error('Store ID is undefined');
      }
    };

    fetchStore();
  }, [_id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // const handleUpload = async () => {
  //   if (selectedFile && _id) {
  //     try {
  //       const imageResponse = await uploadImage(_id, selectedFile);
  //       console.log('Image uploaded successfully', imageResponse);
  //       // Assuming imageResponse contains the image _id
  //       setStore({ ...store, menu_id: imageResponse._id });
  //       console.log('Store updated with image _id');
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (_id) {
      try {
        await updateStore(_id, store);
        console.log('Store updated successfully');
        navigate('/store-list');
      } catch (error) {
        console.error('Error updating store:', error);
      }
    }
  };

  const handleUpdateMenuItem = () => {
    // Logic for updating the menu item
    console.log('Update menu item button clicked');
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">修改店家資料</h1>
      </header>
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
            value={store.address}
            onChange={(e) => setStore({ ...store, address: e.target.value })}
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
      <NavBar />
    </div>
  );
}

export default EditStoreDetails;