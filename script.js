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

// ⭐ Toggle favorite star
document.addEventListener("click", function (e) {
    if (e.target.closest(".star")) {
        const icon = e.target.closest(".star").querySelector("i");
        icon.classList.toggle("fas");
        icon.classList.toggle("far");
        const card = e.target.closest(".announcement");
        card.classList.toggle("favorited");
    }
});

// 📁 Filter announcements
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        // Update active button
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");
        const announcements = document.querySelectorAll(".announcement");

        announcements.forEach(card => {
            const type = card.getAttribute("data-type");

            if (filter === "all") {
                card.style.display = "flex";
            } else if (filter === "favorite") {
                card.style.display = card.classList.contains("favorited") ? "flex" : "none";
            } else {
                card.style.display = type === filter ? "flex" : "none";
            }
        });
    });
});


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

        // ✅ Mark announcement as read on click
        document.querySelectorAll('.announcement').forEach(card => {
            card.addEventListener('click', function (e) {
                // Avoid marking as read if star is clicked
                if (e.target.closest('.star')) return;

                card.classList.remove('unread');
            });
        });

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
