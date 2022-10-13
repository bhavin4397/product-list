import './CommonData.css'
import Filter from "../Filter/Filter"
import List from "./List"
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CommonData = () => {

  const [getDetails, setDetails] = useState([])
  const [getFillData, setFillData] = useState([])

  useEffect(() => {
    Initial()
  }, [])


  async function Initial() {
    let ans = await axios.get("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=")
    console.log(ans)
    setDetails([...ans.data.result.products])
    setFillData([...ans.data.result.filters])
  }
  return (
    <div className='division'>
      <Filter getDetails={getFillData} />
      <List getDetails={getDetails} />
    </div>
  ) 
}

export default CommonData;