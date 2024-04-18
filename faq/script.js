let btn1 = document.querySelector("#tt1");
let btn2 = document.querySelector("#tt2");
let btn3 = document.querySelector("#tt3");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");

btn1.addEventListener("click", function () {
  if (c1.style.display == "block") {
    s1.innerText = "+";
    c1.style.display = "none";
  } else {
    s1.innerText = "-";
    c1.style.display = "block";
  }
});

btn2.addEventListener("click", function () {
  if (c2.style.display == "block") {
    s2.innerText = "+";
    c2.style.display = "none";
  } else {
    s2.innerText = "-";
    c2.style.display = "block";
  }
});

btn3.addEventListener("click", function () {
  if (c3.style.display == "block") {
    s3.innerText = "+";
    c3.style.display = "none";
  } else {
    s3.innerText = "-";
    c3.style.display = "block";
  }
});
