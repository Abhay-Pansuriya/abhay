
$(document).ready(function(){
    var hieghtThreshold = $(".progress-content").offset();
    var hieghtThreshold_end  = $(".progress-content").offset().top +$(".progress-content").height() ;
    $(window).scroll(function(){
        // sticky navbar on scroll script
        var scroll = $(window).scrollTop();
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }

        if (scroll >= hieghtThreshold && scroll <=  hieghtThreshold_end ) {
            make_progress_animation();
        } else {
            // make_progress_default(); 
        }
        
    });

    // typing text animation script
    var typed = new Typed(".change-text", {
        strings: ["Abhay Pansuriya","Developer", "Programmer", "Designer", "Code Lover","IT Engineer"],
        typeSpeed: 110,
        backSpeed: 70,
        loop: true
    });

    // For Progress bar
    make_progress_animation();
    function make_progress_animation(){
        $('.progress-content div .myProgress').each(function(){
            var i = 0;
            if (i == 0) {
                i = 1;
                var elem = $(this).children('.myBar');
                var per = $(this).children('.myBar').attr('data');
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= parseInt(per)) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.css("width",width + "%") ;
                        elem.siblings('.progress-text').text(width + "%");
                        // elem.siblings('.progress-text').css("left",(width-15) + "%");
                    }
                }
            }
        });
    }
    // function make_progress_default(){
    //     $('.progress-content div .myProgress').each(function(){
    //         var elem = $(this).children('.myBar');
    //         elem.css("width","10%") ;
    //         elem.siblings('.progress-text').text("10%");
    //     });
    // }
    $('.hamburger').click(function(){
        $(this).toggleClass("is-active");
        $(this).siblings('.nav-bar').slideToggle();
        $(this).siblings('.logo-mob').toggle();
    });
    $(document).mouseup(function(e) {
        var container = $(".nav-bar");
        var container2 = $(".hamburger");
        // if the target of the click isn't the container nor a descendant of the container
        var width = $(window).width();
        if(width < 750){
            if ((!container.is(e.target) && container.has(e.target).length === 0) || (!container2.is(e.target) && container2.has(e.target).length === 0))
            {
                $('.hamburger').removeClass("is-active");
                $('.nav-bar').slideUp();
                $('.logo-mob').show();
            }
        }
    });
})
