function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-md-12 col-lg-10 col-xl-6 col-sm-12 ">
                <div className="card hero-card shadow-lg">
                  <div className="card-body">
                    <h1 className="hero-card-title">
                      Healthy furnace, healthy home.
                    </h1>

                    <p className="hero-card-msg">
                      Whether you need emergency HVAC repairs or are looking to
                      replace old equipment, call on the experts at Enercare.
                      We’re a proudly Canadian company offering leading
                      solutions and services for heating, cooling, hot water,
                      water treatment, plumbing, electrical, duct cleaning and
                      more.
                    </p>

                    <p className="hero-learn-more"> Learn More*</p>

                    <button className="btn btn-primary btn-lg hero-button">
                      <b>Schedule an Appointment</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          position: relative;
          min-width: 100vw;
          min-height: 85vh;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://axonu.com/wp-content/uploads/2011/09/o-HAPPY-FAMILY-facebook.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          filter: brightness(60%);
        }

        .hero-content {
          position: absolute;
          color: white;
          top: 35%;
          /* Not part of requirements*/
          /* left: 20%;  */
        }

        .hero-card {
          padding: 20px;
          border-radius: 10px;
          opacity: 0.985;
          background-color: #000000cf;
          height: max-content;
        }

        .hero-card-title {
          font-style: normal;
          font-weight: 800;
          font-size: 48px;
          line-height: 64px;
        }

        .hero-card-msg {
          font-size: normal;
          line-height: 22px;
        }

        .hero-learn-more {
          font-weight: 400;
        }

        .hero-button {
          border-radius: 30px;
        }

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          .hero {
            min-height: 90vh;
          }

          .hero::before {
            background: url("https://www.secureproinc.com/wp-content/uploads/2018/11/happy-family-home-security.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }

          .hero-content {
            top: 15vh;
            left: 0%; /* Not part of requirements*/
          }

          .hero-card-title {
            font-size: 40px;
            line-height: 60px;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
