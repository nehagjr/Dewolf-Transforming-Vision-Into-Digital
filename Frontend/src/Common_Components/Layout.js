import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Layout=()=>{
    return(
        <>
        <h2 style={{backgroundColor:"hsl(210, 29%, 24%)",color:"hsl(0, 0%, 80%)"}}>TOP HEADER</h2>
        <Outlet/>
        <Footer/>

        </>
    )
}
export default Layout;