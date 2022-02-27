import React from "react";
import Button from "../components/buttons/Button";
import unsplash from "../images/unsplash.png";

const ContactUs = () => {
  const divStyle = {
   
      marginLeft: "-150px",
  
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-7">
            <img src={unsplash} className="img-fluid" />
          </div>
          <div className="col-sm-5 p-5 my-5 bg-primary" style={divStyle}>
            <h1 className="text-white text-start">About Us</h1>
            <p className="text-white text-start">
              For more than 30 years we have been delivering world-class
              construction and we've build many lasting relationships along the
              way.
              <br />
              <br />
              We've matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
