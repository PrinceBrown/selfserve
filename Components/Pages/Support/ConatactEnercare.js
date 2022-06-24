import { AiOutlineHome, AiFillPlusCircle } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"


function ConatactEnercare() {
    return (


        <section className="mb-3">
            <div className="container">
                <div className="border-below ">

                    <h5 className=" mb-3 pb-2 ">
                        <AiFillPlusCircle className="text-primary" /> Contact Us
                    </h5>
                    <div className=" pb-5">
                        <div className="ms-4">
                            <p ><AiOutlineHome /> 7400 Birchmount Ave, Markham, Ontario, M5V 1B7</p>
                            <p><FiPhone /> 416-637-5483</p>
                            <a className="btn btn-primary rounded-button" href="#">
                                <i>Error with your contact info?</i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </section>


    )
}

export default ConatactEnercare