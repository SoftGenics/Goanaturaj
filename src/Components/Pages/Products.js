import React from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import ProductsSection from "../Products/ProductsSection";
import Footer from "../Footer/Footer";
import Productsec from "../Products/Produtsec";
const Products = () => {
  return (
    <div>
      <NavbarMenu />
      <Productsec/>
      {/* <ProductsSection /> */}
      <Footer />
    </div>
  );
};

export default Products;
