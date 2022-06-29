
import {useEffect} from "react"
import NavBar from "./Shared/Navigations/NavBar"
import Header from "./Shared/Headers/Header";
import Footer from "./Shared/Footers/Footer";
import Script from "next/script";




function Layout({children, title}) {

 
    useEffect(() => {
        import("/node_modules/bootstrap/dist/js/bootstrap.js");

    }, []);


    
    return (
        <>
           <Header title={title} />
            <NavBar />
         
                {children}
           
            <Footer />
        </>
    )
}

export default Layout