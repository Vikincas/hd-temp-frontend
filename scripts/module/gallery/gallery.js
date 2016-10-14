
var galleryMaster = {
    
    init : function () {
        this.openFancybox();
        this.slider();
    },

    openFancybox : function () {

    	//Default lightbox
    	$('.fancybox').fancybox();

    	//Video player lightbox
	    $('.fancybox-media').fancybox({
			maxWidth: 800,
            maxHeight: 478,
            fitToView: false,
            width: '100%',
            height: '100%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
		});

	},

    slider : function () {

    	// Loop over each .slider
		$( ".is-slider" ).each(
			function( intIndex ){

				var maxItems = $(this).attr("data-show-items");

				if(maxItems == 1) {
					//max items to show (1)
			    	var maxItemsDesktop= 1,
			    		maxItemsDesktopSmall= 1,
			    		maxItemsTablet= 1,
			    		maxItemsMobile= 1;
				}
				else if(maxItems == 2) {
					//max items to show (2)
			    	var maxItemsDesktop= 2,
			    		maxItemsDesktopSmall= 2,
			    		maxItemsTablet= 2,
			    		maxItemsMobile= 1;
				}
				else if(maxItems == 3) {
					//max items to show (3)
			    	var maxItemsDesktop= 3,
			    		maxItemsDesktopSmall= 2,
			    		maxItemsTablet= 2,
			    		maxItemsMobile= 1;
				}
				else {
					//max items to show (4)
			    	var maxItemsDesktop= 4,
			    		maxItemsDesktopSmall= 3,
			    		maxItemsTablet= 2,
			    		maxItemsMobile= 1;
				}


		        $(this).owlCarousel({
		        	//For more info: (http://owlgraphic.com/owlcarousel/)
		     
			        //Most important owl features
			        items : maxItemsDesktop,
			        itemsCustom : false,
			        itemsDesktop : [1199,maxItemsDesktop],
			        itemsDesktopSmall : [980,maxItemsDesktopSmall],
			        itemsTablet: [768,maxItemsTablet],
			        itemsTabletSmall: false,
			        itemsMobile : [479,maxItemsMobile],
			        singleItem : false,
			        itemsScaleUp : false,
			     
				    //Basic Speeds
				    slideSpeed : 200,
				    paginationSpeed : 800,
				    rewindSpeed : 1000,
				 
				    //Autoplay
				    autoPlay : false,
				    stopOnHover : false,
				 
				    // Navigation
				    navigation : true,
				    navigationText : ["<span class='icon-arrow-left'></span>","<span class='icon-arrow-right'></span>"],
				    rewindNav : true,
				    scrollPerPage : true,
				 
				    //Pagination
				    pagination : true,
				    paginationNumbers: false,
				 
				    // Responsive 
				    responsive: true,
				    responsiveRefreshRate : 200,
				    responsiveBaseWidth: window,
				 
				    // CSS Styles
				    baseClass : "owl-carousel",
				    theme : "owl-theme",
				 
				    //Lazy load
				    lazyLoad : true,
				    lazyFollow : false,
				    lazyEffect : "fade",
				 
				    //Auto height
				    autoHeight : false,
				 
				    //JSON 
				    jsonPath : false, 
				    jsonSuccess : false,
				 
				    //Mouse Events
				    dragBeforeAnimFinish : true,
				    mouseDrag : true,
				    touchDrag : true,
				 
				    //Transitions
				    transitionStyle : false,
				 
				    // Other
				    addClassActive : false,
				 
				    //Callbacks
				    beforeUpdate : false,
				    afterUpdate : false,
				    beforeInit: false, 
				    afterInit: false, 
				    beforeMove: false, 
				    afterMove: false,
				    afterAction: false,
				    startDragging : false,
				    afterLazyLoad : false

			     
			    })


			}
		);


    }

}


$(document).ready(function () {
    galleryMaster.init();
});