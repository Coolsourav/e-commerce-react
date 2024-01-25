import React from "react";
import Fade from "react-reveal/Fade";
import ShopCard from "./ShopCard";

export default function Shop() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <Fade left duration={3000}>
            <div
              className="col-3"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 0,
                alignItems: "center",
              }}
            >
              <div className="col-12 mb-2 ">
                <img
                  style={{ height: "500px" }}
                  className="img-fluid "
                  src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                />
              </div>
              <div className="col-12 mb-2 ">
                <img
                  style={{ height: "500px" }}
                  className="img-fluid "
                  src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg "
                  alt="img"
                />
              </div>
              <div className="col-12 mb-2 ">
                <img
                  style={{ height: "500px" }}
                  className="img-fluid "
                  src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                />
              </div>
              <div className="col-12 mb-2 ">
                <img
                  style={{ height: "500px" }}
                  className="img-fluid "
                  src="https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                />
              </div>
            </div>
          </Fade>

          {/* -----------------right col start----------------- */}
          <div className="col-9 p-0 border border-1">
            <div>
              <Fade top>
                <h1 className="text-center my-4 text-uppercase">Shop's Men</h1>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                <ShopCard />
              </div>
            </Fade>
          </div>

          {/* -------------------right col end------------ */}
        </div>
      </div>
    </>
  );
}
