import Navbar from './Navbar/Navbar';

import Wbc from './WBC/Wbc';
import Login from './Login/Login';
import CommonData from './List/CommonData';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Kurtas from './Kurta&Sets/Kurta&Sets';
import Saree from './Saree/Saree';
import Western from './Western/Western';

function App() {

  return (    
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Wbc/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/CommonData' element={<CommonData/>}/>
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
