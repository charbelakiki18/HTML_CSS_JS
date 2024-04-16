btn1 = document.querySelector(".btn");
al = document.querySelector(".alert");
btn2 = document.querySelector(".btn2");

btn1.addEventListener("click", function () {
  al.style.display = "flex";
});
btn2.addEventListener("click", function () {
  al.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === al) {
    al.style.display = "none";
  }
});
