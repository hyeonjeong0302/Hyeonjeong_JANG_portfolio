/*
//다크모드
let count = 0;
const mode = document.getElementById("mode");
document.querySelector(".header_right .theme").addEventListener("click", function () {
  count ++;
  if (count % 2 == 1) {
    mode.classList.add("dark_mode");
  } else {
    mode.classList.remove("dark_mode");
  }
});
*/

const themeBtn = document.querySelector(".theme_btn");
const userTheme = localStorage.getItem("theme");
let status = false;

// 처음 이용객의 테마를 읽음
document.addEventListener("DOMContentLoaded", () => {
  if (userTheme === "night") {
    clicknightMode();
  } else if (userTheme === "day") {
    clickdayMode();
  }
});

// 버튼클릭
themeBtn.addEventListener("click", () => {
  if (status === false) {
    clicknightMode();
  } else if (status === true) {
    clickdayMode();
  }
});

function clicknightMode() {
  localStorage.setItem("theme", "night");
  themeBtn.innerHTML =
    "<img src='../images/night_mode.png'>";
  document.documentElement.setAttribute("data-theme", "night");
  status = true;
}
function clickdayMode() {
  localStorage.setItem("theme", "day");
  themeBtn.innerHTML = "<img src='../images/day_mode.png'>";
  document.documentElement.setAttribute("data-theme", "day");
  status = false;
}