



function EntitlementModal() {
  return (




    <div className="modal fade" id="entitlementModal" tabIndex="-1" aria-labelledby="entitlementModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-lightBlue">
            <h5 className="modal-title" id="entitlementModalLabel">Entitlements</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Parts and labour coverage for repairs. Enjoy no upfront costs and access to over 700 licensed technicians when you rent from Enercare.</p>
          </div>
          <div className="modal-footer d-block text-center">

            <button type="button" className="btn btn-lg btn-primary rounded-button" data-bs-dismiss="modal">Got it!</button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default EntitlementModal