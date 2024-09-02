function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');

    const topbar = document.querySelector('.topbar');
    if (sidebar.classList.contains('collapsed')) {
        topbar.style.width = "calc(100% - 50px)";
        topbar.style.left = "50px";
    } else {
        topbar.style.width = "calc(100% - 250px)";
        topbar.style.left = "250px";
    }
}

document.querySelector('.dropdown-arrow').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


document.querySelector('.logout-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function toggleNotificationPopup() {
    const popup = document.getElementById('notification-popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
}

function toggleNotificationPopup() {
    const popup = document.getElementById('notification-popup');
    popup.style.display = popup.style.display === 'none' || popup.style.display === '' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const tabListItems = document.querySelectorAll('.tab-list li');
    
    tabListItems.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            tabListItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
