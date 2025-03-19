const inputs = document.querySelectorAll('#password-length, #uppercase, #lowercase, #number, #special-characters');
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

function generatePassword() {
    const passwordLength = document.getElementById('password-length').value;
    const passwordUppercase = document.getElementById('uppercase').checked;
    const passwordLowercase = document.getElementById('lowercase').checked;
    const passwordNumber = document.getElementById('number').checked;
    const passwordSpecialChar = document.getElementById('special-characters').checked;
    const passwordContainer = document.getElementById('password-container');
    const charactersLength = document.getElementById('characters-length');

    charactersLength.textContent = passwordLength;

    // Determine allowed characters based on user selection
    let allowedCharacters = '';
    if (passwordUppercase) allowedCharacters += uppercaseCharacters;
    if (passwordLowercase) allowedCharacters += lowercaseCharacters;
    if (passwordNumber) allowedCharacters += numbers;
    if (passwordSpecialChar) allowedCharacters += specialCharacters;

    // If no character type is selected, show an error and return
    if (allowedCharacters.length === 0) {
        Swal.fire({
            title: 'Error!',
            text: 'Please select at least one character type',
            icon: 'error',
            confirmButtonText: 'OK',
            color: '#f27474',
            background: '#f8d7da',
            iconColor: '#842029',

        });
        return '';
    }

    // Generate the password
    let password = '';
    while (password.length < passwordLength) {
        password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
    }

    // Display the generated password
    passwordContainer.textContent = password;

    // Validate the password strength
    validatePassword(password);

    return password;
}

function validatePassword(password) {
    const passwordStrength = document.getElementById('password-strength');

    // Check for the presence of different character types
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(password);
    const passwordLength = 8; // Corrected regex for special characters

    // Calculate the strength based on the number of character types used
    const characterCount = hasLowercase + hasUppercase + hasNumbers + hasSpecialChars;

    // Update the password strength disp
    
    if (password.length <= passwordLength) {
        passwordStrength.textContent = 'Weak';
        passwordStrength.style.color = 'red';
        swal.fire({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            icon: 'error',
            title: 'your password is short',
            background: 'red',
            color: 'white',
            padding: '1rem',
            iconColor: 'white',
        })
    }
    
    else if (characterCount === 1) {
        passwordStrength.textContent = 'Weak';
        passwordStrength.style.color = 'red';
        swal.fire({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            icon: 'error',
            title: 'your password is weak',
            background: 'red',
            color: 'white',
            padding: '1rem',
            iconColor: 'white',
        })
    }
  
     else if (characterCount === 2) {
        passwordStrength.textContent = 'Medium';

        passwordStrength.style.color = 'orange';
        swal.fire({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            icon: 'warning',
            title: 'your password is medium',
            background: 'orange',
            color: 'white',
            padding: '1rem',
            iconColor: 'white',
        })
    } else if (characterCount === 3) {
        passwordStrength.textContent = 'Strong';
        passwordStrength.style.color = 'green';
        swal.fire({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            icon: 'success',
            title: 'your password is strong',
            background: 'green',
            color: 'white',
            padding: '1rem',
            iconColor: 'white',

        })
    } else if (characterCount === 4) {
        passwordStrength.textContent = 'Very Strong';
        passwordStrength.style.color = 'darkgreen';
        swal.fire({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 2000,
            icon: 'success',
            title: 'your password is very strong',
            background: 'darkgreen',
            color: 'white',
            padding: '1rem',
            iconColor: 'white',
        })
    }
    
}

// Add event listeners to all inputs
inputs.forEach(input => {
    input.addEventListener('input', generatePassword);
});

window.onload = generatePassword;