import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";

function WebHero() {
  return (
    <section className="web-hero">
      <div className="container">
        <div className=" web-hero-content   ">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-7  me-auto my-auto">
                <div className="text-white bg-dark-50 p-3 rounded shadow">
                  <div className="p-2">
                    {/* Line Above */}
                    {/* <div className="mb-4 hero-title-line"></div>

                      <p className="hero-sub-title">
                        <strong>Decades of Experience.</strong>
                      </p> */}
                    <h1 className="web-hero-card-title">
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
  );
}

export default WebHero;
