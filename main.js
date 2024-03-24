const date = new Date();
const hour = date.getHours();
const morningDiv = document.getElementById("morning");
const afternoonDiv = document.getElementById("afternoon");
const eveningDiv = document.getElementById("evening");
const nightDiv = document.getElementById("night");

window.onload = function() {
    updateTime(hour);
};

function updateTime(hour){
    console.log(hour);
    if (hour >= 4 && hour < 12){
        morningDiv.classList.remove('hidden');
    } else if (hour >= 12 && hour < 17){
        afternoonDiv.classList.remove('hidden');
    } else if (hour >= 5 && hour < 21){
        eveningDiv.classList.remove('hidden');
    } else {
        nightDiv.classList.remove('hidden');
    }
}