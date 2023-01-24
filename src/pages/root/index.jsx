import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
