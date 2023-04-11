let timer;
let x =59;
countdown();
function countdown(){
  document.getElementById('timer').innerHTML = x;
  x--;
  if (x<0){
    clearTimeout(timer);
    alert('Вы победили в конкурсе!');
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}