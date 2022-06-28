import { useRouter } from "next/router"
import AppFooter from "./FooterArea/AppFooter"
import Legal from "./FooterArea/Legal"



function Footer() {

  const router = useRouter()

 
 const footerPosition  = router.pathname == '/' ? '' : 'fixed-bottom'



  return (
    <div className={footerPosition}>
      <Legal />
      <AppFooter />
    </div>
  )
}

export default Footer