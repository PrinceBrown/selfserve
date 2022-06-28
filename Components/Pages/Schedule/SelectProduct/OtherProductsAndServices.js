function OtherProductsAndServices() {
  return (
    <section>
      <div className="container my-3">
        <h3 className="sub-title">Available Products and Services</h3>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-3 my-2">
            <div className="card  shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    className="services-img"
                    src="../styles/images/icons/plumbing-1.svg"
                    alt=""
                  />
                  <div className=" ms-3">
                    <h4>Plumbing</h4>
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
                    src="../styles/images/icons/electrical-1.svg"
                    alt=""
                  />
                  <div className=" ms-3">
                    <h4>Electrical</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-below mt-3"></div>
      </div>

      <style jsx>{`
        .sub-title {
          color: #000000;
          font-weight: 500;
          font-size: 30px;
          line-height: 36px;
        }
      `}</style>
    </section>
  );
}

export default OtherProductsAndServices;
