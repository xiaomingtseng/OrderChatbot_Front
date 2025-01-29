import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, deleteStore } from '../api/apiService';
import NavBar from '../components/NavBar';

function SelectStore() {
  const [stores, setStores] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [storeToDelete, setStoreToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getStores = async () => {
      try {
        const stores = await fetchData('/stores');
        setStores(stores);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    getStores();
  }, []);

  const handleEditStore = (_id: string) => {
    navigate(`/edit-store/${_id}`);
  };

  const handleDeleteStore = (store) => {
    setStoreToDelete(store);
    setShowConfirm(true);
  };

  const confirmDeleteStore = async () => {
    if (storeToDelete) {
      try {
        await deleteStore(storeToDelete._id);
        setStores(stores.filter(store => store._id !== storeToDelete._id));
        setShowConfirm(false);
        setStoreToDelete(null);
      } catch (error) {
        console.error('Error deleting store:', error);
      }
    }
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">選擇店家</h1>
      </header>
      <ul className="space-y-4 mt-4">
        {stores.map(store => (
          <li
            key={store._id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div onClick={() => handleEditStore(store._id)} className="cursor-pointer">
              <h2 className="text-lg font-semibold">{store.name}</h2>
              <p className="text-sm text-gray-500">{store.address}</p>
            </div>
            <button
              onClick={() => handleDeleteStore(store)}
              className="text-red-500 hover:text-red-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <p>確定要刪除這個店家嗎？</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                取消
              </button>
              <button
                onClick={confirmDeleteStore}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      )}
      <NavBar />
    </div>
  );
}

export default SelectStore;