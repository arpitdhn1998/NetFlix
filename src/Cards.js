import React from "react";
import Images from "./Img";
function Card (props) {
    return (
      <div className = "cards">
      <div className = "card" >
        <Images imgsrc={props.imgsrc} />
        <div className = "cards_info">
        <div className="card_category">{props.seriesname}</div>
          <h3 className="card_title "> {props.title} </h3>
          <a href= {props.link} target="_blank" rel="noopener noreferrer">
          <button className="btn"> Watch Now </button>
          </a>
  
        </div>
  
      </div>
  
    </div>
  
  
    )
  }
  export default Card;