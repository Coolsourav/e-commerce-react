import React from 'react';
import "./About.css";
import { Fade, Roll, Slide } from "react-reveal";

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* ---------------------banner -------------------- */}
          <div
            className="col-12 p-0"
            style={{ position: "relative", height: "300px" }}
          >
            <img
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119090.jpg?w=1380&t=st=1704351756~exp=1704352356~hmac=ef59c51f995bcb39b5949e543b25b36c16b258bb161aa2c13b240c640beb8f51"
              alt="img"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />
            <Roll right delay={1000}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "3rem",
                    fontFamily: "Poppins",
                    textAlign: "center",
                  }}
                >
                  About
                </h1>
              </div>
            </Roll>
          </div>
          {/* ---------------banner end---------------- */}
          <div className="container about-section d-flex justify-content-center align-items-center flex-column">
            <div
              className="about-first-div d-flex h-80 col-10"
              style={{ padding: "80px 0", justifyContent: "space-between" }}
            >
              <Slide left>
                <div className="col-lg-7">
                  <h2
                    className="my-3"
                    style={{ fontWeight: "700", fontSize: "1.8rem" }}
                  >
                    Our Story
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris consequat consequat enim, non auctor massa ultrices
                    non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                    tincidunt augue. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Maecenas varius
                    egestas diam, eu sodales metus scelerisque congue.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Maecenas gravida justo eu
                    arcu egestas convallis. Nullam eu erat bibendum, tempus
                    ipsum eget, dictum enim. Donec non neque ut enim dapibus
                    tincidunt vitae nec augue. Suspendisse potenti. Proin ut est
                    diam. Donec condimentum euismod tortor, eget facilisis diam
                    faucibus et. Morbi a tempor elit.
                  </p>
                  <p>
                    Donec gravida lorem elit, quis condimentum ex semper sit
                    amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                    sodales. Ut fringilla turpis in vehicula vehicula.
                    Pellentesque congue ac orci ut gravida. Aliquam erat
                    volutpat. Donec iaculis lectus a arcu facilisis, eu sodales
                    lectus sagittis. Etiam pellentesque, magna vel dictum
                    rutrum, neque justo eleifend elit, vel tincidunt erat arcu
                    ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
                    convallis ipsum, et maximus enim ligula ac ligula.
                  </p>
                  <p>
                    Any questions? Let us know in store at 8th floor, 379 Hudson
                    St, New York, NY 10018 or call us on (+1) 96 716 6879
                  </p>
                </div>
              </Slide>
              <Fade right delay={1000}>
                <div className="col-lg-4 about-image-div" style={{ height: "500px" }}>
                  <img
                    src="https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="img"
                    className="img-fluid d-block about-img"
                  ></img>
                </div>
              </Fade>
            </div>
            {/* ----------------------second section----------------- */}
            <div
              className="about-second-div d-flex h-80 col-10"
              style={{
                padding: "40px 0 80px 0",
                justifyContent: "space-between",
              }}
            >
              <Fade left delay={1000}>
                <div className="col-lg-4 about-img-div" style={{ height: "500px" }}>
                  <img
                    src="https://images.pexels.com/photos/7137418/pexels-photo-7137418.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="img"
                    className="img-fluid d-block about-img"
                  ></img>
                </div>
              </Fade>
              <Slide right duration={1000}>
                <div className="col-lg-7">
                  <h2
                    className="my-3"
                    style={{ fontWeight: "700", fontSize: "1.8rem" }}
                  >
                    Our Mission
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris consequat consequat enim, non auctor massa ultrices
                    non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                    tincidunt augue. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Maecenas varius
                    egestas diam, eu sodales metus scelerisque congue.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Maecenas gravida justo eu
                    arcu egestas convallis. Nullam eu erat bibendum, tempus
                    ipsum eget, dictum enim. Donec non neque ut enim dapibus
                    tincidunt vitae nec augue. Suspendisse potenti. Proin ut est
                    diam. Donec condimentum euismod tortor, eget facilisis diam
                    faucibus et. Morbi a tempor elit.
                  </p>
                  <p>
                    Donec gravida lorem elit, quis condimentum ex semper sit
                    amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                    sodales. Ut fringilla turpis in vehicula vehicula.
                    Pellentesque congue ac orci ut gravida. Aliquam erat
                    volutpat. Donec iaculis lectus a arcu facilisis, eu sodales
                    lectus sagittis. Etiam pellentesque, magna vel dictum
                    rutrum, neque justo eleifend elit, vel tincidunt erat arcu
                    ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
                    convallis ipsum, et maximus enim ligula ac ligula.
                  </p>
                  <p>
                    Any questions? Let us know in store at 8th floor, 379 Hudson
                    St, New York, NY 10018 or call us on (+1) 96 716 6879
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
