import React from "react";
export default function ServiceCardItem(props) {
    
  return (
      
    <div>
       
      <div className="border-bottom border-2 d-inline-flex ">
      {props.serviceData.img}
      </div>
   
      <h4>
       {props.serviceData.title}
      </h4>
    
   
    </div>
  );
}