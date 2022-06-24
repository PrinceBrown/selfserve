import Layout from '../../Components/Layout/Layout'
import Covid19Modal from '../../Components/Layout/Shared/Modals/Covid19Modal'
import AppointmentHistory from '../../Components/Pages/ProductDetail/AppointmentHistory'
import EntitlementModal from '../../Components/Pages/ProductDetail/modals/EntitlementModal'
import Product from '../../Components/Pages/ProductDetail/Product'

function CustomerProduct() {
  return (
    <Layout title={`Product Detail`}>

        <Covid19Modal />
        <EntitlementModal />
        <Product />
        <AppointmentHistory />

    </Layout>
  )
}

export default CustomerProduct