$(document).ready(function () {
	var template = Handlebars.compile($("#menu-template").html()),
		breakfast = window.menuData.breakfast,
		lunch = window.menuData.lunch,
		filteredPage,
		menu = {};

	menu.pages = [
		{
			title: "Breakfast",
			sections: [breakfast.bagels, breakfast.pancakes, breakfast.omelettes, breakfast.favorites, breakfast.sides, breakfast.sandwiches, breakfast.beverages]
		},
		{
			title: "Lunch",
			sections: [lunch.sandwiches, lunch.salads, lunch.burgers, lunch.burgers_byob, lunch.chickenWings, lunch.hotDogs, lunch.sides, lunch.kids, lunch.beverages]
		}
	];

	var lastRowClassWasStriped = false;
	Handlebars.registerHelper('stripeRow', function () {
		lastRowClassWasStriped = !lastRowClassWasStriped;

		if(!lastRowClassWasStriped) {
			return "";
		} else {
			return "stripe";
		}
	})

	Handlebars.registerHelper('formatPrice', function (price) {
		// return "Coming Soon!";

		if (price === null || typeof price === "undefined") {
			return "";
		}
		else if (typeof price === "string") {
			return price;
		}
		else if (typeof price === "number") {
			//Only print the decimals if we have to.
			// if (price === Math.round(price)) {
			// 	return price;
			// }
			// else {
			// 	return price.toFixed(2);
			// }

			//always print the decimals
			return price.toFixed(2);
		}
		else {
			return price;
		}
	});

	$("#content-text").append(template(menu));

	//This isn't needed if there's actually a menu to download
	// $("#menu-download a").click(function(event) {
	// 	event.preventDefault();
	// 	alert("Coming Soon!");
	// })
});