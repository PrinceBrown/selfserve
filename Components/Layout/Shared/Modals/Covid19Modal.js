
import { AiOutlineWarning } from "react-icons/ai"


function Covid19Modal() {
  return (

    <div className="modal fade" id="covid19Modal" tabIndex="-1" aria-labelledby="covid19ModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h3 className="modal-title text-white" id="covid19ModalLabel"><AiOutlineWarning className="fs-1" /> COVID-19 Alert</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div >
            <img width='100%' src="/images/covid-19/covid-1.png" alt="covid-image" />
          </div>
          <div className="modal-body">


            <h5>Covid-19 Screening</h5>
            <p>Due to the COVID-19 outbreak and to ensure the safety of occupants living at the premises and our technicians, please carefully read and answer the following questions:</p>

            <div className="bg-lightBlue py-2">

              <div className="container">
                <h5>Please answer each question</h5>

                <div className="my-2">
                  <h6>Are you at least 18 years of age and able to answer health and travel related questions on behalf of all occupants living at the premise for which you are looking to schedule an appointment?</h6>


                  <div className="d-flex ">

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          YES
                        </label>
                      </div>
                    </div>

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          NO
                        </label>
                      </div>
                    </div>



                  </div>

                </div>





                

                <div className="my-2">
                  <h6>Have you or any occupants living at the premises traveled outside of Canada in the last 14 days?</h6>


                  <div className="d-flex">

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          YES
                        </label>
                      </div>
                    </div>

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          NO
                        </label>
                      </div>
                    </div>



                  </div>

                </div>






                <div className="my-2">
                  <h6>Are you or any occupants living at the premises currently in self isolation or displaying symptoms such as fever, coughing or shortness of breath or have tested positive for COVID-19?</h6>


                  <div className="d-flex">

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          YES
                        </label>
                      </div>
                    </div>

                    <div className="ms-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                          NO
                        </label>
                      </div>
                    </div>



                  </div>

                </div>





              </div>
            </div>


          </div>



          <div className="modal-footer d-block text-center">

            <p>If you need further assistance, please give us a call</p>
            <h5>1-877-433-2466</h5>

            <div className="mb-3">
              <button type="button" className="btn btn-lg btn-primary rounded-button shadow" data-bs-dismiss="modal">
                CONTINUE TO SCHEDULE APPOINTMENT
              </button>
            </div>

            <button type="button" className="btn btn-lg btn-lightBlue rounded-button" data-bs-dismiss="modal">Cancel</button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Covid19Modal