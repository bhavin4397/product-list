import React from "react";
import './List.css'




const List = (props) => {
  console.log(props)
 
  return (
    <div>


      <div className="restyle-card">{
        props.getDetails.map((obj, index) => {
          return (<div className="card" style={{ width: '13rem' }} key={index}>
            <img className="card-img-top" src={obj.image} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">{obj.name}</p>
              <p className="card-text">{obj.price}</p>
              <button >View Details</button>


            </div>
          </div>)
        })
      }
      </div>
    </div>

  )
}


export default List;