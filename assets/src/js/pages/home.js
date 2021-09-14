var _homePage = {


    mapsAnimate: function() {
        var mapsOne = $(".turkey");
        var mapsTwo = $(".brazil");
        var mapsThree = $(".singapore");
        var mapsClose = $(".box-close")
        var mapsOpenOne = $(".box-open-turkey")
        var mapsOpenTwo = $(".box-open-brazil")
        var mapsOpenThree = $(".box-open-singapore")

        $(mapsOne).click(function() {
            if (!$(mapsOpenOne).hasClass("opened")) {;
                mapsOpenOne.each(function() {
                    $(this).addClass("opened");
                });
            } else {
                $(mapsOpenOne).removeClass("opened");
            }
        });
        $(mapsClose).click(function() {
            if ($(mapsOpenOne).hasClass("opened")) {
                $(mapsOpenOne).removeClass("opened");
            } else {}
        });
        $(mapsTwo).click(function() {
            if (!$(mapsOpenTwo).hasClass("opened")) {;
                mapsOpenTwo.each(function() {
                    $(this).addClass("opened");
                });
            } else {
                $(mapsOpenTwo).removeClass("opened");
            }
        });
        $(mapsClose).click(function() {
            if ($(mapsOpenTwo).hasClass("opened")) {
                $(mapsOpenTwo).removeClass("opened");
            } else {}
        });
        $(mapsThree).click(function() {
            if (!$(mapsOpenThree).hasClass("opened")) {;
                mapsOpenThree.each(function() {
                    $(this).addClass("opened");
                });
            } else {
                $(mapsOpenThree).removeClass("opened");
            }
        });
        $(mapsClose).click(function() {
            if ($(mapsOpenThree).hasClass("opened")) {
                $(mapsOpenThree).removeClass("opened");
            } else {}
        });
    },


    Action: function() {
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();

            if (topPos > 100) {
                $("header").addClass("is-scroll");
            } else {
                $("header").removeClass("is-scroll");
            }
        });


        var SteelModulLink = $("#SteelModulLink")
        var SteelModul = $("#SteelModulArea").position();

        $(SteelModulLink).click(function() {
            $('html, body').animate({
                scrollTop: SteelModul.top
            }, 800);
            return false;
        })
    },
    pageScrollAnimated: function() {

        var _windowWidth = $(window).width();

        if (_windowWidth >= 992) {
            $(window).scroll(function() {

                var _currentScroll = $(window).scrollTop();

                //Home Sections Animate
                var _homeCloud = $("section.cloud-content");
                var _homeAbout = $(".cloud-detail a");
                var _homeSecound = $("section.home-second");
                var _homeThird = $("section.home-third");
                var _homeFourth = $("section.home-fourth");
                var _homeFifth = $("section.home-fifth");
                var _homeSixth = $("section.home-sixth");
                var _homeSeventh = $("section.home-seventh");
                var _pageCases = $("section.cases");
                var _pageThird = $("section.page-third");
                var _pageFourth = $("section.page-fourth");
                var _pageFifth = $("section.page-fifth");
                var _pageSixth = $("section.page-sixth");
                var _pageSeventh = $("section.page-seventh");
                var _pageForm = $("section.page-form");

                if (_homeCloud.length) {
                    if (_currentScroll > (_homeCloud.offset().top - 750)) {
                        _homeCloud.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }

                if (_homeAbout.length) {
                    if (_currentScroll > (_homeAbout.offset().top - 750)) {
                        _homeAbout.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }

                if (_homeSecound.length) {
                    if (_currentScroll > (_homeSecound.offset().top - 750)) {
                        _homeSecound.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }

                if (_homeThird.length) {
                    if (_currentScroll > (_homeThird.offset().top - 750)) {
                        _homeThird.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }

                if (_homeFourth.length) {
                    if (_currentScroll > (_homeFourth.offset().top - 750)) {
                        _homeFourth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }

                if (_homeFifth.length) {
                    if (_currentScroll > (_homeFifth.offset().top - 750)) {
                        _homeFifth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_homeSixth.length) {
                    if (_currentScroll > (_homeSixth.offset().top - 750)) {
                        _homeSixth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_homeSeventh.length) {
                    if (_currentScroll > (_homeSeventh.offset().top - 750)) {
                        _homeSeventh.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageCases.length) {
                    if (_currentScroll > (_pageCases.offset().top - 750)) {
                        _pageCases.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageThird.length) {
                    if (_currentScroll > (_pageThird.offset().top - 750)) {
                        _pageThird.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageFourth.length) {
                    if (_currentScroll > (_pageFourth.offset().top - 750)) {
                        _pageFourth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageFifth.length) {
                    if (_currentScroll > (_pageFifth.offset().top - 750)) {
                        _pageFifth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageSixth.length) {
                    if (_currentScroll > (_pageSixth.offset().top - 750)) {
                        _pageSixth.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageSeventh.length) {
                    if (_currentScroll > (_pageSeventh.offset().top - 750)) {
                        _pageSeventh.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
                if (_pageForm.length) {
                    if (_currentScroll > (_pageForm.offset().top - 750)) {
                        _pageForm.each(function() {
                            $(this).addClass("fadeInUp");
                        });
                    }
                }
            });
        }
    },

    homeOur: function() {
        var _homeOur = $('.our-slider');

        if (_homeOur.length) {
            _homeOur.slick({
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 5,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '80px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        };
    },



    init: function() {
        this.Action();
        this.homeOur();
        this.pageScrollAnimated();
        this.mapsAnimate();
    }
};

$(function() {
    _homePage.init();
});


window.addEventListener("resize", function() {
    "use strict";
    window.location.reload();
});


document.addEventListener("DOMContentLoaded", function() {

    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function() {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.megasubmenu').forEach(function(everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.has-megasubmenu a').forEach(function(element) {
            element.addEventListener('click', function(e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('megasubmenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();

                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
});