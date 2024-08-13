import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Setting/Setting";
import { useSelector } from "react-redux";
import { RootState } from "./Features/Features";
import ProductList from "./Pages/Product/ProductList";
import AddProduct from "./Pages/Product/ProductAdd";
import EditProduct from "./Pages/Product/ProductEdit";

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode);
  return (
    <Router>
      <div className={`${!darkMode ? "bg-[#F1F5F9]" : "bg-[#24303F]"} flex min-h-screen`}>
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/product-list" element={<ProductList />} />
            <Route path="/new-product" element={<AddProduct />} />
            <Route path="/product-edit" element={<EditProduct />} />

            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
