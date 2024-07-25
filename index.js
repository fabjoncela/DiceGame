function rollDice() {
    // Create the variable and set it to a random number between 1 and 6
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage = "dice" + randomNumber1 + ".png";
    let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png
  
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", "./" + randomImageSource);
  
    // Image 2 made the code shorter
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "Draw!📍";
    }
  }
  
  // Add event listener to the invisible button
  document.getElementById("refreshButton").addEventListener("click", rollDice);
  
  // Initial roll on page load
  rollDice();
  
