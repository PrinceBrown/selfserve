import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { truncateString } from "../../../../helpers/truncate";

function MyProperties() {
    return (
        <section className="">
            <div className="container py-5">
                <h2 className="product-service-title">My Properties</h2>

                <div className="row pb-3">
                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <Link href="/product-detail/furnace">
                            <a>
                                <div className="card  shadow">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="align-self-center">
                                                <img
                                                    className="card-image-width-50 float-start"
                                                    src="/images/icons/home.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="truncate  ms-3">
                                                <h5 className="truncate">123 Young St.</h5>
                                                <p>
                                                    <MdChevronRight /> View Details
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card  shadow">
                            <div className="card-body">
                                <div className="d-flex">
                                    <img
                                        className="card-image-width-50"
                                        src="/images/icons/home.png"
                                        alt=""
                                    />
                                    <div className="truncate  ms-2">
                                        <h5 className="truncate">456789 Westwood Ln.</h5>
                                        <p>
                                            <MdChevronRight /> View Details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card  shadow">
                            <div className="card-body">
                                <div className="d-flex">
                                    <img
                                        className="card-image-width-50"
                                        src="/images/icons/home.png"
                                        alt=""
                                    />
                                    <div className="truncate ms-2">
                                        <h5 className="truncate">926 Berverly Hills Park</h5>
                                        <p>
                                            <MdChevronRight /> View Details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 col-xl-3 my-2 ">
                        <div className="card  shadow">
                            <div className="card-body">
                                <div className="d-flex">
                                    <img
                                        className="card-image-width-50"
                                        src="/images/icons/home.png"
                                        alt=""
                                    />
                                    <div className="truncate ms-2">
                                        <h5 className="truncate">7400 Birchmount Road</h5>
                                        <p>
                                            <MdChevronRight /> View Details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <style jsx>{`


        .product-service-title {
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
        }
      `}</style>
        </section>
    );
}

export default MyProperties;
