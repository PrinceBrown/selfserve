


import React from 'react'

function OptInRecommendationModal() {
    return (



        <div className="modal fade" id="opt-in-Recommendations" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-lightBlue">
                        <h5 className="modal-title " id="opt-in-RecommendationsLabel">
                            May we recommend products or services?
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Our technician may recommend products or services based on what they find during their visit. Are you OK with them sharing additional options with you when in your home?</p>
                    </div>
                    <div className="modal-footer">
                        <div classNameName="text-center">
                            <button type="button" className="btn btn-lg btn-secondary rounded-button text-white mx-2" data-bs-dismiss="modal">NO</button>
                            <button type="button" className="btn btn-lg btn-primary rounded-button mx-2" data-bs-dismiss="modal">YES</button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`

            .modal-footer{
                justify-content: center
            }`

            }</style>
        </div>
    )
}

export default OptInRecommendationModal