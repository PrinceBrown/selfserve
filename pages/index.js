import Layout from "../Components/Layout/Layout";
import HeroLayout from "../Components/Pages/Home/Hero/HeroLayout";
import OtherProductsAndServices from "../Components/Pages/Home/ProductsServices/OtherProductsAndServices";
import ProdutsAndServices from "../Components/Pages/Home/ProductsServices/ProdutsAndServices";
import MyProperties from "../Components/Pages/Home/Properties/MyProperties";




import { createClient } from 'contentful'


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  // Get Items From Contentful Space
  const res = await client.getEntries({ content_type: 'offerHvac' })

  // console.log(res.items)

  return {
    props: {
      offers: res.items
    }
  }

}


export default function Home({offers}) {


  console.log("My Offers", offers)



  return (

    <Layout title="Home Page">

      <HeroLayout />
      <MyProperties />
      <ProdutsAndServices />
      <OtherProductsAndServices />


    </Layout>

  )
}
