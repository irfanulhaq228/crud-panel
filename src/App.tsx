import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Setting/Setting";
import { useSelector } from "react-redux";
import { RootState } from "./Features/Features";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/Product/ProductList";
import AddProduct from "./Pages/Product/ProductAdd";
import EditProduct from "./Pages/Product/ProductEdit";
import PersonalInformation from "./Components/PersonalInformation/PersonalInformation";
import AddressInformation from "./Components/AddressInformation/AddressInformation";
import FinancialInformation from "./Components/FinancialInformation/FinancialInformation";

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

            <Route path="/product" element={<Product />}>
              <Route path="product-list" element={<ProductList />} />
              <Route path="new-product" element={<AddProduct />} />
              <Route path="product-edit" element={<EditProduct />} />
            </Route>

            <Route path="/setting" element={<Setting />}>
              <Route path="personal-information" element={<PersonalInformation />} />
              <Route path="address-information" element={<AddressInformation />} />
              <Route path="financial-information" element={<FinancialInformation />} />
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
