import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
require('slick-carousel')
let jQuery = $

export const App = () => {
    // jQuery function
    $(document).ready(function () {
        // timer
        // (function timer() {
        //     $('.timer-js').timeTo({
        //         timeTo: new Date('Mar 25 2022 10:30:00'),
        //     });
        //
        //     $('.timeTo div:eq(1)').after('<span>:</span>');
        // }());

        // tabs
        (function tabs() {
            let tabContent = $(".tabs-block .tabs-content");
            tabContent.filter(":first").addClass("active");

            $(".tabs-link a")
                .click(function () {
                    tabContent.removeClass("active");
                    tabContent.filter(this.hash).addClass("active");
                    $(".tabs-link a").removeClass("active");
                    $(this).addClass("active");
                    return false;
                })
                .filter(":first")
                .click();

            $(".tabs-link a").click(function () {
                $(".tabs-link a[href=" + $(this).data("id") + "]").click();
            });
        }());

        // scroll link
        (function scrollLink() {
            $(".scroll-link").click(function () {
                var elementClick = $(this).attr("href")
                var destination = $(elementClick).offset().top;
                jQuery("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                }, 1500);
                return false;
            });
        }());

        // menu
        (function menu() {
            $('.header-toggle').click(function () {
                $('.header-mobile').toggleClass('show');
                $('html').toggleClass('menu-open');
            });

            $('.mobile-menu__link').click(function () {
                $('.header-mobile').removeClass('show');
                $('html').removeClass('menu-open');
            });

            // $(document).mouseup(function (e) {
            //     let mobileMenu = $(".header-mobile");
            //     if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
            //       $(".header-mobile").removeClass("show");
            //       $('html').removeClass('menu-open');
            //     }
            // });
        }());
    });

    return (
        <div>
            <ToastContainer />
            <Home />
        </div>
    );
}

