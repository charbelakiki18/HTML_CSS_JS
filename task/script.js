text = document.querySelector("#text");
p = document.querySelector("#p");
task_container = document.querySelector("#tasks");

p.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let t = document.createElement("div");
  t.classList.add("t");

  t.innerText = text.value;
  text.value = "";
  task.appendChild(t);

  task_container.appendChild(task);

  let check = document.createElement("div");
  check.classList.add("check");
  check.innerHTML = "&#x2714;";
  task.appendChild(check);

  let del = document.createElement("div");
  del.classList.add("del");
  del.innerHTML = "&#x2715;";
  task.appendChild(del);

  check.addEventListener("click", function () {
    check.parentElement.firstChild.innerHTML =
      "<del>" + check.parentElement.firstChild.innerText + "</del>";
  });

  del.addEventListener("click", function () {
    del.parentElement.remove();
  });
});
