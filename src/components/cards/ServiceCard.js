import React from "react";
import ServiceCardItem from "../cardItem/ServiceCardItem";

export default function ServiceCard(props) {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-evenly items-center">
        <h1>Services</h1>
          {props.serviceCardArray.map((item) => {
            return (
              <div className="col-sm-3 border border-dark p-5 m-3">
                <ServiceCardItem serviceData={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
