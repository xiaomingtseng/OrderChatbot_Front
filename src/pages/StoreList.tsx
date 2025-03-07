import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import StoreListComponent from '../components/StoreListComponent';


const StoreList: React.FC = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
        <h1 className="text-lg font-semibold">Store List</h1>
        <Link to="/" className="text-blue-500">返回主畫面</Link>
      </header>
      <StoreListComponent isSelectStore={false} />
      <NavBar />
    </div>
  );
}

export default StoreList;
