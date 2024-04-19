import React, { useState, useEffect } from "react";
import logo from "../assets/images/endless-logo.png";
import man from "../assets/images/user/1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login, LOGIN, YourName, Password, RememberMe } from "../constant";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const navigate = useNavigate();

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));

  useEffect(() => {
    if (value !== null) localStorage.setItem("profileURL", value);
    else localStorage.setItem("profileURL", man);
  }, [value]);

  const loginAuth = async (e) => {
    if (email === "test@gmail.com" && password === "test123") {
      localStorage.setItem("login", true);
      navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
    } else {
      toast.error("Incorrect password or usename!");
    }
  };

  const googleAuth = async () => {
    navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
  };

  const facebookAuth = async () => {
    navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
  };
  const twitterAuth = async () => {
    navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
  };
  const githubAuth = async () => {
    navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          {/* <!-- login page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-md-12">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <div className="card mt-4">
                      <div className="card-body">
                        <div className="text-center">
                          <h4>{LOGIN}</h4>
                          <h6>{"Enter your Username and Password"} </h6>
                        </div>
                        <form className="theme-form">
                          <div className="form-group">
                            <label className="col-form-label pt-0">{YourName}</label>
                            <input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">{Password}</label>
                            <input className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </div>
                          <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">{RememberMe}</label>
                          </div>
                          <div className="form-group form-row mt-3 mb-0 d-grid">
                            <button className="btn btn-primary" type="button" onClick={() => loginAuth()}>
                              {Login}
                            </button>
                          </div>
                          <div className="login-divider"></div>
                          <div className="social mt-3">
                            <div className="form-group btn-showcase d-flex">
                              <button className="btn social-btn btn-fb d-inline-block" type="button" onClick={facebookAuth}>
                                {" "}
                                <i className="fa fa-facebook"></i>
                              </button>
                              <button className="btn social-btn btn-twitter d-inline-block" type="button" onClick={googleAuth}>
                                <i className="fa fa-google"></i>
                              </button>
                              <button className="btn social-btn btn-google d-inline-block" type="button" onClick={twitterAuth}>
                                <i className="fa fa-twitter"></i>
                              </button>
                              <button className="btn social-btn btn-github d-inline-block" type="button" onClick={githubAuth}>
                                <i className="fa fa-github"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
