function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.body;

  startButton.addEventListener('click', function () {
    startButton.setAttribute('disabled', 'true');
    stopButton.removeAttribute('disabled');

    intervalId = setInterval(function () {
      const randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
    }, 1000);
  });

  stopButton.addEventListener('click', function () {
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'true');

    clearInterval(intervalId);
  });
});
