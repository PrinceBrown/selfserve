import { useRouter } from "next/router"
import AppFooter from "./FooterArea/AppFooter"
import Legal from "./FooterArea/Legal"



function Footer() {

  const router = useRouter()


  return (
    <div >
      {/* <Legal /> */}
      <AppFooter />
    </div>
  )
}

export default Footer