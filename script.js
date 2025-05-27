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

// Tab switching logic
document.querySelectorAll('.sidebar nav ul li').forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove active class from all tabs
        document.querySelectorAll('.sidebar nav ul li').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.tab').forEach(section => section.classList.remove('active'));

        // Show the corresponding section
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

document.querySelectorAll('.sidebar nav ul li').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.sidebar nav ul li').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.tab').forEach(section => section.classList.remove('active'));
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
