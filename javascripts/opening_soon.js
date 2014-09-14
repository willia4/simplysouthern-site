$(document).ready(function () {
	setTimeout(function() {
		$("#watermark-container").addClass("out");

		setTimeout(function() {
			$("#watermark-container").css({"display": "none"});
		}, 2000);

	}, 800);
});