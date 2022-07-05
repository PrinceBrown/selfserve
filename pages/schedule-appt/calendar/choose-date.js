
import Layout from '../../../Components/Layout/Layout'
import ApptProgressBar from '../../../Components/Layout/Shared/UI/ApptProgressBar'
import ApptCalender from '../../../Components/Pages/Schedule/SelectAppointment/ApptCalender'

function ChooseCalendarDate() {
    return (
        <Layout title={"Select Date & Time"}>
            <ApptProgressBar />
            <ApptCalender />



        </Layout>
    )
}

export default ChooseCalendarDate