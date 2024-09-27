import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Common_Components/Home";
import Layout from "./Common_Components/Layout";
import Login from "./Common_Components/Login";
import Registration from "./Common_Components/Registration";
import Navbar from "./Admin_component/Navbar";


const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Layout/>}>  
            <Route index element={<Home/>}/>
               <Route path="/login" element={<Login/>} />
               <Route path="/register" element={<Registration/>} /> 
          
            <Route path="admin/" element={<Navbar/>}>
            
            </Route>
            </Route>  

      </Routes>
    </BrowserRouter>    
    </>
  )
}
export default App;
