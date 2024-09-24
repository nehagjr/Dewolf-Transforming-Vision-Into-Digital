import Service from "./User_Component/Services";
import Pricing from "./User_Component/Pricing";
import Navbar from "./User_Component/Navbar";
import Footer from "./User_Component/Footer";
import Home from "./User_Component/Home";
import Contect from "./User_Component/Contact";

const App = ()=>{
  return(
    <>
   
    <Navbar/>
    <Home/>
    <Service/>
    <Pricing/>
    <Contect/>
    <Footer/>
    
    </>
  )
}
export default App;