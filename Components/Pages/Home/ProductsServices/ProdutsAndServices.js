import Link from "next/link";

function ProdutsAndServices() {
  return (
    <section className="section-bg-faint">
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
                        className="card-image-width-50"
                        src="https://cdn-icons-png.flaticon.com/512/7543/7543514.png"
                        alt=""
                      />
                      <div className="d-flex-column truncate ms-2">
                        <h4 className="truncate">Furnace</h4>
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
                    className="card-image-width-50"
                    src="https://cdn-icons.flaticon.com/png/512/3653/premium/3653384.png?token=exp=1657646013~hmac=a6f5851e94209491a3ff2d5a498e61d7"
                    alt=""
                  />
                  <div className="d-flex-column truncate ms-2">
                    <h4 className="truncate">Air Conditioning</h4>
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
                    className="card-image-width-50"
                    src="https://cdn-icons-png.flaticon.com/512/2756/2756521.png"
                    alt=""
                  />
                  <div className="d-flex-column ms-2 truncate">
                    <h4 className="truncate">Humidifier</h4>
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
                    className="card-image-width-50"
                    src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
                    alt=""
                  />
                  <div className="d-flex-column truncate ms-2">
                    <h4 className="truncate">Water Softener</h4>
                    <p> View Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
     
        .section-bg-faint {
          /* background-color: #F5F2F2; */
          background-color: white;
        }

        .product-service-title {
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
        }

        .card-image-width-50 {
          max-width: 50px;
          max-height: 50px;
        }
      `}</style>
    </section>
  );
}

export default ProdutsAndServices;
