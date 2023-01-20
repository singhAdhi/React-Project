import React from "react";
import HomeBanner from "../../asset/images/home-banner.png";
const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="row">
        <img src={HomeBanner} alt="" />
      </div>
      <div className="row">
        <div>
          List Div
        </div>
      </div>
    </div>
  );
};

export default Home;
