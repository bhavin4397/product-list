import React from "react";
import { NavLink } from "react-router-dom";
import './List.css'



const List = (props) => {
      console.log(123,props.getDetails)
 
  return (
    <div className="container-fluid">
      
      <div className="sortSection">
        <h5 className="count">{props.count} Items</h5>
        <select className="sort" onChange={props.onChangehandler}>
          <option value={'new'}>Newest</option>
          <option value={'high'}>Price (High to Low)</option>
          <option value={'low'}>Price (Low to High)</option>
        </select>
      </div>

      <div className="restyle-card">{
        props.getDetails.map((obj, index) => {
          return (<div className="card" style={{ width: '13rem' }} key={index}>
            <img className="card-img-top" src={obj.image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{obj.name}</p>
              <p className="card-text"><b>₹.</b> {obj.price}</p>
              <NavLink to={`/CommonData/${index}`}><button className="btn btn-outline-secondary">View Details</button></NavLink>


            </div>
          </div>)
        })
      }
      </div>
    </div>

  )

}


export default List;