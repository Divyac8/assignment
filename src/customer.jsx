import React, { Component } from 'react';
import data from './data.json';
import {Table} from 'react-bootstrap';
class Customer extends Component {
    constructor(props) {
        super(props);
   this.state = { 
        
     }
    }
     
     filterSearch=(e)=> {
         debugger;
        var val = e.target.value;
        var filteredData;
        if(val == ""){
            filteredData = data.details.filter(item=> {
                console.log(item.name)
                return item.name === val;
            })
        }
        
    }
render() { 
return (  
<div>

<select>
    {data.details.map(detail =>
      <option  val={detail.name}>{detail.name}</option>
    )};
  </select>
<button onClick={this.filterSearch}>Search</button>
    <Table striped bordered hover size="sm">
    <thead>
        <tr>
        <th>name</th>
        <th>pizza</th>
        <th>Veggie-Paradise</th>
        <th>burger</th>
        <th>Veg Extravaganza</th>
        <th>Chicken Sausage</th>
        <th>Cheese n Corn</th>
        <th>Farmhouse</th>
        <th>Margherita</th>
        <th>Deluxe Veggie</th>
        <th>Indi Tandoori Paneer</th>
        </tr>
    </thead>
    <tbody>{
    data.details.map((detail) => {

       return <tr>
        {/* <td>{detail.id}</td> */}
        <td>{detail.name}</td>
        <td>{detail.pizza}</td>
        <td>{detail.Veggie}</td>
        <td>{detail.burger}</td>
        <td>{detail.Veg_Extravaganza}</td>
        <td>{detail.Chicken_Sausage}</td>
        <td>{detail.Cheese_n_Corn}</td>
        <td>{detail.Farmhouse}</td>
        <td>{detail.Margherita}</td>
        <td>{detail.Deluxe_Veggie}</td>
        <td>{detail.Indi_Tandoori_Paneer}</td>
        
        </tr>
    })}
        
    </tbody>
    </Table>
</div>
        );
    }
}
 
export default Customer;

