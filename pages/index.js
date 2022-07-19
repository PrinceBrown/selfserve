import Layout from "../Components/Layout/Layout";
import HeroLayout from "../Components/Pages/Home/Hero/HeroLayout";
import OtherProductsAndServices from "../Components/Pages/Home/ProductsServices/OtherProductsAndServices";
import ProdutsAndServices from "../Components/Pages/Home/ProductsServices/ProdutsAndServices";
import MyProperties from "../Components/Pages/Home/Properties/MyProperties";


export default function Home() {
  return (

    <Layout title="Home Page">
      <HeroLayout />
      <MyProperties />
      <ProdutsAndServices />
      <OtherProductsAndServices />


    </Layout>

  )
}
