import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import Login from "./Components/Login/Login";
// import LogOut from "./Components/Login/Logout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hairs from "./Components/Hairs/Hairs";
import AddHairs from "./Components/Hairs/AddHairs";
import ViewHairsProduct from "./Components/Hairs/ViewHairsProduct";
import UpdateHairProduct from "./Components/Hairs/UpdateHairProduct";
import Facial from "./Components/Facial/Facial";
import AddFacial from "./Components/Facial/AddFacial";
import Waxing from "./Components/Waxing/Waxing";
import AddWaxing from "./Components/Waxing/AddWaxing";
import UpdateWaxingProduct from "./Components/Waxing/UpdateWaxingProduct"
import Package from "./Components/Package/Package";
import AddPackage from "./Components/Package/AddPackage";
import UpdatePackageProduct from "./Components/Package/UpdatePackageProduct";
import Manicure from "./Components/ManicureAndPedicure/Manicure";
import AddManucure from "./Components/ManicureAndPedicure/AddManicure";
import UpdateManicureProduct from "./Components/ManicureAndPedicure/UpdateManicureProduct";
import Bridal from "./Components/Bridal/Bridal";
import AddBridal from "./Components/Bridal/AddBridal";
import UpdateBridalProduct from "./Components/Bridal/UpdateBridalProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/logout" element={<LogOut />} /> */}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<Hairs />} />
      <Route path="/AddProducts" element={<AddHairs />} />
      <Route path="/ViewProducts/:id" element={<ViewHairsProduct />} />
      <Route path="/updateProducts/:id" element={<UpdateHairProduct />} />
     
     
      <Route path="/Waxing" element={<Waxing />} />
      <Route path="/AddWaxingProducts" element={<AddWaxing />} />
     
      <Route path="/updateWaxingProducts/:id" element={<UpdateWaxingProduct />} />
      
      <Route path="/Package" element={<Package />} />
      <Route path="/AddPackage" element={<AddPackage />} />
      <Route path="/updatePackageProducts/:id" element={<UpdatePackageProduct />} />
      
      
      <Route path="/Manicure" element={<Manicure/>} />
      <Route path="/AddManicureProducts" element={<AddManucure />} />
      <Route path="/updateManicureProducts/:id" element={<UpdateManicureProduct />} />
      
      <Route path="/Bridal" element={<Bridal/>} />
      <Route path="/AddBridalProducts" element={<AddBridal />} />
      <Route path="/UpdateBridalProducts/:id" element={<UpdateBridalProduct />} />
      
      <Route path="/FacialAndCleanUp" element={<Facial />} />
      <Route path="/AddFacialAndCleanUp" element={<AddFacial />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
