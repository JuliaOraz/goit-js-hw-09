const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let bodyColor = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtn)
stopBtn.addEventListener('click', onStopBtn)


function onStartBtn() { 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    bodyColor = setInterval(() => { 
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)  
}

function onStopBtn() { 
    clearInterval(bodyColor);
    if (startBtn.disabled) { 
        startBtn.disabled = false;
        stopBtn.disabled = true;
    } 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
