document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    const phoneError = document.getElementById('phoneError');
    const checkbox = document.getElementById('saw');
    const checkboxError = document.getElementById('checkboxError');
    const registerBtn = document.getElementById('registerBtn');

    // Ограничение ввода (только цифры, + в начале, - между цифрами)
    phoneInput.addEventListener('keydown', function(event) {
        const firstInput = phoneInput.value.length === 0;
        const currentValue = phoneInput.value;

        if (["Backspace", "Delete", "Tab", "Escape", "Enter"].includes(event.key) || event.key.startsWith("Arrow")) {
            return;
        }

        if (firstInput && event.key === '+') {
            return;
        }

        if (event.key === '-' && /\d$/.test(currentValue)) {
            return;
        }

        if (event.key < '0' || event.key > '9') {
            event.preventDefault();
        }
    });

    // Запрещаем вставку недопустимых символов
    phoneInput.addEventListener('paste', function(event) {
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        if (!/^\+?\d+(-\d+)*$/.test(pasteData)) {
            event.preventDefault();
        }
    });

    // Валидация при клике на кнопку
    registerBtn.addEventListener('click', function() {
        const phonePattern = /^\+?\d+(-\d+)*$/;
        let isValid = true;

        // Проверка номера телефона
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid phone number.';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Проверка чекбокса
        if (!checkbox.checked) {
            checkboxError.textContent = 'You must agree to the terms and conditions.';
            isValid = false;
        } else {
            checkboxError.textContent = '';
        }

        // Если все поля корректны
        if (isValid) {
            alert('The form has been successfully submitted!'); // Можно заменить на отправку данных
        }
    });
});