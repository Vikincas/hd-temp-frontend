
(function(){

    var videoPlayerOverlay = function () {

        //getparameter by name (needed to get the youtube id - non-shared)
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        //Open video overlay.............................................
        $(".open-video-overlay, .rte-open-video-overlay a").click(function (event) {
            event.preventDefault();

            var videoUrl = $(this).attr("href");
            var sharedYouTubeLink = "https://youtu.be/";
            var vimeoLink = "https://vimeo.com/";
            var videoId;
            var embedUrl;

            if(videoUrl.indexOf(vimeoLink) > -1) {
                videoId = videoUrl.replace(vimeoLink, '');
                var embedUrl = 'https://player.vimeo.com/video/' + videoId + '?autoplay=1" width="500" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen';
            }
            else if(videoUrl.indexOf(sharedYouTubeLink) > -1) {
                videoId = videoUrl.replace(sharedYouTubeLink, '');
                embedUrl = '//www.youtube.com/embed/' + videoId + '?enablejsapi=1&rel=0&autoplay=1&showinfo=0&wmode=transparent';
            } 
            else {
                videoId = getParameterByName('v', videoUrl); 
                embedUrl = '//www.youtube.com/embed/' + videoId + '?enablejsapi=1&rel=0&autoplay=1&showinfo=0&wmode=transparent';
            }

            //Embed iframe source + open overlay
            $("#fullpage-player").attr("src", embedUrl);
            $("html").addClass("fullpage-overlay-opened");
            $("body").addClass("top-slim-header");

        });

        //Close video overlay............................................
        $("#close-fullpage-overlay").click(function () {
            $("html").removeClass("fullpage-overlay-opened"); 
            $("body").removeClass("top-slim-header");
            setTimeout(function(){ 
                $("#fullpage-player").attr("src", "about:blank");
            }, 1000);
        });
    }

    var videoPlayer = function () {

        $(".video-overlay-image").click(function () {

        	var parentContainer = $(this).parents(".video-container");
            var thisVideo = parentContainer.find(".video-id").html();
            var wrapper = $(this).parents(".module-video");

            if ( parentContainer.find( ".vimeo-video-container" ).length ) {
            	var embedUrl = 'https://player.vimeo.com/video/' + thisVideo + '?autoplay=1" width="500" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen';

            	if($(wrapper).is(".show-in-overlay")) {
                    $('#fullpage-player').attr('src', embedUrl);
                    $('html').addClass('fullpage-overlay-opened');
                    $('body').addClass('top-slim-header');
               	}
                else {
                	parentContainer.find(".video-overlay-image").fadeOut();
               	 	parentContainer.find(".video-id").html('<iframe src="' + embedUrl + '"></iframe>');
                }	
            } 
            else {
            	var embedUrl = '//www.youtube.com/embed/' + thisVideo + '?enablejsapi=1&rel=0&autoplay=1&showinfo=0&wmode=transparent';

            	if($(wrapper).is(".show-in-overlay")) {
                    $('#fullpage-player').attr('src', embedUrl);
                    $('html').addClass('fullpage-overlay-opened');
                    $('body').addClass('top-slim-header');
               	}
                else {
        	        parentContainer.find('.video-overlay-image').fadeOut();
        	        parentContainer.find(".video-id").html('<iframe src="' + embedUrl + '"></iframe>');
                }
            } 
                 
        });
    }

    $(document).ready(function() {
        videoPlayer();
        videoPlayerOverlay();
    });

})();
