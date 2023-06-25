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


