// Tab switching logic
document.querySelectorAll('.sidebar nav li').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all sidebar tabs
        document.querySelectorAll('.sidebar nav li').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show the selected tab and hide others
        const selected = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab').forEach(section => {
            section.classList.remove('active');
            if (section.id === selected) section.classList.add('active');
        });
    });
});
