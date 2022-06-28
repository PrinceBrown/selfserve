


 

function AppointmentDataCard() {
  return (

      <div className="row mt-4 ">
          <div className="col-md-6 border-end  my-2">
              <div>
                  <p>Friday</p>
                  <h4><b>June 26</b></h4>
                  <h5>3:00pm - 7:00pm</h5>
                  <p>61455 Lyman Blvd, Newmarket, ON L3X 1V9</p>
              </div>
          </div>


          <div className="col-md-6  my-2">
              <div>
                  <div className="mb-3">
                      <button className="btn btn-lg btn-lightBlue rounded-button shadow">Add To Calendar</button>
                  </div>
                  <h4>
                      Confirmation Number: 34399610-1
                  </h4>

                  <p >You will recieve a confirm email.</p>
              </div>
          </div>
      </div>
  )
}

export default AppointmentDataCard