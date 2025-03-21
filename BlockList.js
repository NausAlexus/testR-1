document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.rummy-button');
    const contentBlocks = document.querySelectorAll('.content-block');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            contentBlocks.forEach(block => block.classList.remove('active'));

            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});