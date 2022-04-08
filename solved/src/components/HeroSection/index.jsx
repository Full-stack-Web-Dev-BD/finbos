import Counter from "../Features2/Counter";

const SecHeroSection = ({
  ClassSec = "",
  ClassDiv = "",
  specialHead = "",
  title = "",
  link1 = "",
  link2 = "",
  img,
  HomeDemo1Or3Or4Or5Or6 = true,
  HomeDemo1Or4Or5Or6 = true,
}) => {
  return (
    <section className={ClassSec} id="home">
      <div className="home-container">
        {" "}
        <div className="hero-section-content">
          <div className="container my-container">
            <div className="row align-items-center">
              <div className={ClassDiv}>
                <div className="welcome-content">
               
                  <h1>{title}</h1>
                  <div className="mt-4  promo-section">
                    <h3 className="special-head dark"> 10% Daily Return</h3>
                    <h3 className="special-head dark"> 30% Auto Reinvestment on Withdrawal</h3>
                    <h3 className="special-head dark"> 5 levels of Referral Rewards</h3>
                  </div>
                  <div
                    className="dream-btn-group fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <a href="https://bnbmoney.app/static/media/wp.4687c56a.pdf" target="_blank" className="btn more-btn mr-3">
                      {link1}
                    </a>
                    <a href="https://bnbmoney.app" className="btn more-btn">
                      {link2}
                    </a>
                  </div>
                </div>
              </div>
              {HomeDemo1Or3Or4Or5Or6 && (
                <div className=" col-md-10 mx-auto col-lg-6 mt-5 mt-lg-0 my-counter-container d-flex justify-content-center">
                  <Counter icoCounterClass="ico-counter dotted-bg " />
                  <img src={img} alt="#" className="hero-image " />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHeroSection;

// <>
//   {HomeDemo1 && (
//     <section className={"hero-section moving section-padding"} id="home">
//       <div className="moving-bg" />
//       <div className="hero-section-content">
//         <div className="container ">
//           <div className="row align-items-center">
//             <div className={"col-12 col-lg-5 col-md-12"}>
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1 className="" data-aos-delay="200">{title}</h1>
//                 <p className="w-text " data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
//                 <div className="dream-btn-group " data-aos-delay="400">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="dotted mt-30 " data-aos-delay="500">
//                 <img draggable="false" src={img} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )}

//   {HomeDemo2 && (
//     <section className="hero-section app section-padding" id="home">
//       <div className="hero-section-content">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-12 col-lg-7 col-md-12">
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1>{title}</h1>
//                 <p className="w-text">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
//                 <div className="dream-btn-group">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )}

//   {HomeDemo3 && (
//     <section className="hero-section de-3 section-padding" id="home">
//       <div className="hero-section-content">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-12 col-lg-5 col-md-12">
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1>{title}</h1>
//                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
//                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )}

//   {HomeDemo4 && (

//     <section className={ClassSec} id="home">
//       <div className="hero-section-content">
//         <div className="container ">
//           <div className="row align-items-center">
//             <div className={ClassDiv}>
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1>{title}</h1>
//                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
//                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//             {HomeDemo1Or3Or4Or5Or6 && (
//               <div className="col-lg-6">
//                 {HomeDemo1Or4Or5Or6 && (
//                   <div className="illusto-2">
//                     <img draggable="false" draggable="false" src={img} alt="" />
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>

//   )}

//   {HomeDemo5 && (

//     <section className="hero-section moving-2 section-padding" id="home">
//       <div className="hero-section-content">
//         <div className="container ">
//           <div className="row align-items-center">
//             <div className="col-12 col-lg-6 col-md-12">
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1>{title}</h1>
//                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
//                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="illusto-1 mt-30 fadeInUp" data-wow-delay="0.5s">
//                 <img draggable="false" draggable="false" src="img/core-img/hero-img.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )}

//   {HomeDemo6 && (

//     <section className="hero-section moving section-padding" id="home">
//       <div className="hero-section-content">
//         <div className="container ">
//           <div className="row align-items-center">
//             <div className="col-12 col-lg-6 col-md-12">
//               <div className="welcome-content">
//                 <div className="promo-section">
//                   <h3 className="special-head dark">{specialHead}</h3>
//                 </div>
//                 <h1>{title}</h1>
//                 <p className="w-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
//                 <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
//                   <a href="#" className="btn more-btn mr-3">{link1}</a>
//                   <a href="#" className="btn more-btn">{link2}</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="illusto mt-30 fadeInUp" style={{}} data-wow-delay="0.5s">
//                 <img draggable="false" draggable="false" src="img/core-img/about-1.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   )}
// </>
