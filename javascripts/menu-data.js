(function () {
	if(window.menuData === undefined) {
		window.menuData = {}
	}

	window.menuData.breakfast = {};
	window.menuData.lunch = {};

	window.menuData.tag = {
		tagline : "At Simply Southern Dining, we pride ourselves on offering the finest ingredients and doing our best to make everything we serve from scratch",
		address : "2525 S. Cashua Dr.",
		phone : "843-799-5253",
		web : "simplysoutherndining.com"
	};
	
	var breakfast = menuData.breakfast,
		lunch = menuData.lunch;

	breakfast.bagels = {
		title: "Bagels",
		subtitle: "Made from scratch daily with no preservatives<br/><br/>Bagels by the dozen?<br/>Please pre-order",
		items: [
			{title: "Plain", price: 1.29},
			{title: "Onion", price: 1.29},
			{title: "Garlic", price: 1.29},
			{title: "Poppy Seed", price: 1.29},
			{title: "Sesame", price: 1.29},
			{title: "Everything", price: 1.29},
			{sectionBreak: "Speciality Bagels"},
			{title: "Cinnamon Dipped", price: 1.69},
			{title: "Cinnamon Raisin", price: 1.69},
			{title: "Blueberry", price: 1.69},
			{title: "Cheddar", price: 1.69},
			{sectionBreak: "Cream Cheese"},
			{title: "Plain", price: 1.20},
			{title: "Veggie", price: 1.35},
			{title: "Strawberry", price: 1.35},
			{title: "Maple Walnut", price: 1.35},
			{title: "Fat Free", price: 1.35}
		]
	};

	breakfast.omelettes = {
		title: "Omelettes",
		subtitle: "Served with grits or chopped potatoes &amp; onions and your choice of toast or made-from-scratch biscuits",
		items: [
			{ title: "2 Egg Omelette with Cheese", price: 4.79 },
			{ title: "2 Egg Omelette with Cheese and Bacon, Ham, or Sausage", price: 5.99 },
			{ title: "2 Egg Western Omelette with Cheese, Bell Peppers, Onion, and Ham", price: 6.29 }
		]
	};

	breakfast.sandwiches = {
		title: "Breakfast Sandwiches",
		subtitle: "Savory classics served on your choice of bread or made-from-scratch biscuits<br/><br/>" +
				  "<b>Make it a bagel sandwich for 0.79</b>",
		items: [
			{title: "Egg Sandwich", price: 1.69},
			{title: "Egg and Cheese Sandwich", price: 2.59},
			{title: "Bacon, Egg, and Cheese Sandwich", price: 4.09},
			{title: "Ham Sandwich", price: 2.29},
			{title: "Fried Bologna Sandwich", price: 2.29},
			{title: "Ham, Fried Bologna or Sausage with Egg and Cheese Sandwich", price: 4.09}
		]
	};

	breakfast.favorites = {
		title: "Breakfast Favorites",
		subtitle: "Served with grits or chopped potatoes &amp; onions and your choice of toast or made-from-scratch biscuits",
		items: [
			{title: "1 Egg", price: 2.99},
			{title: "1 Egg with Bacon, Sausage, Ham, or Fried Bologna", price: 3.99},
			{title: "2 Eggs", price: 3.89},
			{title: "2 Eggs with Bacon, Sausage, Ham, or Fried Bologna", price: 4.89},
			{title: "2 made-from-scratch biscuits smothered in rich milk gravy", price: 3.60},
		]
	}

	breakfast.sides = {
		title: "Sides",
		items: [
			{title: "Egg", price: 0.85},
			{ title: "Grits", price: 1.50} /*,
					extras: [
						{description: "Add cheese", price: 0.55}
					]
			}*/,
			{ title: "Chopped Potatoes &amp; Onions", price: 3.99},
			{ title: "Biscuit", price: 0.80},
			{ title: "2 slices of Toast", price: 0.80 },
			{ title: "2 pieces of bacon, sausage, ham, or fried bologna", price: 2.30}
		]
	};

	breakfast.pancakes = {
		title: "Buttermilk Pancakes",
		items: [
			{title: "2 buttermilk pancakes", price: 3.00},
			{title: "2 buttermilk pancakes with 2 eggs", price: 4.69},
			{title: "2 buttermilk pancakes served with 2 eggs and bacon, sausage, or fried bologna", price: 6.79}
		]
	};

	breakfast.beverages = {
		title: "Beverages",
		items: [
			{ title: "Coffee (free refills)", price: 1.99},
			{ title: "Coffee-To-Go 12oz", price: 1.49},
			{ title: "Coffee-To-Go 16oz", price: 1.69},
			{ title: "Hot tea", price: 1.49},
			{ title: "Hot chocolate", price: 1.49},
			{ title: "Juice", price: 1.49},
			{ title: "Milk", extras: [
				{description: "Small 8oz", price: 0.99},
				// {description: "Medium", price: 1.29},
				{description: "Large 16oz", price: 1.99}
			]},
			{ title: "Sweet Tea (free refills)", price: 1.69},
			{ title: "Fountain drinks", price: 1.89},
			{ title: "Bottled water", price: 1.49}
		]
	};

	lunch.beverages = breakfast.beverages;
	
	lunch.salads = {
		title: "Salads",
		subtitle: "All served on a bed of mixed greens and your choice of thousand island, ranch, french, bleu cheese, or honey mustard dressings",
		items: [
			{ title: "House Salad", description: "Cucumbers, tomatoes, cheddar cheese, diced egg, and croutons", price: 6.99 },
			{ title: "Chef Salad", description: "Cucumbers, tomatoes, ham, turkey, bacon, cheddar cheese, and croutons", price: 7.99 },
			{ title: "Fried Chicken Salad", description: "Lightly-breaded fried chicken with cucumbers, tomatoes, cheddar cheese, and croutons", price: 7.99 },
			{ title: "Grilled Chicken Salad", description: "Grilled chicken with cucumbers, tomatoes, cheddar cheese, and croutons", price: 7.99 }
		]
	};

	lunch.hotDogs = {
		title: "Hot Dogs",
		subtitle: "100% beef franks<br/><br/>" + 
				  "<b>Add house cut fries for 2.49</b>",
		items: [
			{title: "Simply plain dog", description: "Classic grilled hot dog", price: 2.99},
			{title: "Palmetto Chili dog", description: "Grilled hot dog topped with our homemade chili", price: 3.99},
			{title: "Kicking Good Slaw dog", description: "Grilled hot dog topped with our homemade chili and cole slaw", price: 3.99}
		]
	};
	
	lunch.entrees = {
		title: 'Simply Southern Entrees',
		subtitle: 'Choice of 1 entree, 1 vegetable, 1 side & sweet tea for <b style="important">$7.49</b><br/><br/>Served with made from scratch bisquits',
		items: [
			{sectionBreak: "Entrees"},
			{title: "Fried chicken", description: "Hand-breaded fried chicken served with your choice of side and vegetable"},
			{title: "Baked ham", description: "Baked ham served with your choice of side and vegetable"},
			{title: "BBQ chicken", description: "BBQ chicken served with your choice of side and vegetable"},
			{sectionBreak: "Entree Sides"},
			{title: "Rice & Gravy"},
			{title: "Mac &amp; Cheese"},
			{title: "Macaroni Salad"},
			{title: "Mashed Potatoes"},
			{title: "French Fries"},
			{sectionBreak: "Entree Vegetables"},
			{title: "Butter beans"},
			{title: "Black Eyed Peas"},
			{title: "Corn"},
			{title: "Cabbage"},
			{title: "Tomato & Okra"},
			{title: "Pinto beans"},
			{title: "Green beans"},
			{title: "Cole slaw"}
		]
	};
		
	lunch.burgers = {
		title: "Gourmet Burgers",
		subtitle: "Premium grilled all-beef patties with lettuce, tomato, pickle, and onion on a toasted bun <br/><br/> Can be customized with ketchup, mustard, and mayonaise <br/><br/>" + 
				  "<b>Add house cut fries for 2.49</b>",
		items: [
			{title: "Second Loop Classic Burger" /*, description: "With our without melted American cheese."*/, price: 4.99,
				extras: [
					{description: "Add cheese", price: .75}
					// {description: "Basket", price: 8},
					// {description: "Burger only", price: 6}
				]
			},
			{title: "The Awesome Riley Pimento Cheese Burger", description: "Smothered in our homemade pimento cheese and topped with 2 pieces of bacon", price: 5.99,
				extras: [
					// {description: "Basket", price: 8},
					// {description: "Burger only", price: 6}
				]
			},
			{title: "Sweet as Carys Pineapple Burger", description: "Topped with a teriyaki-marinated pineapple, a homemade onion ring, and a slice of swiss cheese", price: 5.99, 
					extras: [
						// {description: "Basket", price: 8},
						// {description: "Burger only", price: 6},
						// {description: "Add avocado", price: 1}
					]},
			{title: "Swamp Fox Chili Cheese Burger", description: "Topped with homemade chili, cheddar cheese, and sliced onion", price: 5.99,
				extras: [
					// {description: "Basket", price: 8},
					// {description: "Burger only", price: 6}
				]
			},
			{title: "Magnolia Mushroom Swiss Burger", description: "Topped with saut&eacute;ed mushrooms, grilled onions, 2 slices of bacon, and swiss cheese", price: 6.99,
					extras: [
						// {description: "Basket", price: 8},
						// {description: "Burger only", price: 6}
					]
				},
			{title: "Five Points at <br/>5 O'Clock Double Decker Burger", description: "Two grilled patties with American cheese", price: 8.99,
				extras: [
					// {description: "Basket", price: 8},
					// {description: "Burger only", price: 6}
				]
			},
			{title: "&frac14; Pound Classic Burger", price: 3.29,
				extras: [
					{description: "Add cheese", price: 0.75}
				]
			}
		]
	};

	lunch.burgers_byob = {
		title: "Build Your Own Burger",
		subtitle: "Start with any of our burgers above and make it your own",
		items: [
			// {title: "Extra patty", price: 3.00},
			{title: "Cheese (Provolone, Swiss, Mozzarella, Cheddar, Pepper Jack, American)", price: 0.75},
			{title: "Pimento cheese", price: 1.30},
			{title: "Goat cheese spread", price: 1.30},
			{title: "Saut&eacute;ed or grilled mushrooms", price: 0.70},
			{title: "Grilled onions", price: 0.65},
			{title: "Grilled pineapple", price: 0.60},
			{title: "Grilled peppers", price: 0.85},
			{title: "Cole slaw", price: 0.60},
			
			{title: "Avocado", price: 0.70},
			{title: "Bacon - 2 strips", price: 2.30},
			{title: "Fried egg", price: 0.85},
			{title: "Chili", price: 0.85},
			{title: "Homemade onion ring", price: 0.75}
		]
	};

	lunch.sandwiches = {
		title: "Sandwiches",
		subtitle: "Sandwiches can be customized with lettuce, tomatoes, pickels, onions, ketchup, mustard, and mayonaise<br/><br/>" + 
				  "Served on your choice of grilled bread or toasted bagel<br/><br/>" +
				  "<b>Add house cut fries for 2.49</b>",
		items : [
			{title: "Cashua Fried Chicken Sandwich", description: "A lightly hand-breaded chicken breast topped with bacon and our homemade onion ring", price: 4.50},
			{title: "Celebration Grilled Chicken Sandwich", description: "A tender &amp; juicy grilled chicken breast topped with swiss cheese, bacon, lettuce, and tomato", price: 4.50},
			// {title: "Grilled Fresh Cheesesteak", description: "Ribeye steak, sliced thin and grilled, with grilled onions and peppers &mdash; topped with melted provolone", price: 4.99},
			{title: "Crazy good pulled pork sandwich", description: "Tender pulled pork with our very own secret BBQ sauce, topped with our homemade coleslaw", price: 5.99},
			{title: "Turkey So Sweet", description: "Sliced turkey, cheese of your choice, grilled onion, grilled peppers, avocado, and our homemade honey mustard", price: 4.99},
			{title: "Simply Southern \"BLTA\" &mdash; Bacon, Lettuce, Tomato, &amp; Avocado", description: "Toasted bread with lettuce, thick-sliced tomato, bacon, and avocado", price: 4.50},
			{title: "Southern Classic Fried Bologna and Cheese", description: "Thick-sliced fried bologna covered in cheddar cheese", price: 3.99},
			{title: "Deluxe Grilled Cheese", description: "Cheddar, swiss, and provolone cheese served between two pieces of buttered and grilled bread", price: 3.99},
			{sectionBreak: "Great on bagels!"},
			{title: "Veggie Deluxe", description: "Choice of cream cheese, onion, tomato and &mdash; served on your choice of bagel", price: 3.99},
			{title: "New Yorker", description: "Lox, cream cheese, onion, tomato, and capers &mdash; served on your choice of bagel", price: 4.99},
			{title: "Lox and cream cheese", description: "Lox and cream cheese &mdash; served on your choice of bagel", price: 3.99}
		]
	};

	lunch.chickenWings = {
		title: "Wings",
		subtitle: "<b>Add house cut fries for 2.49</b>",
		items: [
			{title: "Wings - 5pc", price: "5.99", extras: [
				{description: "Fried"},
				{description: "Teriyaki"},
				{description: "BBQ"},
				{description: "Hot Sauce"},
			]},
			// {title: "Teriyaki"},
			// {title: "BBQ"},
			// {title: "Hot Sauce"},
			{sectionBreak: "Dipping Sauces"},
			{title: "Bleu Cheese"},
			{title: "Ranch"},
			{title: "Honey Mustard"}

			// {title: "Teriyaki, BBQ Wings", price: 7.77},
			// {title: "Hot Wings", price: 7.77}
		]
	}
	// lunch.bagelSandwiches = {
	// 	title: "Bagel Sandwiches",
	// 	subtitle: 
	// };

	lunch.sides = {
		title: "Sides",
		items: [
			{title: "Side salad", price: 2.99},
			{title: "House cut fries", price: 2.99},
			{title: "Cole slaw", price: 2.50},
			{title: "Mashed potatoes", price: 2.75},
			{title: "Chili Fries", price: 3.75}, 
			{title: "Chili Cheese Fries", price: 4.50},
			{title: "Sweet Potato Fries", price: 3.50},
			{title: "Homemade Onion Rings", price: 3.25},
			{title: "Grilled squash and onions", price: 3.00},
			{title: "Plain Baked Potato", price: 3.00},
			{title: "Loaded Baked Potato", price: 3.99, description: "Bacon, cheese, butter, and sour cream"}
		]
	};

	lunch.kids = {
		title: "Kids Menu",
		subtitle: "Includes house cut french fries or a vegetable and a drink",
		items: [
			{title: "Child's Hamburger", price: 4.99, extras: [
				{description: "Add cheese", price: 0.50}
				// {description: "Add lettuce, tomato, pickle, and onion upon request"}
			]},
			{title: "Grilled cheese", price: 4.79},
			{title: "Fried or Grilled Chicken Strips", price: 5.99},
			{title: "Hot Dog", price: 4.99},
			{title: "Peanut Butter &amp; Jelly", price: 3.99}
		]
	};

	/**
		Takes a section from above (say, lunch.sandwiches) and splits it into two sections at a given item title. 
		
		The return value from this function is an object with properties, "before" and "after". The before property
		is the section before the split, the after is the seciton after the split. 

		The passed-in section will be updated to be screenOnly while the returned before and after objects will be 
		set to be printOnly. The after object will not contain a subtitle. 

		If found, the item named by itemTitle will be the last item in before. 
	*/
	menuData.splitSectionAt = function (section, itemTitle) {
		var items = section.items,
			count = items.length,
			i, item,
			before = [], after = [], 
			work,
			r; 

			//We're going to split the section.items array into two new arrays, before and after. 
			//To do this, have a variable, work, which starts by aliasing before. Once we've found
			//the item to split at, change work to alias after. Push new items into work as they're found
			//so they'll end up in the correct array based on where work is pointing. 

			work = before;
			for(i = 0; i < count; i++) {
				item = items[i];
				work.push(item);

				//switch arrays after pushing the pivot item so the item itself ends up in before.
				if(item.title === itemTitle) {
					work = after;
				}
			}

			r = {
				before: {
					title: section.title,
					subtitle: section.subtitle,
					items: before
				},
				after: {
					title: section.title,
					subtitle: section.subtitle,
					items: after
				}
			};

			section.screenOnly = true;
			r.before.printOnly = true;
			r.after.printOnly = true;
			r.after.subtitle = null;

			return r;
	}
})();
