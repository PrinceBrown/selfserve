
import {useEffect} from "react"
import NavBar from "./Shared/Navigations/NavBar"
import Header from "./Shared/Headers/Header";
import Footer from "./Shared/Footers/Footer";
import Script from "next/script";




function Layout({children, title}) {


    // useEffect(() => {
    //     import("/node_modules/@popperjs/core/dist/umd/popper.min.js");

    // }, []);

    // useEffect(() => {
    //     import("/node_modules/bootstrap/dist/js/bootstrap.js");

    // }, []);


    
    return (
        <>
           <Header title={title} />
            <NavBar />
            {children}
            <Footer />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
        </>
    )
}

export default Layout