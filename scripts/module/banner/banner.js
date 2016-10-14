// Prevent autoplay from HTML5 Videos / Pause all HTML5 videos on load  
// Pause autoplaying HTML5 videos on load. In Firefox just go into about:config and look for media.autoplay.enabled and set to false.

var videos = document.getElementsByTagName('video');
window.addEventListener('load', pauseVideos, false);

function pauseVideos()
{
    for (var i=0; i<videos.length; i++)
    {    
        if(i != 0){
            videos[i].pause();
            videos[i].currentTime = 0.1;
        }
        
    }
}


//Banner Master...................................................................................................................
var bannerMaster = new function () {

    this.init = function () {
        bannerMaster.hero();
        bannerMaster.triggerBgVideos();
        bannerMaster.heroAnimations();
    };

    this.hero = function () {

        //Dependency enquire.js http://wicky.nillia.ms/enquire.js/#v2.0.0
        var querySm = 'screen and (min-width:0px) and (max-width:767px)';
        var queryMd = 'screen and (min-width:768px) and (max-width:1024px)';
        var queryLg = 'screen and (min-width:1025px)';

        //interchange responsive images for different screens sizes
        $('.module-banner').each(

        function (intIndex) {
            var thisModule = $(this);
            var isVideoBg = $(this).attr('data-is-video-bg');
            var imageUrlSm = $(this).attr('data-image-sm');
            var imageUrlMd = $(this).attr('data-image-md');
            var imageUrlLg = $(this).attr('data-image-lg');
            var videoUrlMp4 = $(this).attr('data-video-mp4');
            var videoUrlOgg = $(this).attr('data-video-ogg');

            //we add a random id to each element so we can animate it (useful for scrollMagic effects)
            var id = "a" + Math.random().toString(36).substring(7);
            $(this).attr("id", id);

            //react to enquire media queries
            enquire
            .register(querySm, {
                match: function () {
                    //console.log("Load small bg image");
                    if(typeof imageUrlSm !== "undefined")
                    {
                        $(thisModule).find('.content').css('background-image', 'url("' + imageUrlSm + '")');
                    }
                },
                unmatch: function () {
                }
            })
            .register(queryMd, {
                match: function () {
                    //console.log("Load medium bg image");
                    if(typeof imageUrlMd !== "undefined")
                    {
                        $(thisModule).find('.content').css('background-image', 'url("' + imageUrlMd + '")');
                    }
                },
                unmatch: function () {
                }
            })
            .register(queryLg, {
                match: function () {
                    //console.log("Load large bg image");

                    //$(thisModule).find('.content').css('background-image', 'none');

                    if (isVideoBg == 1) {
                        $(thisModule).find('video').attr('poster', imageUrlLg);

                        if (videoUrlMp4 != '') {
                            $(thisModule).find('video').append('<source type="video/mp4" src="' + videoUrlMp4 + '"  />');
                        }
                        if (videoUrlOgg != '') {
                            $(thisModule).find('video').append('<source type="video/ogg" src="' + videoUrlOgg + '"  />');
                        }
                    }
                    else {
                        if(typeof imageUrlLg !== "undefined")
                        {
                            $(thisModule).find('.content').css('background-image', 'url("' + imageUrlLg + '")');
                        }
                    }
                },
                unmatch: function () {
                }
            }, true);


            //fadein (when media is downloaded)...
            $(thisModule).addClass("is-loaded");

        });
    };


    this.heroAnimations = function() {
        /*Trigger Animations when in viewport........................................................................*/
        // As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. 
        // Use 'new ScrollMagic.Scene()' to instance a scene.

        $('.module-banner[data-parallax="1"]').each(function () {
            var blockDuration = $(this).outerHeight();
            var id = $(this).attr('id');

            // 1. init controller
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    offset: 0,
                    duration: blockDuration
                }
            });

            //2. Timeline(s)
            var tl1 = new TimelineMax();
            tl1.to("#" + id + " .container", blockDuration, { opacity: "-1", y: "-10%", ease: Linear.easeNone }, "groove")
            tl1.to("#" + id + " video", blockDuration, { y: "15%", ease: Linear.easeNone }, "groove");

            
            //3. Scene(s)
            new ScrollMagic.Scene({ triggerElement: '#' + id })
                .setClassToggle('#' + id, "active") //add class toggle
                //.addIndicators() //add indicators (requires plugin)
                .addTo(controller)
                .setTween(tl1);


        })
        
    };

    this.triggerBgVideos = function() {
        /*Trigger play when in viewport, trigger pause when not in viewport.........................................*/
        // As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. 
        // Use 'new ScrollMagic.Scene()' to instance a scene.
        
        $('.module-banner[data-is-video-bg="1"]').each(function () {
            var blockDuration = $(this).outerHeight();
            var id = $(this).attr('id');
            //console.log("triggerBgVideos called");

            // 1. init controller
            var controller2 = new ScrollMagic.Controller({
                globalSceneOptions: {
                    //triggerHook: 'onEnter',
                    offset: 0,
                    duration: blockDuration
                }
            });


            //2. Scene(s)
            new ScrollMagic.Scene({ triggerElement: '#' + id })
                .setClassToggle('#' + id, "play-bg-video") //add class toggle
                //.addIndicators() //add indicators (requires plugin)
                .addTo(controller2)
                .on("enter", function (event) {
                    //console.log("entered.");
                    $(event.target.triggerElement()).find("video")[0].play();
                })   
                .on("leave", function (event) {
                    //console.log("leaved");
                    $(event.target.triggerElement()).find("video")[0].pause();
                });     
        });
    };




}

$(document).ready(function () {
    bannerMaster.init();
});



