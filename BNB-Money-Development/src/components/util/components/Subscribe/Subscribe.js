import React from 'react'

export default function Subscribe() {
  return (
    <div>
       {/* <!-- subscribe Start --> */}
    <div className="subscribe" id="help">
        <div className="container">
        <h3 className="title">Your Account</h3>
            <div className="row">
                <div className="col-12">
                    <div className="content-box subscribeBg" >
                        <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            
                            <p className="text">Wallet Balance</p>
                            <p><span>0 </span>BNB</p>
                            <p>$ <span>0</span> <br/> <br/><br/></p>
                        </div>
                        <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                         
                            <p className="text">Actual Info</p>
                            

                            <p>Active Plans: <span>0</span></p>
                            <p>Refferal Counts: <span>0</span></p>
                            <p>Claim Cooldown: <span>Disconnected</span></p>
                        </div>

                        <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            
                            <p className="text">BNB to Claim</p>
                            <p><span>0.0000 </span>BNB</p>
                            <p>$ <span>0.00</span></p>
                            <a href="#" className="button button-1">Claim</a>
                        </div>

                        <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <p className="text">Total Staked</p>
                            <p><span>0.0000 </span>BNB</p>
                            <p>$ <span>0.00 </span></p>
                            <a href="#" className="button button-1">History</a>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>

    </div>
  )
}
