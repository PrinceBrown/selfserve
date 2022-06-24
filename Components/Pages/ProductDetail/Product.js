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
                                <a data-bs-toggle="modal" data-bs-target="#entitlementModal" className="entitleMent">View Entitlements</a>

                                <div className="mt-3">
                                    <Link href="/">
                                        <a data-bs-toggle="modal" data-bs-target="#covid19Modal" className="btn btn-primary btn-lg rounded-button shadow-sm">
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




 

       



            </>

    );
}

export default Product;
