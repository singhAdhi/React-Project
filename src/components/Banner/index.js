import React from "react";

const Banner = (props) => {
  return (
    <div className={props.bgImg}>
      <div className="container">
        <div className="row">
          <div className="custom-banner d-flex flex-column justify-content-center mt-3">
            <h1 className="heading-banner">
              We Reward You For Every Transaction{" "}
            </h1>
            <button className="knowmore-btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
