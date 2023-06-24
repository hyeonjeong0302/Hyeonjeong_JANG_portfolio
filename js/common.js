// this.checkCount(req.cookies.connect_time, res);

// exports.checkCount = (connect_time, res) => {
//   let today = moment();
//   if (connect_time) {
//     if (moment(connect_time).isAfter(today, 'day')) {
//       res.cookie('connect_time', today.format("YYYY-MM-DD"), {
//         maxAge: 60 * 60 * 24 * 1000
//       });
//       this.connectCount();
//     } else {
//       often.log('pass');
//     }
//   } else {
//     res.cookie('connect_time', today.format("YYYY-MM-DD"), {
//       maxAge: 60 * 60 * 24 * 1000
//     });
//     this.connectCount();
//   }


// exports.connectCount = () => {
//   async function start() {
// 	//데이터베이스 로직
//   }
//   start();
// }}

//다크모드

// const count = 0;
// const mode =  document.getElementById("mode");
// document.querySelector(".header_right .theme").addEventListener("click", function(){
//   count += 1;
//   if(count % 2 == 1){
//     mode.classList.add("dark_mode");
//   } else{
//     mode.classList.remove("dark_mode");
//   }
// });
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