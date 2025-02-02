import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import HistoryOrder from './pages/HistoryOrder';
import StoreList from './pages/StoreList';
import Cart from './pages/Cart';
import AddStore from './pages/AddStore';
import EditStore from './pages/EditStore';
import SelectStore from './pages/SelectStore';
import EditStoreDetails from './components/EditStoreDetails';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store-list" element={<StoreList />} />
        <Route path="/history" element={<HistoryOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store-add" element={<AddStore />} />
        <Route path="/store-edit" element={<EditStore />} />
        <Route path='/store-select' element={<SelectStore />} />
        <Route path="/edit-store/:id" element={<EditStoreDetails />} />
      </Routes>
    </Router>
  )
}

export default App
