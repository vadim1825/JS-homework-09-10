$(function () {


    //  jQuery checkbox


    $.each($(".checkbox"),function(){

        if($("input", this).is(":checked")){
            
            $(this).addClass("checked")
        }
    });



    $(".checkbox").click(function() {

    	$(this).toggleClass("checked");

    });


    //   jQuery slide list

    

    (function($) {

    	$.fn.down = function() {

    	    this.animate({

    		    opacity: 1,

                height: "205px",

            }, 400);
        };
    })(jQuery);


    (function($) {

    	$.fn.changeColor = function() {

    	    this.animate({

                backgroundColor: "green"

            }, 400);
        };
    })(jQuery);


    (function($) {

    	$.fn.up = function() {

    	    this.animate({

    		    opacity: 0,

                height: "0px",

            }, 400);
        };
    })(jQuery);


    (function($) {

        $.fn.recoverColor = function() {

    	    this.animate({

                backgroundColor: "#ff3f14"

            }, 400);
        };
    })(jQuery);



    $(".first_wrapper").mouseenter(function() {

    	$(".inside_first").down();

    	$(".inside_first").changeColor();

    })

    .mouseleave(function() {

    	$(".inside_first").recoverColor();

    	$(".inside_first").addClass("hide_block").up();

    });



    $(".second_wrapper").mouseenter(function() {

    	$(".inside_first").removeClass("hide_block");

    	$(".inside_second").down();

    	$(".inside_second").changeColor();

    })

    .mouseleave(function() {

    	$(".inside_second").recoverColor();

    	$(".inside_second").addClass("hide_block").up();
    });



    $(".third_wrapper").mouseenter(function() {

    	$(".inside_second").removeClass("hide_block")

    	$(".inside_third").down();

    	$(".inside_third").changeColor();

    })

    .mouseleave(function() {

    	$(".inside_third").recoverColor();

    	$(".inside_third").up();
    });

    
});


    //  Java Script native slide list


window.onload = function() {


var firstHref = document.querySelector(".bottom_first_wrapper");

var secondHref = document.querySelector(".bottom_second_wrapper");

var thirdHref = document.querySelector(".bottom_third_wrapper");

var firstMenu = document.querySelector(".bottom_inside_first");

var secondMenu = document.querySelector(".bottom_inside_second");

var thirdMenu = document.querySelector(".bottom_inside_third");




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


function firstSlideUp() {

	firstMenu.className = 'bottom_inside_first hide_block';

	var heightPosition = 207;
    
    var interval = setInterval(function() {

        if(heightPosition == 0) {

            clearInterval(interval);
        }

        heightPosition -= 23;

        firstMenu.style.height = heightPosition + "px";

    }, 20);
};

function secondSlideDown() {

	firstMenu.className = 'bottom_inside_first';

	var heightPosition = 0;

    var interval = setInterval(function() {

        if(heightPosition == 184) {

        	clearInterval(interval);
        }

    	heightPosition += 23;

        secondMenu.style.height = heightPosition + "px";

    }, 20);

};

function secondSlideUp() {

	secondMenu.className = 'bottom_inside_second hide_block';

	var heightPosition = 207;
    
    var interval = setInterval(function() {

        if(heightPosition == 0) {

            clearInterval(interval);
        }

        heightPosition -= 23;

        secondMenu.style.height = heightPosition + "px";

    }, 20);
};

function thirdSlideDown() {

	secondMenu.className = 'bottom_inside_second';

	var heightPosition = 0;

    var interval = setInterval(function() {

        if(heightPosition == 184) {

        	clearInterval(interval);
        }

    	heightPosition += 23;

        thirdMenu.style.height = heightPosition + "px";

    }, 20);

};

function thirdSlideUp() {

	thirdMenu.className = 'bottom_inside_third hide_block';

	var heightPosition = 207;
    
    var interval = setInterval(function() {

        if(heightPosition == 0) {

            clearInterval(interval);
        }

        heightPosition -= 23;

        thirdMenu.style.height = heightPosition + "px";

    }, 20);
};



firstHref.addEventListener('mouseenter', firstSlideDown);

firstHref.addEventListener('mouseleave', firstSlideUp);

secondHref.addEventListener('mouseenter', secondSlideDown);

secondHref.addEventListener('mouseleave', secondSlideUp);

thirdHref.addEventListener('mouseenter', thirdSlideDown);

thirdHref.addEventListener('mouseleave', thirdSlideUp);

};


$(function () {

    $('select').ikSelect();
});