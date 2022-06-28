
import Layout from '../../../Components/Layout/Layout'
import ConfirmAppointmentDetails from '../../../Components/Pages/Schedule/Confirm/ConfirmAppointmentDetails'
import OptInRecommendationModal from '../../../Components/Pages/Schedule/Confirm/OptInRecommendationModal'


function ConfirmAppointment() {
    return (
        <Layout title={"Confirm Appointment"}>

        <OptInRecommendationModal />
        <ConfirmAppointmentDetails />




        </Layout>
    )
}

export default ConfirmAppointment