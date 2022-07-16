let countdown = document.querySelector(".countdown").getAttribute('class');

let text_e = "#"; //英文倒數文字
let text_t = "父親節優惠 倒數"; //中文倒數文字


var countdownbox = "";
if(countdown.indexOf('to_e') !== -1){
   countdownbox = `<div class="countdown_content"> <span> ${text_e}<span id="demo"></span></span>  </div>`;
}
if(countdown.indexOf('to_t') !== -1){
   countdownbox = `<div class="countdown_content"> <span> ${text_t}<span id="demo"></span></span>  </div>`;
}


document.querySelector(".countdown").insertAdjacentHTML("beforeend", countdownbox);
// 設定結束時間
var countDownDate = new Date("2023-6-30 23:59:59".replace(/-/g, "/")).getTime();
// Update the count down every 1 second
var x = setInterval(function () {
   // 未來出現時間
   var setnow = new Date(
    "2022-4-19 00:00:00".replace(/-/g, "/")
  ).getTime();
  // 設定現在的日期
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"


  let  countdown_text = "";
  if(countdown.indexOf('to_e') !== -1){
    countdown_text = `${days}d ${hours} hr ${minutes} m ${seconds} s `;
  }
  if(countdown.indexOf('to_t') !== -1){
    countdown_text = `${days}天${hours}時${minutes}分${seconds}秒`;
  }
  document.getElementById("demo").innerHTML = countdown_text ;


  // If the count down is over, write some text
  if(now > setnow){
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown_content").style.display = "none";
      document.querySelector(".countdown").style.display = "none";
      document.querySelector(".fixed-obj").style.display = "none";
    } else {
      document.querySelector(".countdown").style.display = "block";
    }
  } else {
     return;
  }

}, 1000);