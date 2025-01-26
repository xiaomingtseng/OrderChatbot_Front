import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-white shadow">
      <Link to="/" className="flex flex-col items-center text-gray-500">
        <div className="w-6 h-6 bg-gray-300 rounded mb-1">🏠</div>
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/cart" className="flex flex-col items-center text-gray-500">
        <div className="w-6 h-6 bg-gray-300 rounded mb-1">🛒</div>
        <span className="text-xs">Cart</span>
      </Link>
    </nav>
  );
}

export default NavBar;