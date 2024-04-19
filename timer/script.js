d1 = document.querySelector("#d1");
d2 = document.querySelector("#d2");
d3 = document.querySelector("#d3");
d4 = document.querySelector("#d4");
d5 = document.querySelector("#d5");
d6 = document.querySelector("#d6");
play = document.querySelector("#play");
reset = document.querySelector("#reset");

let p = false;

play.addEventListener("click", function () {
  if (p == false) {
    play.innerHTML = "&#x21c8;";
    play.style.backgroundColor = "orange";
    p = true;
  } else {
    play.innerHTML = "&#x27A7;";
    play.style.backgroundColor = "green";
    p = false;
  }
});

reset.addEventListener("click", function () {
  d1.innerText = 0;
  d2.innerText = 0;
  d3.innerText = 0;
  d4.innerText = 0;
  d5.innerText = 0;
  d6.innerText = 0;
});

function timer() {
  if (p == false) {
    return;
  }
  if (d1.innerText == 5 && d2.innerText == 9) {
    d1.innerText = 0;
    d2.innerText = 0;
    d3.innerText = 0;
    d4.innerText = 0;
    d5.innerText = 0;
    d6.innerText = 0;
  } else if (d2.innerText == 9) {
    d1.innerText++;
    d2.innerText = 0;
  } else if (d3.innerText == 5 && d4.innerText == 9) {
    d3.innerText = 0;
    d4.innerText = 0;
    d2.innerText++;
  } else if (d4.innerText == 9) {
    d3.innerText++;
    d4.innerText = 0;
  } else if (d5.innerText == 5 && d6.innerText == 9) {
    d5.innerText = 0;
    d6.innerText = 0;
    d4.innerText++;
  } else if (d6.innerText == 9) {
    d5.innerText++;
    d6.innerText = 0;
  } else {
    d6.innerText++;
  }
}

window.setInterval(timer, 250);
