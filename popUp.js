function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    localStorage.setItem('popupShown', 'true');
}

window.onload = function () {
    if (!localStorage.getItem('popupShown')) {
        setTimeout(() => {
            showPopup();
        }, 2000);
    }

    document.getElementById('closePopupButton').addEventListener('click', closePopup);
};
