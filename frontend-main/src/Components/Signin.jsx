import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import wrongep from "../assets/wrongep.gif";
import userne from "../assets/usernotexists.gif";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";

import * as api from "../axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorwep, setErrorwep] = useState(false); //wrong email password
  const [errorune, setErrorune] = useState(false); //user not exists
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const responseGoogle = async (res) => {
    let em = res.profileObj.email;
    let user_token = await api.userSignIn({ email: em });

    localStorage.setItem(
      "user",
      JSON.stringify({ email: em, token: user_token.data.token })
    );

    if (user_token.data.message === "user logged in") {
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      console.log(user_token.data.message);
    }

  };
  const responseGoogleFail = (err) => {
    console.log(err);
  };

  const signinfun = async (e) => {
    e.preventDefault();
    let res = await api.userSignIn({ email, password });
    console.log(res);
    if (res.data.message === "User logged up") {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, token: res.data.token })
      );
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      console.log(res.data.message);
      if (res.data.message === "user doesn't exist") {
        setError(true);
        setErrorune(true);
      }
      else if (res.data.message === "Wrong password or email") {
        setError(true);
        setErrorwep(true);
      }
    }
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col order-2 order-lg-1">
            <div className="con-image mt-5">
              {error ? (
                <></>
              ) : (
              <img className="img-signup" src={signuppic} alt="signuppic" />
              )}
              {
                errorune?(
                  <img className="img-signup" src={userne} alt="signuppic" />
                ):(<></>)
              }
              {errorwep?(
                <img className="img-signup" src={wrongep} alt="signuppic" />
              ):<></>}
            </div>
          </div>
          <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
            <div className="container">
              <form id="form1" onSubmit={signinfun}>
                <div className="container">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                      <div className="inp-css">
                        <input
                          onChange={(e) => {
                            setError(false);
                            setErrorune(false);
                            setErrorwep(false);
                            setEmail(e.target.value);
                          }}
                          type="email"
                          className="butto-2 input-form"
                          placeholder="email"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter valid email"
                          required
                        />
                      </div>
                      <div className="inp-css mt-4">
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          type="password"
                          className="butto-2 input-form"
                          placeholder="password"
                          pattern=".{6,}"
                          title="Password should contain six or more characters"
                          required
                        />
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row">
                    <p className="txt-2">sign in using </p>
                  </div>
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-4"></div>
                        <div className="col-2">
                          <GoogleLogin
                            form="form322"
                            clientId="1002474588776-p7fi5pd1hpf1fjp1p9v33iet3i9u1fco.apps.googleusercontent.com"
                            render={(renderProps) => (
                              <button
                                className="social-btn"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                form="form322"
                              >
                                <img
                                  className="social-media-google"
                                  src={google}
                                />
                              </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogleFail}
                            cookiePolicy={"single_host_origin"}
                          />
                        </div>
                        <div className="col-2">
                          <button className="social-btn" form="form2">
                            <img
                              className="social-media-linkedin"
                              src={linkedin}
                            />
                          </button>
                        </div>
                        <div className="col-4"></div>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col"></div>
                    <div className="col">
                      <div className="sign-btn">
                        <button
                          form="form1"
                          type="submit"
                          className="btn-2-su"
                          onSubmit={signinfun}
                        >
                          sign in
                        </button>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
