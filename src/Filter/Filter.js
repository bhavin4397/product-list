import React from "react";
import './Filter.css'

const Filter = (props) => {
    console.log(4, props)
    return (
        <div className="filter-box">
            <h3>FILTER</h3>
            <div className="dropdown">
                {
                    props.getDetails.map((obj, index) => {
                        
                        return (
                            <div className="butt-single" key={index}>
                                <button className="btn btn-light  dropdown-toggle butt-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {obj.filter_lable}
                                </button>
                                


                            </div>
                        )
                    })
                }
            </div>

        </div>


    )
}

export default Filter;