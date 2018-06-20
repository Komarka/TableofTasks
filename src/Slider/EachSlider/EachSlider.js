import React from 'react';
import "./EachSlider";

 const EachSlider=(props)=>{
 	let image_styles={
 		width:'100%'
 	}
 	return <div className="mySlides fade">
    <div className="numbertext">{`${props.number}/${props.general_number}`}</div>
    
   
    
    <img src={props.hero} style={image_styles} />
    <div className="text">
    {props.text}
<div><img src={props.image} className='smaller'  /></div>
    </div>

  </div>
}
 export default EachSlider;