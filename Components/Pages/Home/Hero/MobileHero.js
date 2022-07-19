import Link from "next/link";
import { AiOutlineSchedule } from "react-icons/ai";
import Image from "next/image";

function MobileHero({ webHeroOfferCtntTitle, webHeroOfferContentMsg }) {
    return (
        <section className="mobile-hero">


            <img width='100%' src={`/images/hero/bg-1.jpeg`} />

            <div className="bg-black">
                <div className="text-white p-2">
                    <h1 className=" mobile-hero-card-title">
                        {webHeroOfferCtntTitle}
                    </h1>
                    {/* <h1 className=" mobile-hero-card-title mt-n20">
                        <strong>Healthy Home.</strong>
                    </h1> */}
                    <p>{webHeroOfferContentMsg}</p>

                    <div className="text-center mb-4">
                        <Link href={"/schedule-appt/select-a-product"}>
                        <a className="btn btn-primary btn-lg rounded-button shadow">
                            <b className="mobile-hero-cta-btn" >Schedule an Appointment</b>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>



            <style jsx>{`
        .mobile-hero-card-title{
            font-size: 2.8rem;
            font-weight: bolder;
            line-height: 38px;
        };
       
        `}</style>

        </section>
    );
}

export default MobileHero;
