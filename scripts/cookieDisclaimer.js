var cookieDisclaimer = function () {
	$("#cookieDisclaimer button").click(function () {
		var date = new Date();
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate() + 365);
		document.cookie = "useCookies=" + date + "; expires=" + expireDate + "; path=/";
		$("#cookieDisclaimer").fadeOut("slow");
	});
};

$(function () {
	cookieDisclaimer();
})