const startBtn = document.getElementById('start');
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer = document.getElementById("timer");
let getOnesSeconds = document.getElementById("onesSeconds");
let getTenthSeconds = document.getElementById("tenthSeconds");
let getOnesMinute = document.getElementById("onesMinute");
let getTenthMinute = document.getElementById("tenthMinute");

let time = {
    onesSeconds: 0,
    tenthSeconds: 0,
    onesMinute: 0,
    tenthMinute: 0
}


// function minutes(time){
//         if(time.onesMinute < 9) {

//         }
//         else if(time.tenthMinute < 5){
//             time.onesSeconds = 0;
//             getOnesMinute.innerText = time.onesMinute;
//             time.tenthMinute += 1;
//             getTenthMinute.innerText = time.tenthMinute;
//             start();
//         }
// }


// function Minutes(time) {
//     if(time.onesMinute < 9) {
//         time.onesMinute += 1;
//         getOnesMinute = time.onesMinute;
//     }
// }


function Seconds() {
    setInterval(function(){
        if(time.onesSeconds < 9) {
            time.onesSeconds += 1;
            getOnesSeconds.innerText = time.onesSeconds;
        }
        else if(time.tenthSeconds < 5){
            time.onesSeconds = 0;
            getOnesSeconds.innerText = time.onesSeconds;
            time.tenthSeconds += 1;
            getTenthSeconds.innerText = time.tenthSeconds;
        }
        else if(time.onesSeconds === 9 && time.onesMinute < 9)
        {
            time.onesMinute += 1;
            getOnesMinute.innerText = time.onesMinute;
            time.onesSeconds = 0;
            getOnesSeconds.innerText = time.onesSeconds;
            time.tenthSeconds = 0;
            getTenthSeconds.innerText = time.tenthSeconds;
        }
        else{
            time.onesSeconds = 0;
            getOnesSeconds.innerText = time.onesSeconds;
            time.tenthSeconds = 0;
            getTenthSeconds.innerText = time.tenthSeconds;
            time.onesMinute = 0;
            getOnesMinute.innerText = time.onesMinute;
            time.tenthMinute += 1;
            getTenthMinute.innerText = time.tenthMinute;
        }
    }, 1000)
}

function start(time) {
    Seconds();
}

function stop(){
    clearInterval(Seconds());
}

function reset(){
    clearInterval(function(){
        getOnesSeconds.innerText = 0;
        getTenthSeconds.innerText = 0;
        getOnesMinute.innerText = 0;
        getTenthMinute.innerText = 0;
    }, 100)
}


// EventListeners
startBtn.addEventListener("click", e => {
    start(time);
})

stopBtn.addEventListener("click", e => {
    stop(Seconds());
})

resetBtn.addEventListener("click", e => {
    reset();
})