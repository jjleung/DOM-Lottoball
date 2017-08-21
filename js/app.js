var numbers = [23, 8, 3, 55, 68];

//console.log(numbers);

function winnah(){
  var randomNum = numbers[Math.floor(Math.random()* numbers.length)];
  var numBox = document.createElement("div");
  numBox.className = "names";
  numBox.innerHTML = randomNum;
  main.appendChild(numBox);
  
}

setInterval(winnah, 3000)