import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function EditStore() {
  const navigate = useNavigate();

  const handleAddStore = () => {
    navigate('/store-add');
  };

  const handleEditStore = () => {
    navigate('/store-select');
  };

  return (
    <div className="p-4 pb-16">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">店家管理</h1>
      </header>
      <div className="space-y-4 mt-4">
        <button
          onClick={handleAddStore}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded"
        >
          新增店家
        </button>
        <button
          onClick={handleEditStore}
          className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded"
        >
          修改店家
        </button>
      </div>
      <NavBar />
    </div>
  );
}

export default EditStore;