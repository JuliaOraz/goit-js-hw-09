const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let bodyColor = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtn)
stopBtn.addEventListener('click', onStopBtn)

// Меняет цвет фона по клику на startBtn
function onStartBtn() { 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    bodyColor = setInterval(() => { 
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)  
}

// Останавливает смену цвета по клику на stopBtn
function onStopBtn() { 
    clearInterval(bodyColor);
    if (startBtn.disabled) { 
        startBtn.disabled = false;
        stopBtn.disabled = true;
    } 
}

// Рандомный цвет
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
