
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
        strings: ["Abhay Pansuriya","Developer", "Programmer", "Designer", "Code Lover"],
        typeSpeed: 90,
        backSpeed: 60,
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
    function make_progress_default(){
        $('.progress-content div .myProgress').each(function(){
            var elem = $(this).children('.myBar');
            elem.css("width","10%") ;
            elem.siblings('.progress-text').text("10%");
        });
    }
    
})
