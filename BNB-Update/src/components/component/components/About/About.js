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
                                    The best way to earn bnb:
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
                                    Tested and Verified by InterFl Canda: fair, stable and reliable project you can trust to
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage2} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Income Start from 10% per day
                                </h3>
                                <p className="advantages-list__text">
                                    From your deposit you will receive 10% per day, for 30 days
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage3} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    Automatic User Insurrance
                                </h3>
                                <p className="advantages-list__text">
                                    A special standalone contract guards the Project against balance draining and project (only project in the market) last investors as well
                                </p>
                            </div>
                        </li>
                        <li className="advantages-list__item f-center">
                            <div className="advantages-list__icon">
                                <img src={Advantage4} alt="" />
                            </div>
                            <div className="advantages-list__content">
                                <h3 className="advantages-list__title">
                                    5 Level referral program
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
