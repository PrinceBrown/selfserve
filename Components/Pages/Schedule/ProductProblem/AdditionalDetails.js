
import {useRouter} from "next/router"



 
function AdditionalDetails() {

  const router = useRouter()

  const goToRecommededDates = () => {
    router.push('/schedule-appt/calendar/recommended-dates')
  }


  return (
    <section className="pb-5 bg-faint">
      <div className="container">
        <div className="py-3">
          <h3>Additional Details</h3>
          <textarea  placeholder="Optional" rows="5" className="form-control"></textarea>
         <div className="m-2 text-center">
            <button onClick={goToRecommededDates} className="btn btn-lg btn-primary rounded-button">Continue</button>
         </div>
        </div>
        </div>
        </section>
  )
}

export default AdditionalDetails