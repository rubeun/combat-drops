/*
	Espresso Bar Slot Machine JS
	Date: 9/5/2016
	Author: Rubeun Tan
	Description: 	
		A "slot machine" that when a button is clicked, randomly spins and stops 3 "wheels". If each wheel has the ingredients for a beverage,
		the beverage associated with those ingredients is "dispensed". Implemented by using 3 instances of Carousel3D plugin that rotate to
		different ingredients based on random generated numbers from 1 to 3. 
	Plugins: 
		Carousel3D (http://www.jqueryscript.net/demo/Simple-jQuery-Carousel-Plugin-With-3D-Rotating-Effects-Carousel3d/)
*/

$(document).ready(function() {

	// Button click calls function pullHandle
	$('#dispense-beverage').on("click", function() { 
		pullHandle();
	});

	// Carousel Configurations
	$('#dispenser-reel1').carousel3d({
		perspective: 500, // Specify carousel's perspective value.
		duration: 1000, // Time of transition.
		width: 400, // Carousel width.
		progress: false, // The flag for displaying indicator or not.
		controller: false // The flag for displaying contoroller or not.
	});
	
	$('#dispenser-reel2').carousel3d({
		perspective: 500, // Specify carousel's perspective value.
		duration: 1000, // Time of transition.
		width: 400, // Carousel width.
		progress: false, // The flag for displaying indicator or not.
		controller: false // The flag for displaying contoroller or not.
	});
	
	$('#dispenser-reel3').carousel3d({
		perspective: 500, // Specify carousel's perspective value.
		duration: 1000, // Time of transition.
		width: 400, // Carousel width.
		progress: false, // The flag for displaying indicator or not.
		controller: false // The flag for displaying contoroller or not.
	});
    
});


// Function pullHandle to generate random ingredients & dispense beverage if ingredients match 
function pullHandle(){
	var reel1, reel2, reel3;
	
	//console.log("Handle pulled - " + beverage);

	$('#dispenser-display').html("Ingredients Mismatch No Beverage :(");					


	// Scroll Page Down to Focus on Vending Machine
	//$('html, body').animate({scrollTop: 1600}, 2000);
	
	// Generate random number for first reel. 1: Coffee Maker, 2: Teapot, 3: Espresso Machine		
	reel1 = Math.floor(Math.random() * 3) + 1
	
	if (reel1 === 1) {
		// Set Reel 1 to Coffee Maker
		$('#dispenser-reel1').carousel3d('move', 1);
	} else if (reel1 === 2) {
		// Set Reel 1 to Teapot
		$('#dispenser-reel1').carousel3d('move', 2);
	} else if (reel1 == 3){
		// Set Reel 1 to Espresso Machine
		$('#dispenser-reel1').carousel3d('move', 3);
	}	


	// Generate random number for second reel. 1: Coffee Filter, 2: Tea Strainer, 3: Espresso Tamper
	reel2 = Math.floor(Math.random() * 3) + 1

	if (reel2 === 1) {
		// Set Reel 1 to Coffee Maker
		$('#dispenser-reel2').carousel3d('move', 1);
	} else if (reel2 === 2) {
		// Set Reel 1 to Teapot
		$('#dispenser-reel2').carousel3d('move', 2);
	} else if (reel2 == 3){
		// Set Reel 1 to Espresso Machine
		$('#dispenser-reel2').carousel3d('move', 3);
	}	
	
	// Generate random number for 3rd reel. 1: Coffee Grounds, 2: Loose Tea, 3: Espresso Beans	
	reel3 = Math.floor(Math.random() * 3) + 1

	if (reel3 === 1) {
		// Set Reel 1 to Coffee Maker
		$('#dispenser-reel3').carousel3d('move', 1);
	} else if (reel3 === 2) {
		// Set Reel 1 to Teapot
		$('#dispenser-reel3').carousel3d('move', 2);
	} else if (reel3 == 3){
		// Set Reel 1 to Espresso Machine
		$('#dispenser-reel3').carousel3d('move', 3);
	}	

	console.log("Reel1:"+reel1+" Reel2:"+reel2+" Reel3:"+reel3);
	
	// If all 3 reels match
	if((reel1 === reel2) && (reel2 === reel3)) {
			
		if (reel1 === 1) {
			$('#dispenser-display').html("Ingredients Match  Dispensing Coffee").addClass('blink');						
		} else if (reel1 === 2) {
			$('#dispenser-display').html("Ingredients Match  Dispensing Tea").addClass('blink');
		} else if (reel1 === 3) {
			$('#dispenser-display').html("Ingredients Match  Dispensing Espresso").addClass('blink');		
		}
		$('span#dispenser-door img').fadeIn(1000);	
	} else {
		$('span#dispenser-door img').fadeOut(1000);			
	}
	
	
	
}    