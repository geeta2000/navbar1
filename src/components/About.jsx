import React from "react";
import nature from "../assets/images/nature.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <div>
        <img src={nature} width={1000} alt="" />
      </div>
      <div>
        <button className="btn" onClick={onClickHandle}>
          Click to home page
        </button>
      </div>
    </div>
  );
};

export default About;
