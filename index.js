let homePoints = document.getElementById("home-points-text");
let guestPoints = document.getElementById("guest-points-text");

let scoreHome = 0;
let scoreGuest = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

function plusOneHome() {
  scoreHome += num1;
  homePoints.textContent = scoreHome;
}

function plusTwoHome() {
  scoreHome += num2;
  homePoints.textContent = scoreHome;
}

function plusThreeHome() {
  scoreHome += num3;
  homePoints.textContent = scoreHome;
}

//GUEST

function plusOneGuest() {
  scoreGuest += num1;
  guestPoints.textContent = scoreGuest;
}

function plusTwoGuest() {
  scoreGuest += num2;
  guestPoints.textContent = scoreGuest;
}

function plusThreeGuest() {
  scoreGuest += num3;
  guestPoints.textContent = scoreGuest;
}
