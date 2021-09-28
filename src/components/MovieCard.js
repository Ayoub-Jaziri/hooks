import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
export default function MovieCard(props) {

const wichImageUse=() => {
  var useImage
  useImage =props.movie.image;
  return useImage
 

}
  return (
    
    <div >
      {console.log(wichImageUse())}

      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img
          variant="top"
          src={wichImageUse()}
          style={{ width: "auto", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.movie.name}</Card.Title>
          <Card.Text>{props.movie.description}</Card.Text>

          <Button
            variant="primary"
            style={{ position: "absolute", top: "26em" }}
          >
            Go somewhere
          </Button>
          <div style={{ position: "absolute", top: "24em" }}>
          {" "}
            {[...Array(props.movie.rating)].map((star, i )=>{const ratingValue= i + 1;
            return(
                  


           <FaStar 
           size={30}
           color= "#ffc107"
           

           />
             )})}
             
             </div>
        </Card.Body>
      </Card>
    </div>
  );
}

