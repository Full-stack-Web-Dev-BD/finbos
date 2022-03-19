import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="credits">
            <div className="container">
                <div className="credits-wrapper f-center-jcsb">
                    <p className="credits-text">
                        © Copyright BnbMoney.app 2022. All Rights Reserved
                    </p>
                    <ul className="credits-list f-center">
                        <li className="credits-list__item">
                            <a href="assets/docs/wp.pdf" className="credits-list__link main-btn" target="_blank">
                                Whitepaper
                            </a>
                        </li>
                        <li className="credits-list__item">
                            <a href="https://bscscan.com/address/0x6269df1321fcec2c5aba171436396628016e74a0" className="credits-list__link main-btn" target="_blank">
                                Contract
                            </a>
                        </li>
                        <li className="credits-list__item">
                            <a href="#" className="credits-list__link main-btn">
                                Audit
                            </a>
                        </li>
                        <li className="credits-list__item">
                            <a href="#" className="credits-list__link main-btn">
                                Chat
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
