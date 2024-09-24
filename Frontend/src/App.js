import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Common_Components/Services";
import Pricing from "./Common_Components/Pricing";
import Navbar from "./Common_Components/Navbar";
import Footer from "./Common_Components/Footer";
import Home from "./Common_Components/Home";
import Contect from "./Common_Components/Contact";
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