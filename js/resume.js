//////////////스킬바//////////////
const skill = document.querySelectorAll(".each_skill");

const scrollBtnDisplay = function () {
  console.log(" window.scrollY" + window.scrollY);
  // 현정! 멀쩡하다가 가끔 66%가 나오는 이유가 뭘까? 55%도 나옴. 일단 체크

  if (window.scrollY >= 1800 && window.scrollY <= 1900) {
    for (let i = 0; i < skill.length; i++) {
      const bar = document.querySelectorAll(".progress")[i]; //스킬바

      const progress = document.getElementsByClassName("progress")[i];

      // console.log(progress)
      // console.log(progress.dataset)
      // let score = skill[i].attr
      let totalSkill = progress.dataset.percent;
      // let resolveSkill = 12
      let t = 0;
      bar.style.width = 0;

      // bar 너비
      const barAnimation = setInterval(() => {
        bar.style.width = t + "%";
        t++ >= totalSkill && clearInterval(barAnimation);
      }, 10);

      // 퍼센트 숫자
      let number = 0;
      const numberAnimation = setInterval(() => {
        progress.dataset.percent = number;
        number++ >= totalSkill && clearInterval(numberAnimation);
      }, 10);
    }
  }
};

// 스크롤 시 scrollBtnDisplay
window.addEventListener("scroll", scrollBtnDisplay);
