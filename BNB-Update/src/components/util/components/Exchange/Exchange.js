import React from 'react'
import Rdot1 from "../../assets/img/rdot-1.png"
import Rdot2 from "../../assets/img/rdot-3.png"
import BtcImg from "../../assets/img/btc.png"
import MyChart from '../Custom/MyChart'

export default function Exchange() {
  return (
    <div>
       {/* <!-- Rates Start --> */}
    <div className="rates ratesBg" >
        <img src={Rdot1} alt="" className="rdot-1" />
        <img src={Rdot2} alt="" className="rdot-3" />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                    <div className="section-head">
                      
                        <h2 className="title">Restrictions</h2>
                        <p className="text">
                        <p className="text">
                        Claim: every 6 hours</p>

                        <p className="text">Max Claim: 5 BNB</p>

                        <p className="text">Excess dividends are sent back to the user's account available for the next withdrawal.
                        </p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-12">
                    <div className="main-chart">
                        <div className="chart-box">

                            <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div className="item">
                                    <h3 className="subtitle">BNB to Claim</h3>
                                    <a href="#" className="link">BUSD Profit</a>
                                </div>
                                
                                <div className="item">
                                    <h4 className="subtitle">9357.79 BUSD </h4>
                                    <h5 className="subtitle">$<span>6757</span></h5>
                                </div>
                                <div className="item">
                                <button className="button-1">Reinvest</button>
                               
                                </div>
                                <div className="item">
                                <button className="button-1">Claim</button>
                               
                                </div>
                            </div>
                            <div className="contentbox-2 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div className="item-box">
                                    <h3 className="subtitle"> 9266.92 BUSD | </h3>
                                    <a href="#" className="link">Total Stake Volume</a>
                                </div>
                                
                                <div className="item-box">
                                    <h3 className="subtitle"> 1001.90 BUSD | </h3>
                                    <a href="#" className="link">Insurance Pool balance</a>
                                </div>
                                <div className="item-box">
                                    <h3 className="subtitle two"> 8932.61 BUSD | </h3>
                                    <a href="#" className="link">Total Claimed</a>
                                </div>
                            </div>
                            {/* <div className="chart wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <div id="chart">
                                    <div id="timeline-chart"></div>
                                </div>
                            </div> */}
                            <MyChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
