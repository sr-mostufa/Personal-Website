$(function () {
    "use strict";

    // typed js start
    var typed = new Typed('.typed', {
        strings: [
            'Web Designer',
            'Web Developer',
            'Freelncer'
            
        ],
        typeSpeed: 80,
        backSpeed: 85,
        loop: true
    });


    // Menu fix js start
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $('.main_menu').addClass('menu_fix');
        }
        else {
            $('.main_menu').removeClass('menu_fix');
        }


    });


    // back to top js start
    $('.backtop').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.backtop').fadeIn();
        }
        else {
            $('.backtop').fadeOut();
        }


    });



        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');

                }else{
                    entry.target.classList.remove('show');
                }
              
            });
        });


    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});