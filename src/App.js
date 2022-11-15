import { useState } from 'react';
import Navbar from './Navbar/Navbar';

import Wbc from './WBC/Wbc';
import Login from './Login/Login';
import CommonData from './List/CommonData';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Kurtas from './Kurta&Sets/Kurta&Sets';
import Saree from './Saree/Saree';
import Western from './Western/Western';
import Data from './List/Data';

function App() {
    const [inputValue,setInputValue]=useState("")
    const onChangehandler=(event)=>{
        setInputValue(event.target.value)
        
    }

  return (    
    <div>
      <BrowserRouter>
      <Navbar onChangehandler={onChangehandler}/>
      <Routes>
        <Route path='' element={<Wbc/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/CommonData' element={<CommonData inputValue={inputValue}/>}/>
        <Route path='/CommonData/:id' element={<Data/>}/>
        <Route path='/Kurta' element={<Kurtas/>}/>
        <Route path='/Saree' element={<Saree/>}/>
        <Route path='/Western' element={<Western/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
