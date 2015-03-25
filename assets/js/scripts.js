
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $('.top-content').backstretch("assets/img/Background.jpg");
    $('.single-feature-bg').backstretch("assets/img/Background.jpg");
	$('#app-store-0').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'app-store');
	});
	$('#app-store-1').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'app-store');
	});
    
});

