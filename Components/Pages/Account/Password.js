import { AiOutlineHome, AiFillPlusCircle } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"



function Password() {
    return (
        <section className="pb-5">
            <div className="container mb-5  pb-5">
                <div className="border-below ">

                    <h5 className=" mb-3 pb-2 ">
                        <AiFillPlusCircle className="text-primary" /> Change My Password
                    </h5>
                    <div className=" pb-5">
                        <div className="ms-4">

                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <label htmlFor="verifyExistingPassword">Verify your current password:</label>
                                    <input type="password" className="form-control" />
                                </div>

                            </div>





                            <div className="row mt-4">

                                <div className="col-md-4 ">
                                    <label className="fw-light" htmlFor="createNewPassword">Create a new password:</label>
                                    <input type="password" className="form-control" placeholder="New Password" />
                                </div>
                                <div className="col-md-4 ">
                                    <label htmlFor="createNewPassword">Create a new password:</label>
                                    <input type="password" className="form-control" placeholder="Confirm New Password" />
                                </div>

                            </div>


                            <div className="mt-3">
                                <button className="btn btn-primary rounded-button ">Save New Password</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Password