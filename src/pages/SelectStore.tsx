import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoreListComponent from '../components/StoreListComponent';
import { Store } from '../types/store.ts'; // Import the Store type if it's in a separate file

const SelectStorePage: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle store selection and navigate to edit page
  const handleSelectStore = (store: Store) => {
    navigate(`/edit-store/${store.id}`); // Navigate to edit page with store ID
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold">Select a Store</h1>

      {/* Pass handleSelectStore to StoreListComponent */}
      <StoreListComponent isSelectStore={true} onSelect={handleSelectStore} />
    </div>
  );
};

export default SelectStorePage;
