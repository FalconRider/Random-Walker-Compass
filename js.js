


function chooseAPicture(){

	var myPictures = [
	"Images/back.gif",
	"Images/fwd.gif",
	"Images/right.gif",
	"Images/left.gif",
	"Images/backright.gif",
	"Images/backleft.gif",
	"Images/fwdright.gif",
	"Images/fwdleft.gif",
	];


var randomNum = Math.floor((Math.random()*myPictures.length));

	document.getElementById("pic").src = myPictures[randomNum];
	

}


