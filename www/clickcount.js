$(document).ready(function() {
	/* 	This code will be automatically run when the app is loading.
		This is essentially where you put all the event handlers relating to the functionality of your application 	*/
		
	$('li.clickme').bind('touchend', function() { /* When the "Click me!" button is clicked, this will get the current count, convert it to an integer (just to be sure!), add one to it and then put the result onto the counter */
		currentcount = $('li.count').html();
		currentcount = parseFloat(currentcount);
		newcount = currentcount + 1;
		$('li.count').html(newcount);
	});
	
	$('a.reset').bind('touchend', function() { /* When the "Reset" button in the toolbar is clicked, this will reset the counter back to zero. */
		$('li.count').html("0");
		navigator.notification.alert("The counter has been reset back to zero.", 
                                'Resetting counter...', 'Okay, great!');
	});
	
});