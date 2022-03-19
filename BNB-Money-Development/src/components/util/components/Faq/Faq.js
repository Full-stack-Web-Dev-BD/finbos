import React from 'react'
import FaqImg from "../../assets/img/faq.png"
import Fdot1 from "../../assets/img/fdot-1.png"
import Fdot2 from "../../assets/img/fdot-2.png"
import Fdot3 from "../../assets/img/fdot-3.png"
import FaqIcon from "../../assets/img/faq-icon.png"

export default function Faq() {
    return (
        <div>
            <div className="faq" id="faq">
                <img src={Fdot1} alt="" className="fdot-1" />
                <img src={Fdot2} alt="" className="fdot-2" />
                <img src={Fdot3} alt="" className="fdot-3" />
                {/* <div className="coin"> <img src={FaqIcon} alt="" /> </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="section-head">
                                <h4 className="lasthead">How safe is it?</h4>
                                <h2 className="title">It's Really Easy!</h2>
                                <p className="text">
                                    BUSD Profit is a smart contract which runs on BSC blockchain. No one can modify the source code or delete the smart contract. That means BUSD Profit is totally decentralized and autonomous.
                                </p>
                                <a href="#" className="button button-1">Ask a question</a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-8">
                            <div className="faq-box">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                <img src={FaqIcon} alt="" className="icon" />
                                                How does it work?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                BUSD Profit is based on community funds support. Everyone in this community are investing and helping each other. By investing you get 7% ROI Daily. To increase their earnings and also to make sure that the contract never runs out of balance Referral Program is there.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <img src={FaqIcon} alt="" className="icon" />
                                                How to connect?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Using your METAMASK wallet. If you don't have a wallet, Download the METAMASK wallet and set it up using these settings:<br />
                                                Network Name: Smart Chain<br />
                                                New RPC URL: https://bsc-dataseed.binance.org/<br />
                                                ChainID: 56<br />
                                                Symbol: BNB<br />
                                                Block Explorer URL: https://bscscan.com<br />
                                                More information can be found in our White Paper.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                                <img src={FaqIcon} alt="" className="icon" />
                                                What is the minimum and maximum deposit?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                To open a deposit, you need to replenish your account with at least 0,05 BNB. The amount of the maximum deposit is not limited, you can open an unlimited number of deposits.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                                <img src={FaqIcon} alt="" className="icon" />
                                                How does withdrawal work?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                You can withdraw funds once a day. The minimum Withdrawal amount is 0.05 BNB Anytime to your synced wallet.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseFive">
                                                <img src={FaqIcon} alt="" className="icon" />
                                                How does the Affiliate Program work?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                PolyChain has a successful affiliate program that allows you to earn an additional 10.25% from 5 Levels. The affiliate program looks like this:<br />
                                                Level 1 - 7%<br />
                                                Level 2 - 3%<br />
                                                Level 3 - 2%<br />
                                                Level 4 - 1%<br />
                                                Level 5 - 0.5%<br />
                                                All bonuses are credited automatically to your total balance.<br />


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                            <div className="fpic">
                                <img src={FaqImg} alt="" className="faq-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
