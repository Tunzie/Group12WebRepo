
// Display error message to user
export function displayError(message, inputElement,errorDisplayed) {
    if (!errorDisplayed) {
        var errorContainer = document.createElement('div');
        errorContainer.classList.add('error-messages');
        errorContainer.textContent = message;
        errorContainer.style.color = 'red';

        var parentContainer = inputElement.current.parentElement; // Access current property of the ref
        parentContainer.appendChild(errorContainer);

        // Automatically remove the error message after 6 seconds
        setTimeout(() => {
            errorContainer.remove();
            errorDisplayed = false; // Reset errorDisplayed flag
        }, 6000);
    }
}



// email validation rules
export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password validation rules
export function isValidPassword(password) {  
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
}

