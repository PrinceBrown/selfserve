import Link from "next/link";

function ProdutsAndServices() {
  return (
    <section className="services-bg">
      <div className="container py-5">
        <h2 className="product-service-title">My Products & Services</h2>

        <div className="row pb-3">


          <div className="col-md-6 col-lg-6 col-xl-3 my-2 mx-auto">
            <Link href="/product-detail/furnace">
              <a>
                <div className="card  shadow">
                  <div className="card-body">
                    <div className="d-flex">
                      <img
                        className="services-img"
                        src="./styles/images/icons/furnace-1.svg"
                        alt=""
                      />
                      <div className="d-flex-column ms-2">
                        <h4>Furnace</h4>
                        <p>View Details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>



          <div className="col-md-6 col-lg-6 col-xl-3 my-2 mx-auto">
            <div className="card  shadow">
              <div className="card-body">
                <div className="d-flex">
                  <img
                    className="services-img"
                    src="./styles/images/icons/air-condition-1.svg"
                    alt=""
                  />
                  <div className="d-flex-column ms-2">
                    <h4>Air Condition</h4>
                    <p> View Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 my-2 mx-auto">
            <div className="card  shadow">
              <div className="card-body">
                <div className="d-flex">
                  <img
                    className="services-img"
                    src="https://cdn-icons-png.flaticon.com/512/3166/3166647.png"
                    alt=""
                  />
                  <div className="d-flex-column ms-2">
                    <h4>Humidifier</h4>
                    <p>View Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 my-2 mx-auto">
            <div className="card  shadow">
              <div className="card-body">
                <div className="d-flex">
                  <img
                    className="services-img"
                    src="https://www.sanjuanco.com/ImageRepository/Document?documentID=18674"
                    alt=""
                  />
                  <div className="d-flex-column ms-2">
                    <h4>Water Softener</h4>
                    <p> View Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
     
        .services-bg {
          /* background-color: #F5F2F2; */
          background-color: white;
        }

        .product-service-title {
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
        }

        .services-img {
          max-width: 50px;
          max-height: 50px;
        }
      `}</style>
    </section>
  );
}

export default ProdutsAndServices;
