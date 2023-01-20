import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="d-flex bg-info justify-content-sm-evenly">
      <p>Header Tab</p>
      <button className="btn-link" onClick={() => navigate("/")}>Home</button>
      <button className="btn-link" onClick={() => navigate("/flight")}>Flight</button>
    </div>
  );
};

export default Header;
