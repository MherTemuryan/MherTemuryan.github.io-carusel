window.onload = function() {
	let images = ["https://i0.wp.com/wander-lush.org/wp-content/uploads/2017/04/Yerevan.jpg?w=784&ssl=1",
				"https://rentyerevan.com/wp-content/uploads/2017/07/interesting-monuments-in-yerevan.jpg",
				"https://caucasusholidays.am/sites/default/files/Opera-%26-Ballet-Theatre-2.2.jpg",
				"https://cdn.britannica.com/85/133085-050-FF7058E4/Yerevan-peaks-Arm-background-Mount-Ararat.jpg",
				"https://www.citymetric.com/sites/default/files/styles/nodeimage/public/article_2018/02/mother_armenia.jpg?itok=m2OmvaBP",
				"http://sputnik.co.am/images/38/76/387631.jpg",
				"https://www.nationalgeographic.com/content/dam/travel/intelligent-travel/rights-exempt/files/2015/04/yerevan-cascade-stairs-590.ngsversion.1513911532531.adapt.1900.1.jpg",
				];
				
	let prev = document.getElementById("prev");
	let next = document.getElementById("next");
	let image = document.getElementById("image");
	let play = document.getElementById("play");
	let stop = document.getElementById("stop");
	let num = 0;
	let timerId;
	
	
	next.addEventListener("click", function() {
		num++;
		if(num >= images.length) {
			num = 0;
		}
		image.src = images[num];
	})
	
	prev.addEventListener("click", function() {
		num--;
		if(num < 0) {
			num = images.length-1;
		}
		image.src = images[num];
	})
	
	
	function playSlider() {
		num++;
		if(num >= images.length) {
			num = 0;
		}
		image.src = images[num];
	}
	
	play.addEventListener("click",function() {
		timerId = setInterval(playSlider,1500);
	})

	stop.addEventListener("click",function() {
		clearInterval(timerId);
	})


}






















