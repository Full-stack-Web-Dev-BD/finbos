import React from 'react'
import Coin1 from "../../assets/img/coin/1.png"
import Coin2 from "../../assets/img/coin/2.png"
import Coin3 from "../../assets/img/coin/3.png"
import Coin4 from "../../assets/img/coin/4.png"
import Coin5 from "../../assets/img/coin/5.png"
import Coin6 from "../../assets/img/coin/6.png"
import Coin7 from "../../assets/img/coin/7.png"
import Coin8 from "../../assets/img/coin/8.png"
import BannerBg2 from "../../assets/img/banner-bg-2.png"
import { Button, Modal } from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{height:'80vh'}}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4DCTTrGjGU4?autoplay=1&controls=0" controls="false" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    );
  }

export default function Header() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    <div className="banner headerBanner" id="transfer">
       
        <div className="man">
            <img src={Coin1} alt="" className="coin-1" />
            <img src={Coin2} alt="" className="coin-2" />
            <img src={Coin3} alt="" className="coin-3" />
            <img src={Coin4} alt="" className="coin-4" />
            <img src={Coin5} alt="" className="coin-5" />
            <img src={Coin6} alt="" className="coin-6" />
            <img src={Coin7} alt="" className="coin-7" />
            <img src={Coin8} alt="" className="coin-8" />
            <img className="bg-sape-1" src={BannerBg2} alt="" />
        </div>
        <div className="hero-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <div className="banner-content">
                            <h3 className="subtitle">Stable & Profitable Yield Farming Dapp With</h3>
                            <h1 className="head">Automated Users Insurance</h1>
                            <p className="text">
                            From 10% up to 20% Daily ROI
5 Levels of Referral Rewards
                            </p>

                            <div className="vide">
                                <div className="video-box">
                                   
                                    <div className="video-img" onClick={() => setModalShow(true)}>
                                        <div className="youtube-video mfp-iframe video-play-btn video-icon" >
                                            <i className="fas fa-play"></i>
                                        </div>
                                    </div>
                                 
                                    
                                    <div className="video-text">
                                        <p className="text">Watch Video Now</p>
                                        <span><i className="far fa-clock"></i> 2:32 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-cus wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <div className="right-box">
                        
                            <div className="tab-content" id="pills-tabContent">
                            
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <div className="exchange">
                                    <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder=" Total BUSD available to invest"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Enter BUSD Amount"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="button-box">
                                            <a href="#" className="button button-1">Invest Now !</a>
                                        </div>
                                        </div>
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Profit ($)"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </form>
                                        </div>

                                        
                                       
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <div className="exchange">
                                    <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder=" Total BUSD available to invest"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <input type="number" placeholder="Enter BUSD Amount"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 gx-2">
                                                        <div className="form-group">
                                                            <div className="selector">
                                                                <div className="coin">
                                                                    <img src="./assets/img/btc.png" alt="" />
                                                                    <div className="language-select">
                                                                        <select className="select-bar">
                                                                            <option value="">BTC</option>
                                                                            <option value="">USD</option>
                                                                            <option value="">BTC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="button-box">
                                            <a href="#" className="button button-1">Invest Now !</a>
                                        </div>
                                        </div>
                                        <div className="exchange-box">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12 gx-2">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="User Profit ($)"
                                                                className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                
                                            </form>
                                        </div>

                                        
                                       
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-pills pt-3" id="pills-tab" role="tablist" style={{width:'80%', margin:'auto'}}>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Reinvest</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Claim</button>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
