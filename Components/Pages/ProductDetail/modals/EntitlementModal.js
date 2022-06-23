



function EntitlementModal() {
  return (
    


 
    <div className="modal fade" id="entitlementModal" tabIndex="-1" role="dialog" aria-labelledby="entitlementModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="entitlementModalLabel">Entitlements</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Parts and labour coverage for repairs. 
              Enjoy no upfront costs and access to over 700 licensed technicians when you rent from Enercare.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntitlementModal