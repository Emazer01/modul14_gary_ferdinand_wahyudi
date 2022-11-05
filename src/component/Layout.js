import { Outlet } from "react-router-dom";
import Title from "./Title";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            <Title />
            <Outlet />
            <Footer />
        </div>
    )
 }

 export default Layout