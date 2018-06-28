import React, { Component } from 'react';
import "./App.css";
import { TablePagination } from 'react-pagination-table';
import sortTable from "./helpers/sortTable";
class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers:['ID','Name','Task','Date','Delete']
    }
    this.getId=this.getId.bind(this);
    
  }

checkClick(){
  //define if the click was on <th> tag
  let self=this;
    window.onclick=function(e){
      if(e.target.tagName==="TH" && e.target.textContent !=='Delete'){
        sortTable(e.target.textContent);
        }
    }
}



 


//add task
 addTask(e){
  let obj={};
  let error='';
  let form=e.target.parentNode;
  let fields=[...form.children];
  fields.forEach((item)=>{
  if(item.id==='add' ){return;}//skip submit button
  if(item.value==''){error="Fill the fields";}  //check if the fields are not empty

  obj[item.id]=item.value;
 

  })

 let data=this.state.data;
 if(!error){
   obj['id']=this.getId();// generate id 
   obj['delete']=<button className='btn btn-danger' onClick={(e) => this.deleteTask(e)}>Delete</button>;
   data.push(obj);//fill the object into the array
}
console.log(this.state.data);
return error ? alert(error) : this.setState({data});
 }


getId(){
 if( typeof document.getElementsByTagName("table")[0]==='undefined'){
  return 1;
 }else{
  return document.getElementsByTagName("table")[0].rows.length;
 }
}


deleteTask(e){
  //check if there are no elements in the table
  if(e.target.parentNode.parentNode.parentNode.parentNode.rows.length===2){
   let data=[];
   this.setState({data});
 }
   e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

}



render(){
  let mystyles={
    marginTop:'10px'
  }
  //check if there is some data
let{data,headers}=this.state;
//build table using react-pagination-table
let tasks=  data.length===0 ?  <p>There is no tasks</p>
:
<TablePagination
           subTitle="Table of Tasks"
           data={ data }
           headers={ headers }
           columns="id.name.task.date.delete"
           perPageItemCount={ 5 }
           totalCount={ data.length }
           arrayOption={[]}
           paginationClassName='pagination'
            
        />

//build DOM
return <div className='container'>
<div className="input-group">

<input type="text" id='name' className="form-control" placeholder="Enter your name" />
<input type="text" id='task' className="form-control" placeholder="Enter your task" />
<input type="date" id='date' className="form-control"  />
<p></p>
<button  className='btn btn-success' style={mystyles} id='add' onClick={(e) => this.addTask(e)}>Add Task</button>
</div>
<p></p>

{tasks}
{this.checkClick()}
</div>

 }
}




            
export default App;
