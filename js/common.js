
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
})
