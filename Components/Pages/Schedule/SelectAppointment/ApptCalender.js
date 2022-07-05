
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';


function ApptCalender() {

    const router = useRouter()

    const [dateValue, setDateValue] = useState();
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        setDateValue(new Date())


    }, [])


    isLoaded && console.log("CALENDAR VALUE: ", dateValue)




    const goToReview = () => {
        router.push('/schedule-appt/confirm/')
    }


    return (
        <section className="pb-5 vh-100">


            <div className="container">


                <div className="pt-3">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        Available Appointment
                    </h1>

                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="">
                                Select a Date and Time
                            </h3>
                        </div>

                        <div className="col-md-6 text-end">
                            <h6 className="">
                                Need Help? 1-855-642-8607
                            </h6>
                        </div>
                    </div>
                </div>









                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h4 className="border rounded-3 bg-blue p-3 text-white">
                            <b>Friday, June 26</b>
                        </h4>
                        {isLoaded &&
                            <Calendar
                                className='w-100 shadow-sm rounded'
                                activeStartDate={dateValue}
                                onChange={setDateValue}
                                value={dateValue} />
                        }
                    </div>
                    <div className="col-md-6 mb-3">
                        <h4 className="border rounded-3 bg-blue p-3 text-white">
                            <b>Friday, June 26</b>
                        </h4>
                        <h4 className="border rounded-3  p-3 mb-3">
                            <b>1:00pm to 5:00pm</b>
                        </h4>
                        <h4 className="border rounded-3  p-3 mb-3 ">
                            <b>2:00pm to 6:00pm</b>
                        </h4>
                        <h4 className="border rounded-3  p-3  mb-3">
                            <b>5:00pm to 10:00pm</b>
                        </h4>
                        <h4 className="border rounded-3  p-3 mb-3">
                            <b>5:00pm to 10:00pm</b>
                        </h4>
                        <h4 className="border rounded-3  p-3 mb-3 ">
                            <b>5:00pm to 10:00pm</b>
                        </h4>
                    </div>
                </div>







            </div>










            <style jsx>{`

        .react-calendar button {
            border-radius: 15px !important;
        };
        

      `}</style>
        </section>
    );
}

export default ApptCalender;
