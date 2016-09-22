$(function () {


    //  jQuery checkbox

    /* find all elements with the class "checkbox" 
       and  add or remove class "checked" by the click*/

    $.each($(".checkbox"),function(){ 

        if($("input", this).is(":checked")){
            
            $(this).addClass("checked")
        }
    });

    $(".checkbox").click(function() {

    	$(this).toggleClass("checked");

    });


    //   jQuery dropdown menu

    //this function expands a submenu

    (function($) {

    	$.fn.down = function() {

    	    this.animate({

    		    opacity: 1,

                height: "205px"

            }, 400);

            return(this);
        };

    })(jQuery);

    //this function changes the color

    (function($) {

    	$.fn.changeColor = function() {

    	    this.animate({

                backgroundColor: "green"

            }, 400);

            return(this);
        };

    })(jQuery);

    //this function collapses the submenu

    (function($) {

    	$.fn.up = function() {

    	    this.animate({

    		    opacity: 0,

                height: "0px"

            }, 400);

            return(this);
        };

    })(jQuery);

    //this function restores the default color

    (function($) {

        $.fn.recoverColor = function() {

    	    this.animate({

                backgroundColor: "#ff3f14"

            }, 400);

            return(this);
        };

    })(jQuery);

    //the animation for the first submenu

    $(".first_wrapper").mouseenter(function() {

        $(".inside_first").stop(true).down().changeColor();

    })

    .mouseleave(function() {

        $(".inside_first").stop(true).recoverColor().up();

    });

    //the animation for the second submenu

    $(".second_wrapper").mouseenter(function() {

        $(".inside_first").removeClass("hide_block");

    	$(".inside_second").stop(true).down().changeColor();

    })

    .mouseleave(function() {

    	$(".inside_second").stop().recoverColor().up();

    });

    //the animation for the third submenu

    $(".third_wrapper").mouseenter(function() {

    	$(".inside_second").removeClass("hide_block")

    	$(".inside_third").stop(true).down().changeColor();

    })

    .mouseleave(function() {

    	$(".inside_third").stop().recoverColor().up();

    });

    
});


    //  Java Script native dropdown menu


window.onload = function() {

    //find the menu and sub-menus and write them in variables


    var firstHref = document.querySelector(".bottom_first_wrapper");

    var secondHref = document.querySelector(".bottom_second_wrapper");

    var thirdHref = document.querySelector(".bottom_third_wrapper");

    var firstMenu = document.querySelector(".bottom_inside_first");

    var secondMenu = document.querySelector(".bottom_inside_second");

    var thirdMenu = document.querySelector(".bottom_inside_third");


    //the animation of the appearance of the first submenu

    /*every 20 milliseconds increase the height of submenu for 23px
      when reaching the desired height clear the interval.*/


    function firstSlideDown() {

	    var heightPosition = 0;

        var interval = setInterval(function() {

            if(heightPosition == 184) {

        	    clearInterval(interval);
            };

    	    heightPosition += 23;

            firstMenu.style.height = heightPosition + "px";

        }, 20);

    };

    //the animation of the disappearance of the first submenu

    /*every 20 milliseconds decrease the height of submenu for 23px
      when reaching the desired height clear the interval.*/


    function firstSlideUp() {

	    firstMenu.className = 'bottom_inside_first hide_block';

	    var heightPosition = 207;
    
        var interval = setInterval(function() {

            if(heightPosition == 0) {

                clearInterval(interval);
            };

            heightPosition -= 23;

            firstMenu.style.height = heightPosition + "px";

        }, 20);
    };

    //the animation of the appearance of the second submenu

    function secondSlideDown() {

	    firstMenu.className = 'bottom_inside_first';

	    var heightPosition = 0;

        var interval = setInterval(function() {

            if(heightPosition == 184) {

        	    clearInterval(interval);
            };

    	    heightPosition += 23;

            secondMenu.style.height = heightPosition + "px";

        }, 20);

    };

    //the animation of the disappearance of the second submenu

    function secondSlideUp() {

	    secondMenu.className = 'bottom_inside_second hide_block';

	    var heightPosition = 207;
    
        var interval = setInterval(function() {

            if(heightPosition == 0) {

                clearInterval(interval);
            };

            heightPosition -= 23;

            secondMenu.style.height = heightPosition + "px";

        }, 20);
    };

    //the animation of the appearance of the third submenu

    function thirdSlideDown() {

	    secondMenu.className = 'bottom_inside_second';

	    var heightPosition = 0;

        var interval = setInterval(function() {

            if(heightPosition == 184) {

        	    clearInterval(interval);
            };

    	    heightPosition += 23;

            thirdMenu.style.height = heightPosition + "px";

        }, 20);

    };

    //the animation of the disappearance of the third submenu

    function thirdSlideUp() {

	    thirdMenu.className = 'bottom_inside_third hide_block';

	    var heightPosition = 207;
    
        var interval = setInterval(function() {

            if(heightPosition == 0) {

                clearInterval(interval);
            };

            heightPosition -= 23;

            thirdMenu.style.height = heightPosition + "px";

        }, 20);
    };

    //hang events with event handlers on elements

    firstHref.addEventListener('mouseenter', firstSlideDown);

    firstHref.addEventListener('mouseleave', firstSlideUp);

    secondHref.addEventListener('mouseenter', secondSlideDown);

    secondHref.addEventListener('mouseleave', secondSlideUp);

    thirdHref.addEventListener('mouseenter', thirdSlideDown);

    thirdHref.addEventListener('mouseleave', thirdSlideUp);

};

//call custom selects

$(function () {

    $('select').ikSelect();
});