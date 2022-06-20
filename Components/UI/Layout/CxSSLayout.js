
import NavBar from "../Nav/NavBar"
import {useEffect} from "react"
import Head from 'next/head'

function CxSSLayout({children, title}) {

    useEffect(() => {
        import("../../../node_modules/bootstrap/dist/js/bootstrap.js");
    }, []);

    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>



            <NavBar />
        </>
    )
}

export default CxSSLayout