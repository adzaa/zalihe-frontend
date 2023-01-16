import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import Suppliers from "./pages/Suppliers";
import AddSupplier from "./pages/AddSupplier";
import EditSupplier from "./pages/EditSupplier";

import Sirovine from "./pages/Sirovine";
import AddSirovina from "./pages/AddSirovina";
import EditSirovina from "./pages/EditSirovina";

import ChangePassword from "./components/ChangePassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />

          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/add" element={<AddSupplier />} />
          <Route path="/suppliers/edit/:id" element={<EditSupplier />} />

          <Route path="/sirovine" element={<Sirovine />} />
          <Route path="/sirovine/add" element={<AddSirovina />} />
          <Route path="/sirovine/edit/:id" element={<EditSirovina />} />

          <Route path="/change-password/:id" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
