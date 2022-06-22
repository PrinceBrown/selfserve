
import NavBar from "../Shared/Navigation/NavBar"
import {useEffect} from "react"
import Header from "../Shared/Header/Header";




function Layout({children, title}) {

    useEffect(() => {
        import("../../node_modules/bootstrap/dist/js/bootstrap.js");
    }, []);

    
    return (
        <>
           <Header title={title} />
            <NavBar />
            {children}
        </>
    )
}

export default Layout