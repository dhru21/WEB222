# WEB222 Test 8: CSS Layout (Week 9)

## Overview

In this test, you are asked to create an HTML postcard that uses CSS Box Model
and Layout techniques covered in Week 9.

The file `index.html` includes the markup for this postcard. Update the file
`styles.css` in order to produce a web page that looks like the one in the
image `final.png`.

## Instructions

Install the necessary dependencies using `npm install`.

Run the live web server using `npm start` and open your browser to:

http://127.0.0.1:8080/

Complete the list of CSS Requirements below.

You MAY consult the course notes to help you complete your work.

You MAY NOT collaborate with your peers.  All work must be your own.  Your
submission should not resemble any other student submissions.  The usual rules
of cheating and plagiarism apply, and your submission will be automatically
checked against all others.

When you are done, follow the Submission steps below.

## CSS Requirements

1. Modify `index.html` to replace 'YOUR NAME' in the signature with your name.
   Do NOT modify the HTML in any other way.

2. Include the stylesheet `styles.css` in `index.html`.

3. Examine the image in the file `final.png`.

4. Write CSS in order to produce a web page that looks like `final.png`:
    1. Use margins, padding, and border to achieve the necessary spacing
    2. Use Flexbox to stretch the postcard vertically, and evenly split the
    left and right sides for any browser dimension.
    3. Use height to force elements to occupy the correct amount of space
    4. Make your fonts look like `final.png`, including sizes, italics, colour.

5. See the CSS Hints below for some guidance.

Make sure you include /* comments */ in your `styles.css` to explain what
each part of your file is doing, and how it relates to the requirements.

## CSS Hints

Here are some hints to help you create this design.  There are multiple ways
to achieve the same result, but I'm interested in seeing you use things we
learned in Week 9.

### Colours

- Outer border #40798c
- Left-side background #0b2027
- Left-side text #f6f1d1

### Fonts

Use a default system Sans Serif font stack:

- system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif

### Image

For the right-hand side, use the included image file `markus-spiske-NsyU41QcsxM-unsplash.jpg` and research `background-image` and `background-size`.

## Submission

Upload two things to Blackboard:

1. your completed `styles.css` file, including all explanatory /* comments */

2. one or more screenshots of your browser showing your final styled document
