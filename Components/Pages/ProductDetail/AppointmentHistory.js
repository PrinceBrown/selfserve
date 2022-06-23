import Image from "next/image"



function AppointmentHistory() {
    return (
        <section className="my-5">
            <div className="container">

                <div className="d-flex">
                    <div className="me-3">
                        <Image width={50} height={50} src="/images/icons/heating-1.svg" alt="" />
                    </div>

                    <div>
                        <h2>Past Appointments</h2>

                        <div className="my-2 border-bottom">
                            <h6>May 2, 2022:</h6>
                            <p>Service Call. You saved $99.00</p>
                        </div>

             
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppointmentHistory