import React from "react";
import ShopCategory from "../components/Shop/ShopCategory";
import StoreCollection from "../components/Shop/StoreCollection";
import Services from "../components/Shop/Services";

function Shop({ setCartItems }) {
  return (
    <>
      <ShopCategory />
      <div className="">
        <StoreCollection setCartItems={setCartItems} />
      </div>
      <Services />
    </>
  )
}

export default Shop;