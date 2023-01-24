import React from "react";
import voucherimg from "../../asset/images/vouchers-img.png"
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="bg-img">
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
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <h2 class="sec-section-heading text-center">
                Banking Made Exciting!
              </h2>
              <p class="sec-section-text text-center py-4">
                Earn Ikirenga Points with every routine banking transaction at
                Bank of Kigali. Your Ikirenga Points give you an opportunity to
                explore an extensive selection of amazing offers from air
                travel, hotels, airtime top-ups to exciting gift vouchers and
                more.
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <div className="row d-flex">
                <div className="col-md-6 col-12 category-img">
                  <a href="#0">
                    <div class="phovv">
                      <img
                        class="w-100 hovv"
                        src="https://shopgateway.giift.com:8443/assets/catalog/505b3/d860f/Air%20Travel.jpg"
                      />
                      <h3 class="img-text">Air Travel</h3>
                      <p class="img-desc sec-section-text"></p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-12 category-img">
                  <a href="#0">
                    <div class="phovv">
                      <img
                        class="w-100 hovv"
                        src="https://shopgateway.giift.com:8443/assets/catalog/505b3/f6449/Hotel.jpg"
                      />
                      <h3 class="img-text">Hotel</h3>
                      <p class="img-desc sec-section-text"></p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-12 category-img">
                  <a href="#0">
                    <div class="phovv">
                      <img
                        class="w-100 hovv"
                        src={voucherimg}
                      />
                      <h3 class="img-text">Vouchers</h3>
                      <p class="img-desc sec-section-text"></p>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-12 category-img">
                  <a href="#0">
                    <div class="phovv">
                      <img
                        class="w-100 hovv"
                        src="https://shopgateway.giift.com:8443/assets/catalog/505b3/b46a7/Airtime.jpg"
                      />
                      <h3 class="img-text">Air Time</h3>
                      <p class="img-desc sec-section-text"></p>
                    </div>
                  </a>
                </div>
                <div className="col-12 category-img">
                  <a href="#0">
                    <div class="phovv">
                      <img
                        class="w-100 hovv"
                        src="https://shopgateway.giift.com:8443/assets/catalog/505b3/61703/BOK%20shop.png"
                      />
                      <h3 class="img-text">Shop</h3>
                      <p class="img-desc sec-section-text"></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
