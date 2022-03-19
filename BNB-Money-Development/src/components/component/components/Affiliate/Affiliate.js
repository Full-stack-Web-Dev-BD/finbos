import React from 'react'

export default function Affiliate() {
  return (
    <div>
      <section className="program" id="program">
                <div className="container">
                    <div className="section-title">
                        <h2>
                            AFFILIATE  PROGRAM
                        </h2>
                    </div>
                    <div className="program-wrap">
                        <div className="program-header f-center-jcsb">
                            <div className="program-referal">
                                <p className="program-referal__point">
                                    Your referral link:
                                </p>
                                <input id="referralLink" type="text" name="referal" className="program-referal__input" required/>
                            </div>
                            <div className="program-referal">
                                <p className="program-referal__point">
                                    Total paid referral rewards
                                </p>
                                <p className="program-referal__value"><span id="totalReferralBonus"></span>   
                                     BNB  
                                </p>
                            </div>
                        </div>
                        <div className="program-table">
                            <div className="program-table__header">
                                Your referral total
                            </div>
                            <ul className="program-list">
                                <li className="program-list__item f-center-jcsb">
                                    <div className="program-list__offer">
                                        <h3 className="program-list__title">
                                            level 1
                                        </h3>
                                        <p className="program-list__subtitle">
                                            5% referral rewards
                                        </p>
                                    </div>
                                    <p className="program-list__value"><span id="userRefLevel1"></span>
                                         BNB
                                    </p>
                                </li>
                                <li className="program-list__item f-center-jcsb">
                                    <div className="program-list__offer">
                                        <h3 className="program-list__title">
                                            level 2
                                        </h3>
                                        <p className="program-list__subtitle">
                                            3% referral rewards 
                                        </p>
                                    </div>
                                    <p className="program-list__value"><span id="userRefLevel2"></span>
                                         BNB
                                    </p>
                                </li>
                                <li className="program-list__item f-center-jcsb">
                                    <div className="program-list__offer">
                                        <h3 className="program-list__title">
                                            level 3
                                        </h3>
                                        <p className="program-list__subtitle">
                                            1.5% referral rewards 
                                        </p>
                                    </div>
                                    <p className="program-list__value"><span id="userRefLevel3"></span>
                                         BNB
                                    </p>
                                </li>
                                <li className="program-list__item f-center-jcsb">
                                    <div className="program-list__offer">
                                        <h3 className="program-list__title">
                                            level 4
                                        </h3>
                                        <p className="program-list__subtitle">
                                            0.5% referral rewards 
                                        </p>
                                    </div>
                                    <p className="program-list__value"><span id="userRefLevel4"></span>
                                         BNB
                                    </p>
                                </li>
                                <li className="program-list__item f-center-jcsb">
                                    <div className="program-list__offer">
                                        <h3 className="program-list__title">
                                            level 5
                                        </h3>
                                        <p className="program-list__subtitle">
                                            0.25% referral rewards
                                        </p>
                                    </div>
                                    <p className="program-list__value"><span id="userRefLevel5"></span>
                                         BNB
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
