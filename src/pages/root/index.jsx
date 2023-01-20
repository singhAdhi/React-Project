import React, { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";

const Root = () => {
  /* Login session example code  
  useEffect(() => {
    var userdata = localStorage.getItem("user");
    // console.log("userdata => ", userdata)
    if (userdata === null || userdata === "null") {
      navigate("/login");
    }
  });
  */

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
