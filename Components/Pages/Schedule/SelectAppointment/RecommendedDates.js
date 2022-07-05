
import Link from "next/link";
import { useRouter } from "next/router"
function RecommendedDates() {

    const router = useRouter()


    const goToReview = () => {
        router.push('/schedule-appt/confirm/')
    }


    return (
        <section className="pb-5 vh-100">
            <div className="container">
                <div className="pt-3">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        Select Appointment
                    </h1>

                    <h3 className="select-production-section-sub-title">
                        Next Recommended Appointments
                    </h3>
                </div>

                <div className="row">

                    <div onClick={goToReview} className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card bg-faint shadow-sm" >
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img className="services-img" src="../styles/images/icons/furnace-1.svg" alt="" />
                                    <div className=" ms-3">
                                        <p>Today</p>
                                        <h4 className="shorthand-date text-primary">June 17</h4>
                                        <p>1:00pm - 5:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card bg-faint shadow-sm" >
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img className="services-img" src="../styles/images/icons/furnace-1.svg" alt="" />
                                    <div className=" ms-3">
                                        <p>Today</p>
                                        <h4 className="shorthand-date text-primary">June 17</h4>
                                        <p>1:00pm - 5:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card bg-faint shadow-sm" >
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img className="services-img" src="../styles/images/icons/furnace-1.svg" alt="" />
                                    <div className=" ms-3">
                                        <p>Today</p>
                                        <h4 className="shorthand-date text-primary">June 17</h4>
                                        <p>1:00pm - 5:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>






                </div>


                <div className="row">
                    <div className="col-md-12 mt-3">

                        <Link href='/schedule-appt/calendar/choose-date'>
                            <a className="button btn btn-primary btn-lg rounded-button">
                                See Other Dates
                            </a>
                        </Link>
                    </div>
                </div>













            </div>










            <style jsx>{`

        .shorthand-date {
          margin-top: -10px;
        }

      `}</style>
        </section>
    );
}

export default RecommendedDates;
