import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout=()=>{
    return(
        <>
        <h1 style={{backgroundColor:"hsl(210, 29%, 24%)",color:"hsl(0, 0%, 80%)"}}>TOP HEADER</h1>
        <Outlet/>
        <Footer/>

        </>
    )
}
export default Layout;