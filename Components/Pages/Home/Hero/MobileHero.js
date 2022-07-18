import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";

function MobileHero() {
  return (
    <section className="mobile-hero">
      <div className="container">
        <div className=" mobile-hero-content   ">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-6 me-auto my-auto">
                <div className="text-white bg-dark-50 rounded shadow">
                  <div className="p-2">
              
                    <h1 className="mobile-hero-card-title">
                      <strong>
                        <strong>Healthy furnace. Healthy home.</strong>
                      </strong>
                    </h1>
                    <p className="mobile-hero-card-msg">
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

export default MobileHero;
