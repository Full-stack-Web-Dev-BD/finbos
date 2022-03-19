import React from 'react'
import FaqMobile from '../../assets/img/faq-mobile.png'
import FaqImg from "../../assets/img/faq-image.png"
import BnbCircle from '../../assets/img/bnb-circle.png'
export default function Faq() {
  return (
    <div>
       <section className="faq" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>
                            FAQ
                        </h2>
                    </div>
                    <div className="faq-wrapper tabs-block f-jcsb">
                        <ul className="faq-list tabs-link">
                            <li className="faq-list__item">
                                <a href="#tab-1" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        How safe is it?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                            <li className="faq-list__item">
                                <a href="#tab-2" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        How does it work?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                            <li className="faq-list__item">
                                <a href="#tab-3" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        How to connect?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                            <li className="faq-list__item">
                                <a href="#tab-4" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        What is the minimum and maximum deposit?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                            <li className="faq-list__item">
                                <a href="#tab-5" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        How does withdrawal work?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                            <li className="faq-list__item">
                                <a href="#tab-6" className="faq-list__link f-center-jcsb">
                                    <div className="faq-list__title">
                                        How does the Affiliate Program work?
                                    </div>
                                    <span className="faq-list__plus">
                                        
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="faq-block">
                            <div className="faq-content tabs-content" id="tab-1">
                                <h3 className="faq-content__title">
                                    How safe is it?
                                </h3>
                                <p className="faq-content__text">
                                    BnbMoney is a smart contract which runs on BSC blockchain. No one can modify the source code or delete the smart contract. That means BnbMoney is totally decentralized and autonomous.
                                </p>
                                {/* <!-- <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a> --> */}
                            </div>
                            <div className="faq-content tabs-content" id="tab-2">
                                <h3 className="faq-content__title">
                                    How does it work?
                                </h3>
                                <p className="faq-content__text">
                                    BnbMoney is based on community funds support. Everyone in this community are investing and helping each other. By investing you get 7% ROI Daily. To increase their earnings and also to make sure that the contract never runs out of balance Referral Program is there.
                                </p>
                                {/* <!-- <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a> --> */}
                            </div>
                            <div className="faq-content tabs-content" id="tab-3">
                                <h3 className="faq-content__title">
                                    How to connect?
                                </h3>
                                <p className="faq-content__text">
                                    Using your METAMASK wallet. If you don't have a wallet, Download the METAMASK wallet and set it up using these settings:<br/>
                                    Network Name: Smart Chain<br/>
                                    New RPC URL: <a href="https://bsc-dataseed.binance.org/">https://bsc-dataseed.binance.org/</a> <br />
                                    ChainID: 56<br />
                                    Symbol: BNB <br />
                                    Block Explorer URL: <a href="https://bscscan.com">https://bscscan.com</a> <br />
                                    <i>More information can be found in our White Paper.</i>
                                </p>
                                {/* <!-- <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a> --> */}
                            </div>
                            <div className="faq-content tabs-content" id="tab-4">
                                <h3 className="faq-content__title">
                                    What is the minimum and maximum deposit?
                                </h3>
                                <p className="faq-content__text">
                                    To open a deposit, you need to replenish your account with at least 0,05 BNB. The amount of the maximum deposit is not limited, you can open an unlimited number of deposits.
                                </p>
                                {/* <!-- <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a> --> */}
                            </div>
                            <div className="faq-content tabs-content" id="tab-5">
                                <h3 className="faq-content__title">
                                    How does withdrawal work?
                                </h3>
                                <p className="faq-content__text">
                                    You can withdraw funds once a day. The minimum Withdrawal amount is 0.05 BNB Anytime to your synced wallet.
                                </p>
                                {/* <!-- <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a> --> */}
                            </div>
                            <div className="faq-content tabs-content" id="tab-6">
                                <h3 className="faq-content__title">
                                    How does the Affiliate Program work? 
                                </h3>
                                <p className="faq-content__text">
                                    PolyChain has a successful affiliate program that allows you to earn an additional 10.25% from 5 Levels. The affiliate program looks like this:<br/>
                                    Level 1 - <b>5%</b> <br />
                                    Level 2 - <b>3%</b> <br />
                                    Level 3 - <b>1.5%</b> <br />
                                    Level 4 - <b>0.5%</b> <br />
                                    Level 5 - <b>0.25%</b> <br />
                                    All bonuses are credited automatically to your total balance.
                                </p>
                                <a href="#" className="faq-content__btn main-btn main-btn_blue f-center-center">
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350701 8.37408L4.9488 10.0886L6.74126 15.8557C6.8192 16.2454 7.2868 16.3233 7.59854 16.0895L10.1703 13.9853C10.4041 13.7515 10.7938 13.7515 11.1055 13.9853L15.7036 17.3364C16.0154 17.5702 16.483 17.4144 16.5609 17.0247L19.99 0.658655C20.0679 0.268988 19.6782 -0.120677 19.2886 0.0351905L0.350701 7.36095C-0.1169 7.51681 -0.1169 8.21821 0.350701 8.37408ZM6.50747 9.23135L15.5477 3.69807C15.7036 3.62013 15.8595 3.85394 15.7036 3.93187L8.29993 10.868C8.06613 11.1018 7.83233 11.4135 7.83233 11.8032L7.59854 13.6736C7.59854 13.9074 7.20886 13.9853 7.13093 13.6736L6.19572 10.2445C5.96192 9.85482 6.1178 9.38721 6.50747 9.23135Z" fill="#BAC6EF"/>
                                    </svg>
                                    News letter
                                </a>
                            </div>
                            <div className="faq-block__image">
                                <picture>
                                    <source srcset={FaqMobile} media="(max-width: 992px)" />
                                    <img src={FaqImg} alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="faq-theme">
                        BNB
                    </div>
                    {/* <div className="faq-circle rotate-circle">
                        <img src={BnbCircle} alt="" />
                    </div> */}
                </div>
            </section>
    </div>
  )
}
