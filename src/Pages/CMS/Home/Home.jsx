import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import DataCards from "../ProductDetails/Card";
import "../ProductDetails/productDetails.css";
import image2 from "../../../images/image2.jpg";
import image3 from "../../../images/image3.jpg";
import image4 from "../../../images/image4.jpg";
import image5 from "../../../images/image5.jpg";
import image6 from "../../../images/image6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../../images/section2-banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Rotate, Zoom } from "react-reveal";
import { Link } from "react-router-dom";


export default function Home() {
  var items = [
    {
      image: image3,
    },
    {
      image: image6,
    },
    {
      image: image5,
    },
    {
      image: image2,
    },
    {
      image: image4,
    },
  ];

  const data1 = [
    {
      image: {
        key: 1,
        component: "img",
        height: "320px",
        url: "https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_269,h_318,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp",
        info: "midi pleated skirt",
      },
    },
  ];

  const data2 = [
    {
      image: {
        key: 2,
        component: "img",
        height: "320px",
        url: "https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_269,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cda177_b5a795ade21b41d38cadd836824e6768.jpg",
        info: "Lv luxury edition",
      },
    },
  ];

  const data3 = [
    {
      image: {
        key: 3,
        component: "img",
        height: "320px",
        url: "https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_269,h_318,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp",
        info: "vintage frame eyeglasses",
      },
    },
  ];
  const data4 = [
    {
      image: {
        key: 4,
        component: "img",
        height: "320px",
        url: "https://static.wixstatic.com/media/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.png/v1/fill/w_283,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.png",
        info: "aesthetic muffler",
      },
    },
  ];
  AOS.init();
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <>
      <Carousel indicators={false} controls={false} style={{ margin: "0" }}>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="position-relative">
              <img
                className="img-fluid"
                src={item.image}
                alt="img"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  maxHeight: "100vh",
                  width: "100%",
                }}
              />
              <Zoom delay={200}>
                <div
                  className="position-absolute top-50 start-50 translate-middle text-center section-2-div "
                  style={{
                    background: "rgb(48,49,50, 0.5)",
                    padding: "40px 60px",
                    fontFamily: '"Times New Roman", Times, serif',
                    fontWeight: "900",
                  }}
                >
                  <Rotate top left delay={700}>
                    <h1
                      className="section-2-title"
                      style={{ color: "rgb(255,255,255,0.9)" }}
                    >
                      fall & winter
                    </h1>
                  </Rotate>
                  <Rotate bottom right delay={700}>
                    <Link to={"/shop"}>
                      <button className="section-1-button">Shop Now</button>
                    </Link>
                  </Rotate>
                </div>
              </Zoom>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="hero-offer">
        <h2>Free Shipping WorldWide</h2>
      </div>

      <Fade right delay={2000}>
        <div>
          <h1 className="about-txt">Year Round</h1>
          <hr />
          <p className="about-subtxt">Must have items</p>
        </div>
      </Fade>

      {/* ----------------cards section ------------- */}
      <Fade left delay={1500}>
        <div className="productDiv">
          <DataCards data={data1} />
          <DataCards data={data2} />
          <DataCards data={data3} />
          <DataCards data={data4} />
        </div>
      </Fade>
      <Fade right>
        <div>
          <h1 className="about-txt">End of the Season</h1>
          <hr />
          <p className="about-subtxt">Grab It now</p>
        </div>
      </Fade>

      {/* -----------------section 2 ---------------- */}

      <div className="position-relative">
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
        <Zoom>
          <div
            className="position-absolute top-50 start-50 translate-middle text-center section-2-div "
            style={{
              background: "rgb(255, 255, 255, 0.4)",
              padding: "40px 60px",
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: "900",
            }}
          >
            <h1 className="section-2-title" style={{ color: "rgb(0,0,0,0.6)" }}>
              Winter Sale
            </h1>
            <Link to={"/sale"}>
              <button className="section-2-button">Check Out</button>
            </Link>
          </div>
        </Zoom>
      </div>

      {/* -------------------------------logo section---------------- */}

      <div className="container brand-slider my-5">
        <h2 className="text-center brand-slider-heading ">Our Partners</h2>
        <Slider {...settings}>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/phoenix-logo-concept_23-2148477263.jpg?w=740&t=st=1703742202~exp=1703742802~hmac=ce111b57d2d08932df0ae6886c594982460fd91d6e656ba80ab9d268e4fb0cce"
              alt="img"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-photo/neon-fist-round-frame-brick-wall_53876-163059.jpg?w=740&t=st=1703742590~exp=1703743190~hmac=ab1ac0151af7f3372bca9fee13808e97741dca2d7e8190a625511ebf4badac25"
              alt="img"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/gradient-sun-logo_23-2149405521.jpg?w=740&t=st=1703742486~exp=1703743086~hmac=70fdfd6ee09e3d6a01e6bfbbcababc456a104d533d4a28f725da6adc1f652c26"
              alt="img"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=740&t=st=1703741933~exp=1703742533~hmac=f9b5faefd912477c984646e3ecd1cc5644734fbe1f62269f7c7ca35fbfbb0142"
              alt="img"
            />
          </div>
          <div className="slide">
            <img
              src="https://image.freepik.com/free-vector/football-logo-background_1195-245.jpg"
              alt="img"
            />
          </div>
          <div className="slide">
            <img
              src="https://image.freepik.com/free-vector/football-logo-background_1195-246.jpg"
              alt="img"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
