import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate("/about");
  };

  return (
    <div className="main bgred ">
      this is contact
      <div>
        <button className="btn" onClick={onClickHandle}>
          Click to home page
        </button>
      </div>
    </div>
  );
};

export default Contact;
