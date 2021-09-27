import React from 'react'
import './styles/WalletLogs.css'
function WalletLogs() {
    return (
        <div className="logs">
            <div className="head"> Welcome admin Dashboard !</div>
            <div className="bottom">
                  
            <div className="row quick-action-toolbar">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-header d-block d-md-flex">
                    <h5 className="mb-0">Quick Actions</h5>
                    <p className="ml-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                  </div>
                  <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0">
                           <i className="fa fa-user mr-2"></i> Total Earnings </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0">
                          <i className="fa fa-briefcase"></i>Total Drivers </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-folder mr-2"></i> Total Trips </button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-anchor menu-icon"></i>Total Users </button>
                    </div>
                    
                      <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="fa fa-tripadvisor"></i>Upcoming TripList </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>
        </div>
    )
}

export default WalletLogs
 