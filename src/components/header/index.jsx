import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import bklogo from "../../asset/images/BK - Logo.png";
import Ikirenga from "../../asset/images/Ikirenga.png";
import "./index.css";
const Header = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex container">
        <ul className="col-6 nav-bar">
          <li>
            <a className="nav-link" href="#0">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
              Earn
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
              Redeem
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
              My Account
            </a>
          </li>
        </ul>
        <div className="col-6 text-end py-1 header-color">
          <span className="border-right-pipe px-3">Welcome Mr Chidi Mbulu</span>
          <span className="border-right-pipe px-3">Points 65,708</span>
          <span className="px-3">En</span>
        </div>
      </div>
      <div className="header2">
        <div className="d-flex container">
          <div className="p-1 col-6">
            <img className="mx-4" src={bklogo} alt="" />
            <img src={Ikirenga} alt="" />
          </div>
          <div className="col-6 text-end">
            <button className="my-3 logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </>
    // <div className="d-flex bg-info justify-content-sm-evenly">
    //   <p>Header Tab</p>
    //   <button className="btn-link" onClick={() => navigate("/")}>Home</button>
    //   <button className="btn-link" onClick={() => navigate("/flight")}>Flight</button>
    // </div>
  );
};

export default Header;
