import Layout from "../../Components/Layout/Layout";
import Contact from "../../Components/Pages/Account/Contact";
import Password from "../../Components/Pages/Account/Password";
import Profile from "../../Components/Pages/Account/Profile";




function customerID() {
  return (
    <Layout>
        <Profile />
        <Contact />
        <Password />

    </Layout>
  )
}

export default customerID;