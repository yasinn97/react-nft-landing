import React, { useState, useEffect } from "react";
import { useRef } from "react";
import scrollreveal from "scrollreveal";
import Logo from "../assets/logo.ico";
import Free from "../components/Free";
import Clients from "../components/Clients";
import SuperRare from "../components/SuperRare";
import Release from "../components/Release";
import Like from "../components/Like";
import Signup from "../components/Signup";

export default function Home() {
  // const ref = useRef({ Release });

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="content">
            <p className="sub-title">Midland Distributors LTD</p>
            <h1 className="title">A Wholesaler Like No Other</h1>
            <p className="description">
              With 13 years of experience you can be assured we know what we are
              doing!
            </p>
            <a href="#About-Us">
              <button>About Us</button>
            </a>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={Logo} alt="home image" />
            </div>
            <div className="ellipse-container">
              <div className="ellipse blue"></div>
              <div className="ellipse darkblue"></div>
            </div>
          </div>
        </div>
      </div>

      <Free />
      <Clients />
      <SuperRare />
      <div id="About-Us">
        <Like />
      </div>
      <div id="Products">
        <Release />
      </div>
      <Signup />
    </>
  );
}
