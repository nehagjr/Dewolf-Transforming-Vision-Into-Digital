import Service from "./User_component/Services";
import Pricing from "./User_component/Pricing";
import Navbar from "./User_component/Navbar";
import Footer from "./User_component/Footer";
import Home from "./User_component/Home";
import Contect from "./User_component/Contact";
import Team from "./User_component/Team";


const App = ()=>{
  return(
    <>
   
    <Navbar/>
    <Home/>
    <Service/>
    <Pricing/>
    <Contect/>
    <Footer/>
    <Team/>
    
    </>
  )
}
export default App;