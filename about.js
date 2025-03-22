document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.about-rummy__button');
    const contents = document.querySelectorAll('.about-rummy__text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and hide current content
            buttons.forEach(btn => btn.classList.remove('about-rummy__button--active'));
            contents.forEach(content => content.style.display = 'none');
            
            // Add active class to clicked button and show corresponding content
            button.classList.add('about-rummy__button--active');
            const contentId = button.dataset.content;
            document.getElementById(contentId).style.display = 'block';
        });
    });
});