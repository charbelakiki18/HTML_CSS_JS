let cell1 = document.querySelector("#cell1");
let cell2 = document.querySelector("#cell2");
let cell3 = document.querySelector("#cell3");
let cell4 = document.querySelector("#cell4");
let cell5 = document.querySelector("#cell5");
let cell6 = document.querySelector("#cell6");
let cell7 = document.querySelector("#cell7");
let cell8 = document.querySelector("#cell8");
let cell9 = document.querySelector("#cell9");
let win = document.querySelector("#winner");
let player = 1;
let counter = 0;

cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

cell1.addEventListener("click", function () {
  clicked(cell1);
});
cell2.addEventListener("click", function () {
  clicked(cell2);
});
cell3.addEventListener("click", function () {
  clicked(cell3);
});
cell4.addEventListener("click", function () {
  clicked(cell4);
});
cell5.addEventListener("click", function () {
  clicked(cell5);
});
cell6.addEventListener("click", function () {
  clicked(cell6);
});
cell7.addEventListener("click", function () {
  clicked(cell7);
});
cell8.addEventListener("click", function () {
  clicked(cell8);
});
cell9.addEventListener("click", function () {
  clicked(cell9);
});

function clicked(cell) {
  if (counter > 8) {
    reset();
  } else if (win.innerText != "") {
    win.innerText = "";
  } else {
    if (player == 1 && cell.innerText == "") {
      cell.innerText = "X";
      if (check()) {
        winner();
      } else {
        player = 2;
        counter++;
      }
    } else if (player == 2 && cell.innerText == "") {
      cell.innerText = "O";
      if (check()) {
        winner();
      } else {
        player = 1;
        counter++;
      }
    }
  }
}

function clearCells() {
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  cell9.innerText = "";
}

function check() {
  if (
    (cells[0].innerText == cells[1].innerText &&
      cells[1].innerText == cells[2].innerText &&
      cells[0].innerText != "") ||
    (cells[3].innerText == cells[4].innerText &&
      cells[4].innerText == cells[5].innerText &&
      cells[3].innerText != "") ||
    (cells[6].innerText == cells[7].innerText &&
      cells[7].innerText == cells[8].innerText &&
      cells[6].innerText != "") ||
    (cells[0].innerText == cells[3].innerText &&
      cells[3].innerText == cells[6].innerText &&
      cells[0].innerText != "") ||
    (cells[1].innerText == cells[4].innerText &&
      cells[4].innerText == cells[7].innerText &&
      cells[1].innerText != "") ||
    (cells[2].innerText == cells[5].innerText &&
      cells[5].innerText == cells[8].innerText &&
      cells[2].innerText != "") ||
    (cells[0].innerText == cells[4].innerText &&
      cells[4].innerText == cells[8].innerText &&
      cells[0].innerText != "") ||
    (cells[2].innerText == cells[4].innerText &&
      cells[4].innerText == cells[6].innerText &&
      cells[2].innerText != "")
  ) {
    return true;
  }

  return false;
}

function winner() {
  win.innerText = "Player " + player + " wins.";
  reset();
}

function reset() {
  counter = 0;
  clearCells();
  player = 1;
}
