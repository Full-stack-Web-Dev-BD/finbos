import React, { useEffect } from 'react'
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import How from './components/How/How';
import Exchange from './components/Exchange/Exchange';
import Transfer from './components/Transfer/Transfer';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';

import './assets/css/normalize.css'
import './assets/css/font-awesome-5.10.2.min.css'
import './assets/css/plugin/magnific-popup.css'
import './assets/css/plugin/nice-select.css'
import './assets/css/plugin/animate.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './App.css';
import $ from "jquery";
import WOW from 'wowjs'
window.jQuery = $

function Landing() {

  useEffect(() => {
    $(window).on("load", function () {
      /*Preloader*/
      $('.preloader').fadeOut(1000);
      var img = $('.bg_img');
      img.css('background-image', function () {
        var bg = ('url(' + $(this).data('background') + ')');
        return bg;
      });
    });

    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div>
      {/* <!-- ==========Preloader========== --> */}
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- ==========Preloader========== --> */}

      <Navbar />
      <Header />
      <How />
      <Exchange />
      <Transfer />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;
