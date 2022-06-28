import AppointmentDataCard from "./AppointmentDataCard"
import WhatToKnowCard from "./WhatToKnowCard"






function AppointmentScheduled() {
    return (
        <section className="pb-5 ">
            <div className="container">
                <div className="pt-3">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        Appointment Scheduled
                    </h1>

                    <h3>
                        Furnace Service is scheduled for:
                    </h3>


                </div>




                <AppointmentDataCard />



                <WhatToKnowCard />



                <div className="text-center my-5">
                    <button className="btn btn-primary btn-lg rounded-button" data-bs-toggle="modal" data-bs-target="#done-booking-return-home">
                        Continue
                    </button>
                </div>








            </div>
        </section>
    )
}

export default AppointmentScheduled