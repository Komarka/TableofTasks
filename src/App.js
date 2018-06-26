import React, { Component } from 'react';
import "./App.css";
import Select from './extra/Select/Select';
import smallData from './data/smallData';
import bigData from './data/bigData';
import { TablePagination } from 'react-pagination-table';
class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      data: '',
      headers:''
    };
}
//sending data
	send(e){
let select=e.target.previousSibling.children[1];
let select_value= select.options[select.selectedIndex].value;
let data=this.getData(select_value);
let headers=data.shift();
headers=Object.values(headers);//getting headers for the table

 this.setState({data,headers});
 e.target.parentNode.removeChild(e.target);
  select.parentNode.removeChild(select);


	}

	checkClick(){
		let self=this;
		window.onclick=function(e){
			if(e.target.tagName==="TD"){
				let data=[];
				let index=e.target.parentNode.rowIndex;
                  let table=e.target.parentNode.parentNode.parentNode;
                  let i=[...table.rows[index].cells];
                 i.forEach((item)=>{
                 	data.push(item.textContent);
                 })

                 let result=document.getElementById('result');
                 result.innerHTML=`This row has following values: ${data.join(', ')}`;

							}else if(e.target.tagName==="TH"){

								self.sortTable(e.target.textContent);
							}
		}
	}

	sortTable(name){
		let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		let n='';
		if(name==='Идентификатор'){
			n=0;
		}else if(name==='Название'){
			n=1;
		}else if(name==='Стоимость'){
			n=2;
		}else if(name==='Количество'){
			n=3;
		}
		table = document.getElementsByTagName("table")[0];
  switching = true;
  dir = "asc"; 
 
  while (switching) {
  
    switching = false;
    rows = table.getElementsByTagName("TR");
   
    for (i = 1; i < (rows.length - 1); i++) {
     
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
     
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
     
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
     
      switchcount ++; 
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }

	}


	//getting data from server
	getData(type='s'){
		let data='';
		if(type==='s'){
data=smallData();
		}else if(type==='b'){
			data=bigData();
		}else if(type==='m'){
			data=smallData();
		}

		return data;
	}

	find(event){
let input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = event.target.value;
  table = document.getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
	}

render(){
	console.log(this.state);
let{data,headers}=this.state;
let table='';
if(data !=='' && headers !==''){
	 table= <div>Search:<input type='text' onChange={this.find} />
 <p></p><TablePagination
            
            subTitle="Table for Mauris"
            data={ data }
            headers={ headers }
            columns="id.name.price.quantity"
             perPageItemCount={ 5 }
            totalCount={ data.length }
             arrayOption={[]}
             paginationClassName='pagination'
            
        />
        </div>
}else{
	table=<span></span>
}
	return <div className='hideOverflow'>
 <Select/>
 <button onClick={(e) => this.send(e)}className="btn btn-success">Send</button>

 {table}
 <span id='result'></span>
      {this.checkClick()}
     </div>   
      }
 
}


            
export default App;
