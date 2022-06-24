
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Covid19Modal from '../../Components/Layout/Shared/Modals/Covid19Modal'
import MissingItems from '../../Components/Pages/Schedule/MissingItems'
import MyProductsAndServices from '../../Components/Pages/Schedule/MyProductsAndServices'
import OtherProductsAndServices from '../../Components/Pages/Schedule/OtherProductsAndServices'

function SelectProduct() {
  return (
   <Layout title={"Schedule Appointment - Select A Product"}>

    <Covid19Modal />
    <MyProductsAndServices />
    <OtherProductsAndServices />
    <MissingItems />



    </Layout>
  )
}

export default SelectProduct