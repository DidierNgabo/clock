setInterval(setClock,1000);

const hourHand=document.querySelector("[hour-hand]");
const minutesHand=document.querySelector("[minutes-hand]");
const secondsHand=document.querySelector("[second-hand]");
 

function setClock(){
    const currentDate=new Date();
    const secondsRatio= currentDate.getSeconds() /60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60;
    const hoursRatio=(minutesRatio +currentDate.getHours()) /12;

    setRotation(secondsHand,secondsRatio);
    setRotation(minutesHand,minutesRatio);
    setRotation(hourHand,hoursRatio);
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);
}
setClock();



