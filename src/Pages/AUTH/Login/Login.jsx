import React from "react";
import "./Login.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import image1 from  "../../../images/12063508_4867147.jpg";
import image2 from "../../../images/3226344_43289.jpg";
import { Fade, LightSpeed } from "react-reveal";
export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 login-bg d-flex justify-content-center align-center">
            <Fade left duration={2000}>
              <div className="col-6 login-div-left d-flex align-items-center justify-content-center ">
                <div className="login-div col-8 p-5">
                  <h1 className="login-logo text-start">Pretty girl</h1>
                  <p className="login-p mb-0 mt-5">Welcome back !!!</p>
                  <h1 className="login-h1 mb-3 p-0">Sign in</h1>
                  <div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                          type="email"
                          className="form-control mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <small id="emailHelp" className="form-text text-end">
                          Forgot password?
                        </small>
                        <input
                          type="password"
                          className="form-control mb-2"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <LightSpeed left delay={2500}>
                        <div className="d-flex justify-content-center my-4">
                          <Link to={"/home"}>
                            <button type="submit" className=" signinbtn">
                              SIGN IN
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M3.56246 13.4062H17.7468L14.3648 9.11719C14.2687 8.99531 14.3554 8.8125 14.5125 8.8125H16.0312C16.2609 8.8125 16.4789 8.91797 16.6195 9.09844L20.4632 13.9734C20.85 14.4656 20.5007 15.1875 19.875 15.1875H3.56246C3.45933 15.1875 3.37496 15.1031 3.37496 15V13.5938C3.37496 13.4906 3.45933 13.4062 3.56246 13.4062Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </LightSpeed>
                      <p className="bottom-p text-center">
                        I don't have an account ?
                        <span className="bottom-subp"> Sign up</span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </Fade>
            {/* -------------right column----------------- */}
            <Fade right delay={1000} duration={2000}>
              <div className="col-6 login-div-right d-flex align-items-center">
                <div className="col-10" style={{ maxHeight: "400px" }}>
                  <Carousel
                    fade
                    controls={false}
                    indicators={false}
                    pause={false}
                    interval={4000}
                  >
                    <Carousel.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        className=" d-block w-100 h-10 "
                        src={image1}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        className=" img-fluid "
                        src={image2}
                        alt="Fourth slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
