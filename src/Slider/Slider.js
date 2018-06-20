import React from 'react';
import "./Slider.css";
import EachSlider from "./EachSlider/EachSlider";


 const Slider=(props)=>{
 	let timer=null;
 	let slides_len=props.data.slider.length;
 	document.addEventListener('DOMContentLoaded',(event)=> { 
 	// bad decision, it was better to use componentDidMount,but I have strarted my component as a functional instead of a class component
 		showSlides(slideIndex);
});
let slideIndex=0;
 	let local_styles={
 		textAlign:'center'
 	}
 	let alert_styles={
 		color:'red'
 	}





function plusSlides(n) {

  showSlides(slideIndex + n);
  clearTimeout(timer);
}

function minusSlides(n) {

	if(slideIndex===1){
		slideIndex=slides_len+1;
	}

  showSlides(slideIndex-=2);
  clearTimeout(timer);
}


function currentSlide(n) {
	clearTimeout(timer);
  showSlides(slideIndex = n);
  
}

function showSlides(n) {

let i;

    let slides = document.getElementsByClassName("mySlides");
    
     if(slideIndex===0){slideIndex=slides.length}
     	 if(slideIndex===-1){slideIndex=slides.length-1}
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 0} 
  if (n < 0) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    	if(slideIndex<1){slideIndex=slides.length};
    	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active"; 
    timer=setTimeout(showSlides, 2000);
}


function onHover(){
	clearTimeout(timer);
}
function onLeave(){
	timer=setTimeout(showSlides, 2000);

}


 

 	if( typeof props.data === 'object' && 'slider' in props.data){
let general_number=props.data.slider.length;
	return <div>
	<div className="slideshow-container" onMouseOver={onHover.bind(this)} onMouseLeave={onLeave.bind(this)}>
	{props.data.slider.map((item,i)=>{

		 return <EachSlider hero={item.hero}  number={i+1} general_number={general_number} key={i} text={item.text} image={item.image} />
	})}
<a className="prev"  onClick={minusSlides.bind(this)}>&#10094;</a>
<a className="next"  onClick={plusSlides.bind(this,1)}>&#10095;</a>
  </div>
  
<div style={local_styles}>
{props.data.slider.map((item,i)=>{
return <span className="dot" key={i} onClick={currentSlide.bind(this,i)}></span> 
})
}
 
</div>
</div>

}else{
	return <h1 style={alert_styles}>Wrong format of the data</h1>
}

	
}
export default Slider;