
 import React from 'react';
const Select=(props)=>{
return <div className="form-group">
  <label htmlFor="sel1">Select list:</label>
  <select className="form-control" id="sel1">
    <option value="s">Small</option>
    <option value="b">Big</option>
    <option value="m">My</option>
  </select>
</div>
 }
 export default Select;