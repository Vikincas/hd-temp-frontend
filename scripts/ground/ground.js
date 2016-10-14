
var groundMaster = new function () {

    this.init = function () {
      groundMaster.initPolyfills();
      groundMaster.doTheFastClick();
    };

    this.initPolyfills = function () {
        //Feature detection and polyfills 

        if (!Modernizr.input.placeholder) {
            $('input, textarea').placeholder();
        }

    };

    this.doTheFastClick = function () {
        //Dependency: fastclick.js
        FastClick.attach(document.body);
    };

}


$(document).ready(function () {
    groundMaster.init();
});