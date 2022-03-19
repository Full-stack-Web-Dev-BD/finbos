import React from 'react'
import EasyBg from '../../assets/img/easy-bg.png'
import ArrowImg from '../../assets/img/arrow.png'
import Easy1 from "../../assets/img/easy-1.png"
import Easy2 from "../../assets/img/easy-2.png"
import Easy3 from "../../assets/img/easy-3.png"
import DashboardImg from "../../assets/img/dashboad.png"

export default function How() {
  return (
    <div>
       {/* <!-- Easy Start --> */}
    <div className="easy" id="howitworks">
        <div className="bg-img">
            <img src={EasyBg} alt="" className="easy-bggg" />
        </div>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-8">
                    <div className="section-head wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <h4 className="lasthead">It's Really Easy!</h4>
                        <h2 className="title">The Best Way to Earn BNB</h2>
                        <p className="text">
                            It's easier than you think.Follow 3 simple easy steps
                        </p>
                    </div>
                    <div className="item-box">
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <img src={ArrowImg} alt="" className="arrow" />
                            <div className="icon">
                                <img src={Easy1} alt="" />
                            </div>
                            <h5 className="title">Audited smartcontract
</h5>
<p>Tested and verified by HazeCrypto: fair, stable and reliable Project you can trust to</p>
                        </div>
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <img src="./assets/img/arrow.png" alt="" className="arrow" />
                            <div className="icon">
                                <img src={Easy2} alt="" />
                            </div>
                            <h5 className="title">Income start from 10% per dayy</h5>
                            <p>Flexible architecture will be profitable for any investor: just choose your plan and Claim the profits!</p>
                        </div>
                        <div className="item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <div className="icon">
                                <img src={Easy3} alt="" />
                            </div>
                            <h5 className="title">Anti-Whale Features
                            </h5>
                            <p>Generosity is balanced by two simple rules: max 4 Claims per day, max 5 BNB at once</p>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 d-none d-xl-block">
                    <div className="pic">
                        <img src={DashboardImg} alt="" className="dashboad" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
