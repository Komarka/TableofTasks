import React, { Component } from 'react';
import Slider from "./Slider/Slider";
import './App.css';

class App extends Component {
render(){
  let Feed = {
slider:[
{
"hero":"https://placeimg.com/640/480/animals",
"text":"Animals are here.",
"image":"https://placeimg.com/150/150/animals/sepia"
},
{
"hero":"https://placeimg.com/640/480/people",
"text":"People are here.",
"image":"https://placeimg.com/150/150/people/sepia"
},
{
"hero":"https://placeimg.com/640/480/tech",
"text":"Tech is here.",
"image":"https://placeimg.com/150/150/tech/sepia"
}
]
}
  return <Slider data={Feed} />

}

 }

            
export default App;
