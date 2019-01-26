const time = new Date();
const clock = document.querySelector('.clock');
const pic = document.querySelectorAll('.tile');
const overlay = document.querySelector('.overlay');



  overlay.style.width = window.innerWidth / 2 + "px";
  overlay.style.height = window.innerHeight / 2 + "px";

  overlay.style.top = (window.innerHeight - overlay.height) / 2 + 'px';
  overlay.style.left = (window.innerWidth - overlay.width) / 2 + 'px';




//////////////////////////////////////////////////////////////////////
function makeTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let random = Math.floor(Math.random()* 144);

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  clock.innerHTML = hours + ':' + minutes + ':' + seconds;

  if (seconds % 2 == 0){
    pic[random].style.transform = "rotateY(180deg)";
    pic[random].style.transition = "all 1s";
    document.body.backgroundColor = "black";
  }else {
    pic[random].style.transform = "rotateY(0deg)";
    pic[random].style.transition = "all 1s";
    document.body.backgroundColor = "white";
  };

}//makeTime function

setInterval(makeTime, 100);
