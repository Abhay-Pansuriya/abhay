
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
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
})
