function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onload = function () {
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            showPopup();
            sessionStorage.setItem('popupShown', 'true');
        }, 2000);
    }

    document.getElementById('closePopupButton').addEventListener('click', closePopup);
};