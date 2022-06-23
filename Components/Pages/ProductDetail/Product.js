import Image from "next/image";
import Link from "next/link";
import EntitlementModal from "./modals/EntitlementModal";

function Product() {
    return (


        <>
        <EntitlementModal />
            <section className="bg-faint">
                <div className="container ">







                    <div className="pt-3 pb-4 ">




                        <div className="d-flex" >

                            <div className="me-3">
                                <Image width={50} height={50} src="/images/icons/heating-1.svg" alt="" />
                            </div>


                            <div>
                                <h1 className=" mb-3 pb-2 section-title border-below">
                                    Furnace Coverage
                                </h1>
                                <h3 className="select-production-section-sub-title">
                                    Rental: $31.91 Monthly
                                </h3>
                                <a href="#" data-toggle="modal" data-target="#entitlementModal" className="entitleMent">View Entitlements</a>

                                <div className="mt-3">
                                    <Link href="/">
                                        <a className="btn btn-primary btn-lg rounded-button shadow-sm">
                                            Schedule an Appointment
                                        </a>
                                    </Link>
                                </div>
                            </div>


                        </div>




                    </div>

















                </div>
                <style>
                    {`
            .entitleMent{
                line-height: 24px;
                font-weight: 400px;
                color: black;
                font-style: normal;
            }
            
            `}
                </style>
            </section>










 
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

       
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>



            </>

    );
}

export default Product;
