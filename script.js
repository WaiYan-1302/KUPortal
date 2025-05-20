const infoMessages = [
    "⚠️ West Zone Elevator is under maintenance, so it is inaccessible",
    "📢 Library will be open 24h during finals week",
    "🚌 Shuttle buses will run on extended routes this weekend",
    "🔧 Network upgrade scheduled for Thursday midnight",
    "🏫 Open Day for prospective students is on Friday"
];

let currentIndex = 0;
const infoElement = document.getElementById("campusInfoText");

function rotateCampusInfo() {
    currentIndex = (currentIndex + 1) % infoMessages.length;
    infoElement.textContent = infoMessages[currentIndex];
}

setInterval(rotateCampusInfo, 4000); // change every 4 seconds
