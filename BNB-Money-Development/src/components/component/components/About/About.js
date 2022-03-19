import React from 'react'
import Advantage1 from '../../assets/img/advantages-1.png'
import Advantage2 from '../../assets/img/advantages-2.png'
import Advantage3 from '../../assets/img/advantages-3.png'
import Advantage4 from '../../assets/img/advantages-4.png'
import Advantage5 from '../../assets/img/advantages-5.png'
export default function About() {
  return (
    <div>
      <section className="advantages" id="safety">
                <div className="container">
                    <ul className="advantages-list f-center-jcsb">
                        <li className="advantages-list__item">
                            <div className="section-title">
                                <h2>
                                    You need to work with BNB-Profit, because:
                                </h2>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage1} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Transparent & Secured
                                </h3>
                                <p className="advantages-list__text">
                                    An open source code that is 100% transparent and fair to all its participants, the code can't be modified
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage2} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Crazy Profit
                                </h3>
                                <p className="advantages-list__text">
                                    From your deposit you will receive 7% per day, for 30 days
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage3} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Easy Start
                                </h3>
                                <p className="advantages-list__text">
                                    Get started with just 0.05 BNB, no maximum deposit limit.
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage4} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Affiliate Program
                                </h3>
                                <p className="advantages-list__text">
                                    With the affiliate program, you can earn an additional 10,25% for 5 levels from your referrals.
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage5} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Minimal risks
                                </h3>
                                <p className="advantages-list__text">
                                    Automatic Reinvestment in the platform gives users additional insurance for their deposit
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
    </div>
  )
}
