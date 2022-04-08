import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .main-title {
    font-weight: 700;
    font-size: 50px;
  }
  .way {
    color: #ed1d49;
  }
  .my-card {
    background: #1c2532;
    border-radius: 12px;
    padding: 10px;
    height: 100%;
  }
  .title {
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-size: 17px;
    line-height: 100%;
  }
  .text {
    font-size: 15px;
    line-height: 120%;
    color: #fff;
  }
  .icon {
    width: 40px;
  }
  .stake-offer::before {
    background: url(./image/shape.webp) 0 0/100% 100% no-repeat;
    content: "sdfsdf";
    position: absolute;
    width: 200%;
    height: 100%;
    top: -20%;
    right: -70%;
  }
  .stake {
    font-size: 40px;
    color: #2283f6;
    font-weight: 700;
    margin-bottom: 0px;
  }

  .we {
    font-size: 25px;
    color: #fff;
    font-weight: 700;
  }
  .myButton {
    position: relative;
    z-index: 2;
    width: 12.8125rem;
    margin-top: 1.25rem;
    border: none;
    outline: none;
    height: 3.125rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem;
    background: -o-radial-gradient(
        0 8.21%,
        100% 235.84%,
        rgba(244, 80, 115, 0.5) 0,
        rgba(237, 29, 73, 0.5) 100%
      ),
      #ed1d49;
    background: radial-gradient(
        100% 235.84% at 0 8.21%,
        rgba(244, 80, 115, 0.5) 0,
        rgba(237, 29, 73, 0.5) 100%
      ),
      #ed1d49;
    border-radius: 0.625rem;
    font-weight: 700;
    white-space: nowrap;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  .myButton:hover{
    -webkit-transform: translateY(-0.5px);
    -ms-transform: translateY(-.5px);
    transform: translateY(-0.5px);
    -webkit-box-shadow: 0 5px 10px rgb(237 29 73 / 50%);
    box-shadow: 0 5px 10px rgb(237 29 73 / 50%);
}

  }
  @media  only screen and  (max-width:767px){
    .stake-offer::before{
      display:none;
    }
    .stake{font-size: 35px;}
    .main-title{
      font-size:40px;
      text-align:center;
    }
    .we {
      font-size: 35px;
    }
    .myButton{
      margin-top:0px;
    }
  }
`;

const EarnBnb = () => {
  const dataArray = [
    {
      icon: "./image/security.webp",
      title: "Audited smart contract ",
      text: "Tested and verified by HazeCrypto: fair, stable and reliable Project you can trust to",
    },
    {
      icon: "./image/income.webp",
      title: "Income start from 10% per day",
      text: "Flexible architecture will be profitable for any investor: just choose your plan and Claim the profits!",
    },
    {
      icon: "./image/anti.webp",
      title: "Anti-Whale Features",
      text: "Generosity is balanced by two simple rules: max 4 Claims per day, max 5 BNB at once",
    },

    {
      icon: "./image/level.webp",
      title: "5-level referral program",
      text: "Earn when people invited by you make deposits. You also benefit from their Referrals!",
    },
    {
      icon: "./image/support.webp",
      title: "24/7 Support help",
      text: "Feel free to ask any question in our group any time, we will be glad to help you!",
    },
    {
      icon: "./image/user.webp",
      title: "Automatic user insurance",
      text: "A special standalone contract guards the Project against balance draining and keeps it alive",
    },
  ];
  return (
    <Wrapper className="container">
      <h2 className="main-title mb-4">
        <span className="way">The Best Way</span> to Earn BNB
      </h2>
      <div className="row ">
        <div className="col-md-8 col-lg-9">
          <div className="row">
            {" "}
            {dataArray.map((el, i) => (
              <div
                className="col-10 col-sm-6 col-lg-4 px-xl-4 my-3 mx-auto"
                key={i}
              >
                <div className="my-card">
                  <div className="d-flex align-items-start justify-content-between">
                    <img src={el.icon} alt="#" className="icon" />
                    <p className="title">{el.title}</p>
                  </div>
                  <p className="text">{el.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-end stake-offer">
          <div className="d-flex aling-items-center flex-md-column align-items-md-end">
            <p className="stake">You stake</p>
            <p className="we">We pay</p>
          </div>
          <a href="https://www.youtube.com/watch?v=r7z0JBSZcto" target="_blank" className="myButton">
            HOW TO START!
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default EarnBnb;
