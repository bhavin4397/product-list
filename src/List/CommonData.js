import './CommonData.css'
import Filter from "../Filter/Filter"
import List from "./List"
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CommonData = (props) => {

  const [getDetails, setDetails] = useState([]) // to store a data from api
  const [getFillData, setFillData] = useState([])
  const [count,setCount]=useState(-1); // to store a count of items 

  useEffect(() => {
    Initial()
    let getCount=getDetails.length;
    setCount(getCount)
    
  }, [])

  useEffect(() => {
    search()  
  }, [props.inputValue])


  // logic to fetch a data 
  async function Initial() {
    let ans = await axios.get("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=")
    
    setDetails([...ans.data.result.products])
    setFillData([...ans.data.result.filters])
    
  }

  // logic write for sorting and counting items 
  function search(){
    if(props.inputValue==""){
      Initial()
      setCount(20)
    }else{
      let updatelist=getDetails.filter((x)=>x.description.includes(props.inputValue))
      setDetails(updatelist)
      let getCount1=updatelist.length;
      setCount(getCount1)
    }
  }




  const onChangehandler=(event)=>{
    if(event.target.value=='new'){
        Initial()
    }
    else if(event.target.value=='high'){
      let highData1=getDetails.sort((a,b)=>parseInt(b.price)-parseInt(a.price))
      setDetails([...highData1])
      
    }else if(event.target.value=='low'){
      let highData2=getDetails.sort((a,b)=>parseInt(a.price)-parseInt(b.price))
      setDetails([...highData2])
      
    } 
  }


  console.log(32, getDetails)
  console.log(44,count)
  return (
    <div className='division'>
      <List getDetails={getDetails} count={count} onChangehandler={onChangehandler}/>
    </div>
  ) 
}
export default CommonData;