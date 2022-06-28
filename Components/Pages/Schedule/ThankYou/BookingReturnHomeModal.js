import Link from "next/link"
import { useRouter } from "next/router"



function BookingReturnHomeModal() {

    const router = useRouter()

    const goToHome = () => {
        router.push('/')
    }


    return (



        <div className="modal fade" id="done-booking-return-home" tabIndex="-1" aria-labelledby="done-booking-return-homeLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-lightBlue">
                        <h5 className="modal-title" id="done-booking-return-homeLabel">Thank You!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Thanks for booking with us. Enercare has even more to offer.</p>
                    </div>
                    <div className="modal-footer">


                        <button onClick={goToHome} className="btn btn-primary rounded-button" data-bs-dismiss="modal">
                            Return Home
                        </button>


                    </div>
                </div>
            </div>


            <style>{`

            .modal-footer{
                justify-content: center
            }`

            }</style>

        </div>
    )
}

export default BookingReturnHomeModal