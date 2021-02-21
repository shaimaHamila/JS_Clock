const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

var today = new Date();

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();


let hrPosition = (hour*360/12) + (minute*360/60)/12;
let minPosition = (minute*360/60) + (second*360/60)/60;
let secPosition = second*360/60;

function runTheClock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    hourHand.style.transform = "rotate(" + hrPosition + "deg)";
    minuteHand.style.transform = "rotate(" + minPosition + "deg)";
    secondHand.style.transform = "rotate(" + secPosition + "deg)";
    
}

var interval = setInterval(runTheClock, 1000);