const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

// incrementing the percentage

let index = 0;
const updateLoad = function () {
  counterEl.innerText = index + "%";
  barEl.style.width = `${index}%`;
  index++;
  if (index < 101) {
    setTimeout(updateLoad, 500);
  }
};

updateLoad();
