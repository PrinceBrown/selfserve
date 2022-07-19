import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";

function WebHero({ webHeroOfferCtntTitle, webHeroOfferContentMsg }) {
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
                        <strong>{webHeroOfferCtntTitle}</strong>
                      </strong>
                    </h1>
                    <p className="hero-card-msg">{webHeroOfferContentMsg}</p>

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
