let hour0 = document.querySelector("#hour-0");
let hour1 = document.querySelector("#hour-1");
let min0 = document.querySelector("#min-0");
let min1 = document.querySelector("#min-1");
let sec0 = document.querySelector("#sec-0");
let sec1 = document.querySelector("#sec-1");

function clock() {
  let date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();

  if (String(hours).length === 1) {
    hour0.innerText = 0;
    hour1.innerText = String(hours)[0];
  } else {
    hour0.innerText = String(hours)[0];
    hour1.innerText = String(hours)[1];
  }

  if (String(min).length === 1) {
    min0.innerText = 0;
    min1.innerText = String(min)[0];
  } else {
    min0.innerText = String(min)[0];
    min1.innerText = String(min)[1];
  }

  if (String(seconds).length === 1) {
    sec0.innerText = 0;
    sec1.innerText = String(seconds)[0];
  } else {
    sec0.innerText = String(seconds)[0];
    sec1.innerText = String(seconds)[1];
  }
}

setInterval(() => {
  clock();
}, 1000);
