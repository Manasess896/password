# Password Generator

A secure password generator with customizable options and password history tracking.

## Features

- Generate passwords with customizable length (8-40 characters)
- Include/exclude character types:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special symbols
- Password strength indicator
- Copy password to clipboard
- Password history tracking
- Responsive design
- Visual feedback with toast notifications

## Usage

1. Adjust the password length using the slider
2. Select desired character types using checkboxes
3. Click the refresh button to generate a new password
4. Click the generated password to copy it to clipboard
5. View previously generated passwords below the generator

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- Uses SweetAlert2 for notifications
- Stores password history in localStorage
- Includes password strength validation
- Responsive design for all screen sizes

## File Structure

```
password/
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── main.css
│   │   ├── password-layout.css
│   │   ├── responsive.css
│   │   └── password-list.css
│   │
│   └── js/
│       ├── main.js
│       ├── password-validator.js
│       ├── copy.js
│       ├── pastpassword.js
│       └── regenerate.js
│
├── index.html
└── README.md
```

## Dependencies

- SweetAlert2 for notifications
- Font Awesome for icons

## Browser Support

Works on all modern browsers supporting ES6+ JavaScript.
