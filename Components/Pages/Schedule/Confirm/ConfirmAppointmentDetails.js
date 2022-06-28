



function ConfirmAppointmentDetails() {
    return (
        <section className="pb-5 ">
            <div className="container">
                <div className="pt-3">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        Confirm Appointment
                    </h1>

                    <h3>
                        Furnace Service is scheduled for:
                    </h3>


                </div>



                <div className="row mt-4 ">
                    <div className="col-md-6 border-end  my-2">
                        <div>
                            <p>Friday</p>
                            <h4><b>June 26</b></h4>
                            <h5>3:00pm - 7:00pm</h5>
                            <p>61455 Lyman Blvd, Newmarket, ON L3X 1V9</p>
                        </div>
                    </div>


                    <div className="col-md-6  my-2">
                        <div>
                            <h4>Issue: No Heat</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, odit!</p>
                            <h4>Call-ahead Number: </h4>
                            <h4>
                                416-642-2755  <a className='text-blue fs-6'>Edit Number</a>
                            </h4>

                            <p >Would you like to chnage the number we call you at before we arrive?</p>
                        </div>
                    </div>
                </div>





                <div className="row mt-3">
                    <div className="col-md-6 mx-auto">

                        <div className="card">
                            <div className="card-body bg-blue text-white text-center rounded shadow">
                                <h6>The technician will arrive at any time between these times.</h6>
                                <h6>You will be notified when the driver is enroute.</h6>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="text-center my-5">
                    <button data-bs-toggle="modal" data-bs-target="#opt-in-Recommendations" className="btn btn-primary btn-lg rounded-button">
                        Confirm Appointment
                    </button>
                </div>








            </div>
        </section>
    )
}

export default ConfirmAppointmentDetails