import React from 'react'
import Logo from '../../assets/img/logo.png'
import PdfFile from '../../assets/docs/wp.pdf'
export default function Navbar() {
    return (
        <div>
            <header className="header">
                <div className="container f-center-jcsb">
                    <div className="header-wrap f-center">
                        <div className="header-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <nav className="header-nav">
                            <ul className="header-menu f-center">
                                <li className="header-menu__item">
                                    <a href="#safety" className="header-menu__link scroll-link">
                                        Safety
                                    </a>
                                </li>
                                <li className="header-menu__item">
                                    <a href="#invest" className="header-menu__link scroll-link">
                                        Investment
                                    </a>
                                </li>
                                <li className="header-menu__item">
                                    <a href="#program" className="header-menu__link scroll-link">
                                        Affiliate Program
                                    </a>
                                </li>
                                <li className="header-menu__item">
                                    <a href="#faq" className="header-menu__link scroll-link">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-control f-center">
                        <a href={PdfFile} className="header-link main-btn" target="_blank">
                            Whitepaper
                        </a>
                        <div className="header-toggle">
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8H0V6H18V8ZM18 2H0V0H18V2Z" fill="#1F3CA6" />
                            </svg>
                        </div>
                    </div>
                    <div className="header-mobile">
                        <div className="header-mobile__block">
                            <ul className="mobile-menu">
                                <li className="mobile-menu__item">
                                    <a href="#" id="connect" className="mobile-menu__link scroll-link">
                                        Connect
                                    </a>
                                </li>
                                <li className="mobile-menu__item">
                                    <a href="#safety" className="mobile-menu__link scroll-link">
                                        Safety
                                    </a>
                                </li>
                                <li className="mobile-menu__item">
                                    <a href="#invest" className="mobile-menu__link scroll-link">
                                        Investment
                                    </a>
                                </li>
                                <li className="mobile-menu__item">
                                    <a href="#program" className="mobile-menu__link scroll-link">
                                        Affiliate Program
                                    </a>
                                </li>
                                <li className="mobile-menu__item">
                                    <a href="#faq" className="mobile-menu__link scroll-link">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <div className="mobile-btns">
                                <a href="assets/docs/wp.pdf" className="mobile-btn main-btn main-btn_blue" target="_blank">
                                    Whitepaper
                                </a>
                                <button type="button" className="mobile-btn main-btn main-btn_blue">
                                    Audit
                                </button>
                                <a href="https://bscscan.com/address/0x6269df1321fcec2c5aba171436396628016e74a0" className="mobile-btn main-btn main-btn_blue" target="_blank">
                                    Contract
                                </a>
                                <button type="button" className="mobile-btn main-btn main-btn_blue">
                                    Chat
                                </button>
                            </div>
                            <p className="mobile-politic">
                                © Copyright BnbMoney.app 2022. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
