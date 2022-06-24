function MyProductsAndServices() {
  return ( 
    <section className="pb-5 bg-faint">
      <div className="container">
        <div className="pt-3">
          <h1 className=" mb-3 pb-2 section-title border-below">
            Select a Product
          </h1>
          <h3 className="select-production-section-sub-title">
            My Products and Services
          </h3>

          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-3 my-2">
              <div className="card  shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      className="services-img"
                      src="../styles/images/icons/furnace-1.svg"
                      alt=""
                    />
                    <div className=" ms-3">
                      <h4>Furnace</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 my-2">
              <div className="card  shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      className="services-img"
                      src="../styles/images/icons/air-condition-1.svg"
                      alt=""
                    />
                    <div className=" ms-3">
                      <h4>Air Condition</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 my-2">
              <div className="card  shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      className="services-img"
                      src="https://cdn-icons-png.flaticon.com/512/3166/3166647.png"
                      alt=""
                    />
                    <div className=" ms-3">
                      <h4>Humidifier</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 my-2">
              <div className="card  shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      className="services-img"
                      src="https://www.sanjuanco.com/ImageRepository/Document?documentID=18674"
                      alt=""
                    />
                    <div className=" ms-3">
                      <h4>Water Softener</h4>
                    </div>
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

        .services-img {
          max-width: 50px;
          max-height: 50px;
        }
      `}</style>
    </section>
  );
}

export default MyProductsAndServices;
