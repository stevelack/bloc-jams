var animatePoints = function () {
 
        var points = document.getElementsByClassName('point');
	
		var animation = function (load) {
				points[load].style.opacity = 1;
				points[load].style.transform = "scaleX(1) translateY(0)";
				points[load].style.msTransform = "scaleX(1) translateY(0)";
				points[load].style.WebkitTransform = "scaleX(1) translateY(0)";
			};
 
		for (var i = 0; i < points.length; i++) {
		animation (i);
	}
	};