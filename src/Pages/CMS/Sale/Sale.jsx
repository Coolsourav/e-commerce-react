import React from "react";
import "./Sale.css";
import bg from "../../../images/image4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./ProductData";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function Sale() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };
  
  return (
    <>
      <Fade left duration={1500}>
        <div className="position-relative banner">
          <img
            className="img-fluid"
            src={bg}
            alt="img"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              maxHeight: "100vh",
              width: "100%",
            }}
          />
          <div
            className="position-absolute top-50 end-0 translate-middle-y text-center section-2-div d-flex align-cener flex-column"
            style={{
              // background: "rgba(255, 255, 255, 0.5)",
              padding: "40px 60px",
              margin: "30px",
              color: "#fff",
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: "bold",
              maxWidth: "600px",
              wordWrap: "break-word",
            }}
          >
            <Fade right delay={1500}>
              <h1 className="section-2-title">Flash Sale</h1>
            </Fade>
            <Fade right delay={2000}>
              <h2 className="section-2-title">get discount 25% off</h2>
            </Fade>
            <Fade right delay={2100}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Fade>
          </div>
        </div>
      </Fade>

      {/* -------------------carousel div---------------- */}

      <div className="hero-offer my-4">
        <h2>Free Shipping WorldWide</h2>
      </div>

      <div className="container-div">
        <Slider {...settings}>
          {Products.map((Product) => (
            <div key={Product.id} className="product">
              <div className="header">
                <img src={Product.imageUrl} alt="" className="image" />
              </div>
              <div className="details">
                <p className="bold">{Product.name}</p>
                <p>
                  <s>{Product.description}</s>
                  <span className="mx-2">$80</span>
                </p>
                <Link to={"/shop"}>
                  <button className="button">Buy Now</button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
