document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    const phoneError = document.getElementById('phoneError');
    const registerForm = document.getElementById('register');

    // Restrict input to numbers only with a leading '+'
    phoneInput.addEventListener('keydown', function(event) {
        const firstInput = phoneInput.value.length === 0;

        // Allow: backspace, delete, tab, escape, enter and arrow keys
        if (event.key === "Backspace" || event.key === "Delete" || 
            event.key === "Tab" || event.key === "Escape" || 
            event.key === "Enter" || event.key.startsWith("Arrow")) {
            return;
        }
        // Prevent non-numeric input, but allow '+' at the start
        if (firstInput && event.key === '+') {
            return; // Allow '+' if it's the first character
        }

        if ((event.key < '0' || event.key > '9')) {
            event.preventDefault(); // Prevent anything that's not a number
        }
    });

    // Prevent pasting non-numeric values
    phoneInput.addEventListener('paste', function(event) {
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        if (/[^0-9+]/.test(pasteData) || (pasteData.length > 1 && pasteData.startsWith('+'))) {
            event.preventDefault();
        }
    });

    // Form validation function
    registerForm.addEventListener('submit', function(event) {
        const phonePattern = /^\+?\d{10}$/; // 10-digit phone number validation (10 digits optionally prefixed by '+')
        
        // Validate input, allowing for leading '+'
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid phone number with an optional leading "+".';
            event.preventDefault(); // Prevent form submission
        } else {
            phoneError.textContent = ''; 
        }
    });
});