import React from 'react'
import MainImg from '../../assets/img/main-image.png'
import MainMobile from '../../assets/img/main-mobile.png'
import BnbCircle from '../../assets/img/bnb-circle.png'
import { ethers } from "ethers";
import $ from 'jquery'
import { connectWallet } from '../../../../wallet';
let jQuery = $
let ethereum = ethers
export default function Header() {
    return (
        <div>
            <section className="main">
                <div className="container">
                    <div className="main-wrapper f-center-jcsb">
                        <div className="main-content">
                            <h1 className="main-content__title">
                                BNB-MONEY
                            </h1>
                            {/* <p className="main-content__text">
                                Your Smart Investment Platform <span>in Web 3.0</span>
                            </p> */}
                            <p className="main-content__text" >
                                Your Smart Investment <span>7% Daily for 30 Days</span>
                            </p>
                            <a href="#invest" className="main-content__btn main-btn main-btn_blue scroll-link">
                                Invest now
                            </a>
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
