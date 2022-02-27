import React from "react";
export default function CardItem(props) {
    
  return (
      
    <div>
      {props.data.img}
      <h4>
       {props.data.title}
      </h4>
      <p> {props.data.description}</p>
   
    </div>
  );
}
