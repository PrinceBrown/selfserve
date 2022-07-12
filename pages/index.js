import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Pages/Home/Hero";
import OtherProductsAndServices from "../Components/Pages/Home/ProductsServices/OtherProductsAndServices";
import ProdutsAndServices from "../Components/Pages/Home/ProductsServices/ProdutsAndServices";
import MyProperties from "../Components/Pages/Home/Properties/MyProperties";


export default function Home() {
  return (

    <Layout title="Home Page">
      <Hero />
      <MyProperties />
      <ProdutsAndServices />
      <OtherProductsAndServices />


    </Layout>

  )
}
