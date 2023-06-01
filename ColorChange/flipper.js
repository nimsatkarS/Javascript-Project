const colors = ["pink", "","rgba(133,123,200)","#f15025","hsl(205, 72%, 37%)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function() {
  const randomNumber = getRandomNumber();
  //console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}