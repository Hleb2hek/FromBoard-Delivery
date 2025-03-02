var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
new ScrollMagic.Scene({triggerElement: "#calculator"})
		.setClassToggle("#link-1", "focus") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#advantages"})
		.setClassToggle("#link-2", "focus") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#warranty"})
		.setClassToggle("#link-3", "focus") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#reviews"})
		.setClassToggle("#link-4", "focus") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);