//JAVASCRIPT

var myImage = document.getElementById("castle");

var imageArray = ["img/castle1.jpg", "img/castle2.jpg", "img/castle3.jpg", 
								"img/castle4.jpg", "img/castle5.jpg"];

var imageIndex=0; 

function changeImage(){
	castle.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex >= imageArray.length) {
		imageIndex=0;
	}
}

var intervalHandle = setInterval(changeImage, 3000);

castle.onfunction = function() {
		clearInterval(intervalHandle);
}