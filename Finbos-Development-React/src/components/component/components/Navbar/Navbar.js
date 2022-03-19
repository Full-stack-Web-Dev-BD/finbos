import React, { useEffect, useRef } from 'react'
import Logo from '../../assets/img/logo.png'
import $ from "jquery";
window.jQuery = $
require("jquery-nice-select");

export default function Navbar() {
  useEffect(() => {
    $(".nav-link").click(function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
    $("select").niceSelect();

    /* sticky navigation menu */
    var lastScrollTop = "";
    $(window).on("scroll", function () {
      var $window = $(window);
      if ($window.scrollTop() > 0) {
        $(".mein-menu").addClass("nav-fixed");
      } else {
        $(".mein-menu").removeClass("nav-fixed");
      }

      /*---------------------------
         back to top show / hide
     ---------------------------*/
      var st = $(this).scrollTop();
      if ($(window).scrollTop() > 500) {
        $("#scrollUp").fadeIn();
      } else {
        $("#scrollUp").fadeOut();
      }
      lastScrollTop = st;
    });


  }, []);

  return (
    <>
      {/* <!-- Main-menu Strat --> */}
      <div className="mein-menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} className="logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ position: 'sticky', top: '100px' }}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#transfer">Invest</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#howitworks">Claim</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Refferal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Telegram</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contract</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link button-1" id="connect" href="#">Connect </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Main-menu End --> */}
    </>
  )
}
