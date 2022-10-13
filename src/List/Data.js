import React,{useEffect} from "react";
import {useLocation} from 'react-router-dom'

const Data=()=>{

    const {location} =useLocation()

    useEffect(()=>{
        console.log(location)
    },[])
    
    return(
        <div>
            Hello World!
        </div>
    )
}

export default Data;