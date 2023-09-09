window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var main = document.querySelector(".fullscreen_body");
    var scrollPosition = window.scrollY;


    if (scrollPosition > 80) {                 
        main.style.opacity = 0
    } 
    else {
        main.style.opacity = 1
    }

    if (scrollPosition > document.body.clientHeight * 0.81) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; 
    }
    else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    }
});


var pre_last_page = document.querySelector('.fff'); 



window.addEventListener("scroll", function() {
    var scrollPos = this.window.scrollY;
    var pre_last_section = document.querySelector('.fullscreen_body_2')

    if (this.window.innerWidth <= 1440) {
        var Pos = pre_last_page.offsetTop;
        if (scrollPos >= Pos) {
            pre_last_section.style.opacity = 1;
        }
        else {
            pre_last_section.style.opacity = 0;
        }
    }

    else {
            var Pos = 0.97 * pre_last_page.offsetTop;
            if (scrollPos >= Pos) {     
                pre_last_section.style.opacity = 1;
            }
            else {
                pre_last_section.style.opacity = 0;
        }
    }
});


var pre_last = document.querySelector('.ff');

window.addEventListener("scroll", function() {
    var scrollPos = this.window.scrollY;
    var header = document.querySelector('.header')

    if (this.window.innerWidth <= 1440) {
        var Pos = pre_last.offsetTop;
        if (scrollPos >= Pos) {
            header.style.opacity = 0;
        }
        else {
            header.style.opacity = 1;
        }
    }

    else {
        var Pos = 0.97 * pre_last.offsetTop;
        if (scrollPos >= Pos) {
            header.style.opacity = 0;
            
        }
        else {
            header.style.opacity = 1;
               
        }
    }
});