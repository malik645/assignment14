import React from "react";
import CardItem from "../cardItem/CardItem";

export default function Cards(props) {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-evenly items-center">
          <h1 className="mb-5">Our Reputation</h1>
          {props.cardsArray.map((item) => {
            return (
              <div className="col-sm-3 text-start border border-dark p-3 my-4">
                <CardItem data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
