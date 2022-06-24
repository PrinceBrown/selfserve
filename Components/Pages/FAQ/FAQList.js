
import {  AiFillPlusCircle } from "react-icons/ai"



function FAQList({title}) {
  return (
    
      <section className="mb-3">
          <div className="container">
              <div className="border-below ">

                  <h5 className=" mb-3 pb-2 ">
                      <AiFillPlusCircle className="text-primary" /> {title}
                  </h5>
                  <div className="  pb-5">
                      <div className="ms-4">
                          <p >There are several reasons why this might happen. 
                            The equipment in your home may not have coverage or be from Enercare, or your protection plan may be ready for renewal. 
                            A quick call can sort out many details, we’re here to help.
                            </p>
                          <a href="tel:+1-877-433-2466" className="btn btn-blue square-button shadow-sm">1-877-433-2466</a>

                      </div>
                  </div>
              </div>


          </div>

      </section>

  )
}

export default FAQList