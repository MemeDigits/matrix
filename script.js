var digitLayer = document.getElementById('digit-layer');
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var digitCount = Math.floor(windowWidth / 20);

for (var i = 0; i < digitCount; i++) {
  var digitElement = document.createElement('span');
  digitElement.classList.add('digit');

  if (Math.random() < 0.5) {
    digitElement.innerText = '69';
    digitElement.classList.add('digit-69');
  } else {
    digitElement.innerText = '420';
    digitElement.classList.add('digit-420');
  }

  digitElement.style.left = (i * 20) + 'px';
  digitElement.style.top = Math.floor(Math.random() * windowHeight) + 'px';
  digitElement.style.animationDelay = (Math.random() * 6) + 's';

  var fallingSpeed = Math.floor(Math.random() * 10) + 1;
  digitElement.style.animationDuration = (60 / fallingSpeed) + 's';

  digitLayer.appendChild(digitElement);
}
