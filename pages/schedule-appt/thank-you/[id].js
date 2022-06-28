import Layout from "../../../Components/Layout/Layout";
import AppointmentScheduled from "../../../Components/Pages/Schedule/ThankYou/AppointmentScheduled";
import BookingReturnHomeModal from "../../../Components/Pages/Schedule/ThankYou/BookingReturnHomeModal";




function ThankYouApptScheduled() {
    return (
        <Layout title={`Thank You - Appointment Scheduled`}>
            <BookingReturnHomeModal />
            <AppointmentScheduled />
            
        </Layout>
    )
}

export default ThankYouApptScheduled