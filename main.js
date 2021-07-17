const startBtn = document.getElementById('start');
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer = document.getElementById("timer");
let getOnesSeconds = document.getElementById("onesSeconds")
let getTenthSeconds = document.getElementById("tenthSeconds");
let getOnesMinute = document.getElementById("onesMinute");
let getTenthMinute = document.getElementById("tenthMinute");



function updateSeconds() {

    let onesSeconds = countSeconds.getOnesSeconds;
    let tenthSeconds = countSeconds.getTenthSeconds;


    if(onesSeconds !== 9) {
        onesSeconds += 1;
    }
    else if(onesSeconds === 9 && tenthSeconds !== 9) {
        onesSeconds = 0;
        tenthSeconds += 1;
    }
    else {
        console.log(onesSeconds);
    }
    
}

// function updateMinutes() {
//     let onesMinute = countMinutes.onesMinute;
//     let tenthMinute = countMinutes.tenthMinute;

//     if(onesMinute !== 9) {
//         onesMinute += 1;
//     }
//     else if(onesMinute === 9 && tenthMinute !== 9) {
//         onesMinute = 0;
//         tenthMinute += 1;
//     }
// }


function CountSeconds() {
    this.countOnesSeconds = +(getOnesSeconds.innerText);
    this.countTenthSeconds = +(getTenthSeconds.innerText);

    console.log(this.getOnesSeconds);
}

function CountMinutes() {
    this.countOnesMinute = +(getOnesMinute.innerText);
    this.countTenthMinute = +(getTenthMinute.innerText);
}

let countSeconds = new CountSeconds();
let countMinutes = new CountMinutes();


// EventListeners
startBtn.addEventListener("click", e => {
    updateSeconds();
})




// function setTimerData(tMinute, oMinute, tSeconds, oSeconds) {
//     localStorage.setItem('tMinute', tMinute);
//     localStorage.setItem('oMinute', oMinute);
//     localStorage.setItem('tSeconds', tSeconds);
//     localStorage.setItem('oSeconds', oSeconds);
// }

// function updateSeconds() {
//     onesSeconds = +(onesSeconds.innerText);
//     tenthSeconds = +(tenthSeconds.innerText);

//     onesSeconds = 9;
//     tenthSeconds = 9;


//     if(onesSeconds !== 9) {
//         onesSeconds += 1;
//     }
//     else if(onesSeconds === 9 && tenthSeconds !== 9) {
//         onesSeconds = 0;
//         tenthSeconds += 1;
//     }
//     else {
//         updateMinutes();
//     }

//     console.log('in updateSeconds')
// }

// function updateMinutes() {
//     let onesMinute = +(onesMinute.innerText)
//     let tenthMinute = +(tenthMinute.innerText)

//     if(onesMinute !== 9) {
//         onesMinute += 1;
//     }
//     else if(onesMinute === 9 && tenthMinute !== 9) {
//         onesMinute = 0;
//         tenthMinute += 1;
//     }
//     else {
//         stop();
//         reset();
//     }
// }
