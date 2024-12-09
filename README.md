MET CS601:  Module 1 Assignment - JOHN GUTIERREZ
MEMBERSHIP SUBSCRIPTION FORM

OVERVIEW
The Membership Subscription Form is a web form app designed to collect user subscription data. It uses a simple but interactive interface. The app is built under HTML, CSS, and JavaScript. The web form allows users to enter their personal information and select a subscription package. In addition, the application takes very serious its users security by validating data inputs before submission.

FEATURES
INPUT VALIDATION:
It makes sure that the first and last name fields contain at least two alpha characters. It also checks for empty inputs and does not allow numeric entries.
The app also validates the email format according to standard conventions. Moreover, it requires the user to select a package from a predefined drop down list. Furthermore, it confirms that the subscription checkbox is properly checked.

USER FEEDBACK:
The web form displays error messages every single time an input field does not meet the requirements and advise the user to properly enter data.
Upon successful validation, the form presents a summary of the input information and confirms the subscription details to the user.

TECHNOLOGIES USED
HTML: Provides the basic structure for the subscription form.

CSS: Styles the web form for a user-friendly experience. It provides clear accessibility and responsiveness.

JavaScript: Implements client-side validation, error handling, and dynamic display of a summary after a satisfactory subscription.

USAGE
FILL OUT THE FORM:
Enter your first name, last name, and email address in the provided fields.
Select a subscription package from the dropdown menu (Bronze, Silver, Gold, Platinum).
Check the "Subscribe" checkbox to confirm your agreement.

SUBMIT THE FORM:
Click the "Submit" button to validate your input.
If there are validation errors, you will see specific alert messages under the compromised fields.

VIEW SUMMARY:
After a successful submission, a summary message will be displayed. The app will print to the screen "thanking you for subscribing and confirming your details".

CODE EXPLANATION
HTML (index.html):
This is the main structure of the form. It includes labels, input fields, and buttons.
Each input field has an associated <div> for error messages.

CSS (main.css):
CSS Styles the appearance of the form container, input fields, and buttons to create a more visually attractive site.
It uses color schemes to differentiate between positive states and error messages.

JavaScript (main.js):
A very important code portion that contains functions for input validation and managing user interactions.
It implements the logic for displaying error messages and controlling user input data behaviors.
