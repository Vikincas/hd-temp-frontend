
var hdTopMaster = new function () {

    this.init = function () {
        hdTopMaster.mobileNavigation();
        hdTopMaster.megadropdownNavigation();
        hdTopMaster.topHeaderScroll();
    };
    

    this.mobileNavigation = function () {

        //toggle mobile menu
        $(".burger-btn").click(function () {
            $(this).toggleClass("active");
            $(this).closest("#top").toggleClass("mobile-nav-open");
        });  

        //on .burger-btn click open burger menu
        $("#mobile-nav .arrow").click(function (e) {
            $(this).parent().toggleClass("active");
            $(this).closest("li").siblings().find("a").removeClass("active");
            e.preventDefault();
        });

    }

    this.megadropdownNavigation = function () {

        /*Trigger example: 
            <button type="button" class="open-megadropdown" data-dropdown-id="#mega-dropdown-search">
                <i class="fa fa-search"></i>
            </button> 
        */
        
        //1. Add the natural height to animate (could use a resize)
        $( ".is-mega-dropdown" ).each(
            function( intIndex ){

                var thisHeight = $(this).find(".container").outerHeight(); 
                $(this).attr("data-height", thisHeight);
                
            }
        );

        //2. We toggle the megadropdown on click (Touch)
        $(".toggle-megadropdown").click(function (e) {

            var dropdownId =            $(this).data("dropdown-id"),
                dropdownIdHeight =      $(dropdownId).attr("data-height"),
                dropdownIdSiblings =    $(dropdownId).siblings();
           

            //Toggle dropdown
            if (dropdownId != '' & dropdownId != undefined ) { 

                //console.log(dropdownId);
                //console.log(dropdownIdHeight);
                //console.log(dropdownIdSiblings);

                if($(this).hasClass("active")) {
                    //CLOSE
                    //clear all pre-opened header dropdowns
                    $(".is-mega-dropdown, .is-mega-dropdown .header, .toggle-megadropdown").removeClass("active"); 

                    //close all megadropdowns
                    TweenMax.to($(".is-mega-dropdown"), .8, { height: 0, ease: Power4.easeOut }); 
                }
                else {
                    //OPEN
                    //close all siblings
                    $(".toggle-megadropdown").removeClass("active"); 
                    TweenMax.to($(dropdownIdSiblings), .8, { height: 0, ease: Power4.easeOut }); 

                    //open active megadropdown
                    $(this).addClass("active");
                    TweenMax.to(dropdownId, .8, { height: dropdownIdHeight, ease: Power4.easeOut }); 
                }
            }

            e.stopPropagation();
        });


        //3: close megadropdown on mouse out
        $( ".is-mega-dropdown").mouseleave(function() {
            //clear all pre-opened header dropdowns
            $(".is-mega-dropdown, .is-mega-dropdown .header, .toggle-megadropdown").removeClass("active"); 

            //close all megadropdowns
            TweenMax.to($(".is-mega-dropdown"), .8, { height: 0, ease: Power4.easeOut }); 
                    
        });


        /*
        //(Alt 2).  We toggle the megadropdown on hover (Non touch)
        //(2.1) If hover on .toggle-megadropdown items open it´s megadropdown
        $(".no-touchevents .toggle-megadropdown").mouseover(function (e) {

            var dropdownId =            $(this).data("dropdown-id"),
                dropdownIdHeight =      $(dropdownId).attr("data-height"),
                dropdownIdSiblings =    $(dropdownId).siblings();

            //Toggle dropdown
            if (dropdownId != '' & dropdownId != undefined ) { 

                //console.log(dropdownId);
                //console.log(dropdownIdHeight);
                //console.log(dropdownIdSiblings);

                if($(this).hasClass("active")) {
                    //CLOSE
                    //clear all pre-opened header dropdowns
                    $(".is-mega-dropdown, .is-mega-dropdown .header, .toggle-megadropdown").removeClass("active"); 
                    
                    //close all megadropdowns
                    TweenMax.to($(".is-mega-dropdown"), .8, { height: 0, ease: Power4.easeOut }); 
                }
                else {
                    //OPEN
                    //close all siblings
                    $(".toggle-megadropdown").removeClass("active"); 
                    TweenMax.to($(dropdownIdSiblings), .8, { height: 0, ease: Power4.easeOut }); 

                    //open active megadropdown
                    $(this).addClass("active");
                    TweenMax.to(dropdownId, .8, { height: dropdownIdHeight, ease: Power4.easeOut }); 
                }
            }

            e.stopPropagation();
        });


        //(3.2) If hover on non .toggle-megadropdown items close all megadropdowns
        $("#primary-nav a:not(.toggle-megadropdown), #secondary-nav a:not(.toggle-megadropdown)").mouseover(function (e) {

            //CLOSE
            //clear all pre-opened header dropdowns
            $(".is-mega-dropdown, .is-mega-dropdown .header, .toggle-megadropdown").removeClass("active"); 
            
            //close all megadropdowns
            TweenMax.to($(".is-mega-dropdown"), .8, { height: 0, ease: Power4.easeOut }); 

        });
        */

    }


    this.topHeaderScroll = function() {

        if (!$('html').hasClass('lt-ie9')){
            //Make the top header slimmer when scrolled pass by it
            function yScroll(){
                var pagetop = $("#top"),
                yPos = window.pageYOffset;
                
                if(yPos > 120){
                    $("body").addClass("top-slim-header");
                } else {
                    $("body").removeClass("top-slim-header");
                }
            }

            if($('html').hasClass("no-touchevents")) {
                window.addEventListener("scroll", yScroll);
            }
        }

    }

}


$(document).ready(function () {
    hdTopMaster.init();
});