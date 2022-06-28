import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";

function Hero() {
  return (
    <>
      <section className="web-hero">
        <div className="container">
          <div className=" hero-content   ">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-6 me-auto my-auto">
                  <div className="text-white bg-dark-50 rounded shadow">
                    <div className="p-2 item">
                      {/* Line Above */}
                      {/* <div className="mb-4 hero-title-line"></div>

                      <p className="hero-sub-title">
                        <strong>Decades of Experience.</strong>
                      </p> */}
                      <h1 className="hero-card-title">
                        <strong>
                          <strong>Healthy furnace. Healthy home.</strong>
                        </strong>
                      </h1>
                      <p className="hero-card-msg">
                        Some sort of message here informing Customer of getting
                        some Maintenace done on their Furnace. Whether you need
                        emergency HVAC repairs or are looking to replace old
                        equipment, call on the experts at Enercare. We’re a
                        proudly Canadian company offering leading solutions for
                        heating.
                      </p>

                      <Link href={"/schedule-appt/select-a-product"}>
                        <a className="btn btn-lg  btn-primary rounded-button shadow">
                          <b>
                            <AiOutlineSchedule /> Schedule Appointment{" "}
                          </b>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .web-hero {
          position: relative;
          min-width: 100vw;
          min-height: 60vh;
        }

        .web-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://www.enercare.ca/wp-content/uploads/2022/05/Tech-with-AC-Masthead-2-scaled.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          filter: brightness(100%);
        }

        .hero-content {
          position: relative;
          // min-height: 70vh;
          top: 5rem;
        }

        .bg-dark-50 {
          background: #000000ab;
        }

        .hero-title-line {
          border: 3px solid white;
          width: 30%;
        }

        .hero-sub-title {
          font-size: "24px";
        }
        .hero-card-title {
          font-style: normal;
          font-weight: 800;
          font-size: 48px;
          line-height: 64px;
          font-size: "48px";
        }

        .hero-card-msg {
          font-size: normal;
          line-height: 22px;
        }

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          .web-hero {
            // min-height: 90vh;
            display: none;
          }
        }

   
      `}</style>
    </>
  );
}

export default Hero;
