import React from 'react'
import TransferImg from "../../assets/img/transfer.png"
import TransferImg1 from "../../assets/img/transfer-1.png"
import TransferImg2 from "../../assets/img/transfer-2.png"
import TransferImg3 from "../../assets/img/transfer-3.png"
import TransferImg4 from "../../assets/img/transfer-4.png"
import TransferImg5 from "../../assets/img/transfer-5.png"


export default function Transfer() {
    return (
        <div>
            {/* <!-- Effortless Start --> */}
            <div className="effortless" id="features">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-12">
                            <div className="section-head wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                <h4 className="lasthead">Why choose BUSD Profit?</h4>

                            </div>
                            <h2 className="title">Referral Program
                            </h2>
                            <p>Stake atleast once to receive referral rewards!
                            </p>
                        </div>
                        <div className="subscribe" id="" style={{marginTop:'80px', marginBottom:'80px'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="content-box subscribeBg" >
                                            <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                                <h3 className="title">Total Rewards</h3>
                                                <h4 className="text"><label>0.00 </label>BNB</h4>
                                                <p className="text">$ <label>0.00 </label></p>
                                            </div>
                                            <div className="input-box wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">

                                                                <input type="text" placeholder="Your referal link" className="form-control" />
                                                                <button className="button-1">Copy</button>
                                                                <p className="text">Note: reflink will not function until you make your first investment</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-xl-6">
                                <ul className="list">
                                    <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <div className="thumb"></div>
                                        <span>
                                            <h4 className="text level">Level 1 <br /></h4>
                                            <h2>7% <br /> </h2>
                                            <p><span>0</span> Refferal</p>
                                        </span>
                                    </li>
                                    <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <div className="thumb"></div>
                                        <span>
                                            <h4 className="text level">Level 2 <br /></h4>
                                            <h2>3% <br /> </h2>
                                            <p><span>0</span> Refferal</p>
                                        </span>
                                    </li>
                                    <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <div className="thumb"></div>
                                        <span>
                                            <h4 className="text level">Level 3 <br /></h4>
                                            <h2>2% <br /> </h2>
                                            <p><span>0</span> Refferal</p>
                                        </span>
                                    </li>
                                    <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <div className="thumb"></div>
                                        <span>
                                            <h4 className="text level">Level 4 <br /></h4>
                                            <h2>1% <br /> </h2>
                                            <p><span>0</span> Refferal</p>
                                        </span>
                                    </li>
                                    <li className="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <div className="thumb"></div>
                                        <span>
                                            <h4 className="text level">Level 5 <br /></h4>
                                            <h2>0.5% <br /> </h2>
                                            <p><span>0</span> Refferal</p>
                                        </span>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-xl-6 d-none d-xl-block">
                                <div className="pic">
                                    <img src={TransferImg} alt="" className="transfer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
