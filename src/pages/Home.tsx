import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
          {/* Header */}
          <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
            <h1 className="text-lg font-semibold">主畫面</h1>
          </header>
    
          {/* Main Content */}
          <main className="flex-grow p-4">
            {/* Latest Bill Section */}
            <button className="mb-6 w-full">
              <h2 className="text-md font-semibold mb-2">最新單據</h2>
              <div className="bg-white rounded-lg shadow p-4 w-full">
              <h3 className="text-sm font-medium mb-1">店家名稱</h3>
              <p className="text-xs text-gray-500 mb-4">地址</p>
              <div className="bg-gray-200 h-24 rounded w-full"></div>
              </div>
            </button>


            <section>
              <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
                {/* Order Card 1 */}
                <Link to="/store-list" className="flex flex-col items-center">
                <div className="w-16 h-16 rounded mb-2 flex items-center justify-center">🛒</div>
                  <p className="text-xs text-center">查詢店家</p>
                </Link>
                {/* Order Card 2 */}
                <Link to="/store-edit" className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded mb-2 flex items-center justify-center">🛒</div>
                  <p className="text-xs text-center">編輯店家</p>
                </Link>
                {/* Order Card 3 */}
                <button className="flex flex-col items-center">
                    {/* Other buttons */}
                    <Link to="/history" className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded mb-2 flex items-center justify-center">🛒</div>
                        <p className="text-xs text-center">歷史訂單記錄</p>
                    </Link>
                    {/* Other buttons */}
                </button>
              </div>
            </section>
          </main>
    
          {/* Bottom Navigation */}
            <NavBar />
        </div>
      );
  }
  
  export default Home;