import React from "react";
import "./Contact.css";
import "@fontsource/poppins/700.css";
import { Button } from "react-bootstrap";
import { Fade, Roll} from "react-reveal";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    };
    
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
              src="https://img.freepik.com/free-photo/shopping-bag-cart_23-2148879372.jpg?w=1380&t=st=1704119402~exp=1704120002~hmac=6206a64d7a3afe0524a40a6aa385d998d9c060d712853f57950906461c9170c1"
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
            <Roll left>
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
                  }}
                >
                  Contact
                </h1>
              </div>
            </Roll>
          </div>
          {/* -----------------------------banner end--------------------- */}
        </div>
      </div>

      <div className=" contact4 overflow-hidden position-relative my-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="col col-lg-6 contact-box mb-4 mb-md-0 ">
              <div className="d-flex justify-content-center flex-column align-items-center col ">
                <h2 className="title  text-black mt-2 text-center">
                  Send Us A Message
                </h2>
                <Fade left duration={2000}>
                  <form className="mt-3" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control text-black"
                            type="email"
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea
                            className="form-control text-black"
                            rows="7"
                            placeholder="How can we help you?"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 d-grid mt-3">
                        <Button
                          size="lg"
                          style={{
                            backgroundColor: "#303132",
                            border: "none",
                            borderRadius: "30px",
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </Fade>
              </div>
            </div>
          </div>
          <Fade right>
            <div className="col-lg-6 right-image p-r-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.416522488256!2d88.4274345!3d22.5752084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1704129853054!5m2!1sen!2sin"
                title="myFrame"
                width="100%"
                height="538"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                data-aos="fade-left"
                data-aos-duration="3000"
              ></iframe>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
