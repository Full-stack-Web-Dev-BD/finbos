import React from 'react'
import MainImg from '../../assets/img/main-image.png'
import MainMobile from '../../assets/img/main-mobile.png'
import BnbCircle from '../../assets/img/bnb-circle.png'
import { ethers } from "ethers";
import $ from 'jquery'
import { connectWallet } from '../../../../wallet';
import Footer from '../Footer/Footer';
import './header.css'
let jQuery = $
let ethereum = ethers
export default function Header() {
    return (
        <div  >
            <section className="main" >
                <div className="container">
                    <div className="main-wrapper f-center-jcsb">
                        <div className="main-content">
                            <h1 className="main-content__title">
                                Stable & Profitable Yield Farming Dapp
                                <span className="child_text"> With Users Insurance to protect all Investors </span>
                            </h1>
                            {/* <p className="main-content__text">
                                Your Smart Investment Platform <span>in Web 3.0</span>
                            </p> */}
                            {/* <p className="main-content__text " >
                                <span>Your Smart Investment </span>
                            </p> */}

                            <p className=" main-content__text mt-2" >
                                <span> 10% Daily Return </span>
                            </p>
                            <p className=" main-content__text" >
                                <span>30% Auto Reinvestment on Withdrawal</span>
                            </p>
                            <p className=" main-content__text mb-5" >
                                <span>5 levels of Referral Rewards</span>
                            </p>
                            {/* <a href="#invest" className="main-content__btn main-btn main-btn_blue scroll-link">
                                Invest now
                            </a> */}
                            {/* added here  */}
                            <div >
                                <ul className="linkList">
                                    <li >
                                        <a href="https://bnbmoney.app/static/media/wp.4687c56a.pdf" target="_blank">
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://bscscan.com/address/0xf8602C8f54451e515157EF565D5434d09db17D6F#code" target="_blank">
                                            Contract
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://bnbmoney.app/bnbmoney.app.pdf" >
                                            Audit
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/bnbmoneyapp_en" >
                                            Chat
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* added here  */}
                        </div>
                        <div className="main-image">
                            <picture>
                                <source srcset={MainMobile} media="(max-width: 992px)" />
                                <img src={MainImg} alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="main-text">
                        BNB
                    </div>
                    {/* <div className="main-circle rotate-circle">
                        <img src={BnbCircle} alt="" />
                    </div> */}
                </div>
            </section>
        </div>
    )
}
