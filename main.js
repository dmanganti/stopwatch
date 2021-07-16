const startBtn = document.getElementById('start');
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer = document.getElementById("timer");
let tenthMinute = document.getElementById("tenthMinute");
let onesMinute = document.getElementById("onesMinute");
let tenthSeconds = document.getElementById("tenthSeconds");
let onesSeconds = document.getElementById("onesSeconds");

console.log(onesSeconds);
console.log(onesSeconds.innerText);
onesSeconds.innerText = 1;
console.log(onesSeconds.innerText);


// function setTimerData(tMinute, oMinute, tSeconds, oSeconds) {
//     localStorage.setItem('tMinute', tMinute);
//     localStorage.setItem('oMinute', oMinute);
//     localStorage.setItem('tSeconds', tSeconds);
//     localStorage.setItem('oSeconds', oSeconds);
// }


function updateSeconds() {
    onesSeconds = +(onesSeconds.innerText);
    tenthSeconds = +(tenthSeconds.innerText);

    onesSeconds = 9;
    tenthSeconds = 9;


    if(onesSeconds !== 9) {
        onesSeconds += 1;
    }
    else if(onesSeconds === 9 && tenthSeconds !== 9) {
        onesSeconds = 0;
        tenthSeconds += 1;
    }
    else {
        updateMinutes();
    }

    console.log('in updateSeconds')
}

function updateMinutes() {
    let onesMinute = +(onesMinute.innerText)
    let tenthMinute = +(tenthMinute.innerText)

    if(onesMinute !== 9) {
        onesMinute += 1;
    }
    else if(onesMinute === 9 && tenthMinute !== 9) {
        onesMinute = 0;
        tenthMinute += 1;
    }
    else {
        stop();
        reset();
    }
}

// function start() {
//     updateSeconds();
// }

// function stop() {

// }

// EventListeners
startBtn.addEventListener("click", e => {
    updateSeconds();
})