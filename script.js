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
  digitElement.style.top = -(Math.floor(Math.random() * 500) + 100) + 'px';
  
  var shadowCount = Math.floor(Math.random() * 4);
  var shadowString = '';

  for (var j = 1; j <= shadowCount; j++) {
    shadowString += j * 2 + 'px ' + j * 2 + 'px 4px #0F0';
    if (j < shadowCount) {
      shadowString += ', ';
    }
  }

  digitElement.style.textShadow = shadowString;
  
  digitLayer.appendChild(digitElement);
}

setInterval(function() {
  var digitElements = document.querySelectorAll('.digit');
  var windowHeight = window.innerHeight;
  
  for (var i = 0; i < digitElements.length; i++) {
    var digitElement = digitElements[i];
    var top = parseFloat(digitElement.style.top);
    if (top >= windowHeight) {
      top = -(Math.floor(Math.random() * 500) + 100);
      digitElement.style.left = (Math.floor(Math.random() * windowWidth)) + 'px';
    }
    top += Math.floor(Math.random() * 10) + 5;
    digitElement.style.top = top + 'px';
  }
}, 50);
