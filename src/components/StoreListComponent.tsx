import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/apiService';
import { parseStoreString } from '../utils/parseStoreString';
import { Store } from '../types/store';

// Define component props
interface Props {
  isSelectStore: boolean;
  onDelete?: (store: Store) => void;
  onSelect?: (store: Store) => void;
}

const StoreListComponent: React.FC<Props> = ({ isSelectStore, onDelete, onSelect }) => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const getStores = async () => {
      try {
        const result = await fetchData('/stores');
        const parsedStores = Array.isArray(result)
          ? result.map(parseStoreString)
          : [parseStoreString(result)];

        setStores(parsedStores.filter((store) => store !== null) as Store[]);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    getStores();
  }, []);

  return (
    <ul className="space-y-4">
      {stores.length > 0 ? (
        stores.map((store) => (
          <li
            key={store.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center cursor-pointer"
            onClick={() => onSelect?.(store)} // Call onSelect when clicking the store
          >
            <div>
              <h2 className="text-lg font-semibold">{store.name}</h2>
              <p className="text-sm text-gray-500">{store.location}</p>
              <p className="text-sm text-gray-500">ID: {store.id}</p>
            </div>
            {isSelectStore && onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering onSelect when clicking delete
                  onDelete(store);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </li>
        ))
      ) : (
        <p className="text-gray-500">Loading stores...</p>
      )}
    </ul>
  );
};

export default StoreListComponent;
