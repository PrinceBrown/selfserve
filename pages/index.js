import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Pages/Home/Hero";
import OtherProductsAndServices from "../Components/Pages/Home/ProductsServices/OtherProductsAndServices";
import ProdutsAndServices from "../Components/Pages/Home/ProductsServices/ProdutsAndServices";


export default function Home() {
  return (

    <Layout title="Home Page">
      <Hero />
      <ProdutsAndServices />
      <OtherProductsAndServices />


    </Layout>

  )
}
