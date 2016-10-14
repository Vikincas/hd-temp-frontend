
$(".read-more-btn").click(function () {
	var more = $(this).attr("data-more-text");
	var less = $(this).attr("data-less-text");

	//Open block
    $(this).closest(".module-text").toggleClass("opened");

    //Update read more text
    if($(this).hasClass("active")) {
    	$(this).removeClass("active");
    	$(this).find(".txt").text(more);
    }
    else {
    	$(this).addClass("active");
    	$(this).find(".txt").text(less);
    }

});