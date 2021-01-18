# WEB222 Test 9: Forms (Weeks 10)

## Overview

In this test, you are asked to create an HTML Password Reset form that uses
the HTML Forms techniques covered in Week 10.

Put your form markup in the file `index.html`, any CSS styles you need in
`styles.css`.

## Instructions

Install the necessary dependencies using `npm install`.

Run the live web server using `npm start` and open your browser to:

http://127.0.0.1:8080/

Complete the list of requirements below.

You MAY consult the course notes to help you complete your work.

You MAY NOT collaborate with your peers.  All work must be your own.  Your
submission should not resemble any other student submissions.  The usual rules
of cheating and plagiarism apply, and your submission will be automatically
checked against all others.

When you are done, follow the Submission steps below.

## Requirements

1. In `index.html` create a Form that uses POST to submit its data to the URL
   `/password-reset`.  The form should have the following controls:

    a. Email Address (should get the focus when the page loads)
    b. Current Password
    c. New Password (must be 8-128 characters in length)
    d. Confirm New Password (must be 8-128 characters in length)
    e. Submit button

2. Choose the most appropriate type of input control for each of the above.

3. Create labels for each of the input controls above.

4. Set all necessary input attributes for the controls above.  Some attributes
   to consider: id, name, minlength, maxlength, pattern, placeholder, required,
   size, tabindex.  NOTE: not all attributes are required for every control, so pick only what is needed.

5. Use CSS to style your form and input controls so that they are easy to see
   and use.  You may write your own styles in `styles.css` or use a CSS framework
   like Bootstrap.  Your form should look professional so that users will trust it.

## Submission

Upload two things to Blackboard:

1. Your `index.html` and `styles.css` files.  Rename them to .txt if you Blackboard
   complains about .html and .css.

2. One or more screenshots of your browser showing your form in action
