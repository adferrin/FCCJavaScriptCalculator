// Dom Elements
const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');




//Set up time
const updateTime = () => {
    const currentTime = new Date();
    
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > 12) {
        currentHour -= 12;
    }

    hourEL.textContent = currentHour.toString();
    minuteEL.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();