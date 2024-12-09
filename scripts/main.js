
// Selecting DOM elements for Web Form and inputs by their IDs
const form = document.getElementById("subscriptionForm");  
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const packageSelected = document.getElementById("package");
const isSubscribed = document.getElementById("subscribe");
const summaryDiv = document.getElementById("summary");

// Helper function to display an error message for an input element
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

// Helper function to indicate a successful input validation
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ''; // Clear any error message
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

// Function to validate input fields
const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const packageValue = packageSelected.value;

    // Key flag to track inputs validation
    let isValid = true;

    // First Name Validation: Non-empty, Only alphabetic, and at least 2 alpha characters
    if (firstNameValue === '') {
        setError(firstName, "First Name field CAN'T be empty");
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(firstNameValue)) {
        setError(firstName, 'First Name must contain only alpha characters (A-z)');
        isValid = false;
    } else if (firstNameValue.length < 2) {
        setError(firstName, 'First Name must contain at least 2 alpha characters (A-z)');
        isValid = false;
    } else {
        setSuccess(firstName);
    }

    // Last Name Validation: Non-empty, Only alphabetic, and at least 2 alpha characters
    if (lastNameValue === '') {
        setError(lastName, "Last Name field CAN'T be empty");
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(lastNameValue)) {
        setError(lastName, 'Last Name must contain only alpha characters (A-z)');
        isValid = false;
    } else if (lastNameValue.length < 2) {
        setError(lastName, 'Last Name must contain at least 2 alpha characters (A-z)');
        isValid = false;
    } else {
        setSuccess(lastName);
    }

    // Email Validation: Checks for non-empty and proper email format
    if (emailValue === '') {
        setError(email, "Email field CAN'T be empty");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        setError(email, 'Enter a valid email address FORMAT');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Package Validation: Make sure a package is selected
    if (packageValue === "") {
        setError(packageSelected, 'A PACKAGE must be selected');
        isValid = false;
    } else {
        setSuccess(packageSelected);
    }

    // Subscription Checkbox Validation: Make sure subscribe is checked
    if (!isSubscribed.checked) {
        setError(isSubscribed, 'Please check the box to be SUBSCRIBED');
        isSubscribed.parentElement;
        isValid = false;
    } else {
        setSuccess(isSubscribed);
        isSubscribed.parentElement;
    }

    // Return key flag after passing all validations
    return isValid;
}

// Display summary and hide form
const displaySummary = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const packageValue = packageSelected.value;

// Generate summary message with formatted and styled fields
summaryDiv.innerHTML = `Thank you, ${firstNameValue} ${lastNameValue}, for subscribing!<br>
Your email ${emailValue} is registered with our ${packageValue} package.`;

    // Hide form and show summary
    form.style.display = "none";
    summaryDiv.style.display = "block";
};

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        displaySummary();
    }
});
