
function drawBall(){

	var ballArray = [];

	for (var i = 1; i<=69; i++){
		ballArray.push(i);
	}

	var ballPit = ballArray;
	var oneBall = 0;
	var theBalls = document.getElementsByClassName("roll");

	for(var j = 0; j < theBalls.length; j++){
		var ranTop = ballPit.length;
		oneBall = Math.floor(Math.random()*ranTop);
		theBalls[j].innerHTML = ballArray[oneBall];
		ballArray.splice(oneBall, 1);
		console.log(ballArray);

	}

	var pPlay = document.getElementById("pow");
	pPlay.innerHTML = Math.floor(Math.random()*26+1);
}


document.getElementById("pressme").addEventListener("click", drawBall);