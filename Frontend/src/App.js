import Service from "./User_Component/Services";
import Pricing from "./User_Component/Pricing";
import Navbar from "./User_Component/Navbar";
import Footer from "./User_Component/Footer";
import Home from "./User_Component/Home";
import Contect from "./User_Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Common_Components/Home";
import Layout from "./Common_Components/Layout";
import Login from "./Common_Components/Login";
import Registration from "./Common_Components/Registration";


const App = ()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Layout/>}>  
            <Route index element={<Home/>}/>
               <Route path="/login" element={<Login/>} />
               <Route path="/register" element={<Registration/>} /> 
            </Route>
            
      </Routes>
    </BrowserRouter>    
    </>
  )
}
export default App;