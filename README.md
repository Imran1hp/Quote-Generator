
This project is a JavaScript Quote Generator.

JavaScript Quote Generator
This is a simple web application that displays inspirational quotes along with their authors. Users can click a button to generate a new random quote.

How it Works
The application presents a user interface with a header, a main content area for the quote and author, and a button. When the "New Quote" button is clicked, a random quote from a predefined list is selected and displayed.

Project Structure
index.html: The main HTML file that structures the web page.

style.css: Contains the CSS for styling the appearance of the quote generator.

home.js: Implements the JavaScript logic for generating and displaying quotes.

download.jpg: An image used as the background for the web page.

Features
Random Quote Generation: Displays a new, randomly selected quote each time the button is clicked.

Dynamic Content Update: The quote and author are dynamically updated on the page using JavaScript.

Styling: Provides a clean and visually appealing interface with a background image and styled elements.

Interactive Button: The "New Quote" button provides visual feedback on hover and active states.

Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Code Explanation
index.html
Sets up the basic HTML structure including the <head> with character set, viewport settings, title, and links to external CSS files (both local style.css and Font Awesome CDN).

The <body> contains a main container div that holds the header, main-content, and buttons.

The header displays "JavaScript Quote Generator".

The main-content div includes a text-area with a <span> for the quote and a div for the person (author).

The buttons div contains a <button> with the ID new-qoute.

A <script> tag links to home.js at the end of the <body> to ensure HTML elements are loaded before the script tries to access them.

style.css
Applies a reset for margin, padding, and box-sizing to all elements.

The body is styled to center its content, occupy the full viewport height, and uses download.jpg as a responsive background image.

.container defines the overall width and height of the quote box.

.header styles the title with a border, background, padding, and rounded corners.

.main-content styles the white background box containing the quote and author, with padding and a shadow.

.text-area and .person define font sizes, line height, and color for the quote and author respectively.

.buttons button styles the "New Quote" button, including background color, text color, padding, and rounded corners.

Hover and active states are defined for the button to provide visual feedback.

home.js
Selects the span for the quote, the div for the person, and the div containing the buttons using document.querySelector.

quotes: An array of objects, where each object contains a quote and a person (author).

An addEventListener is attached to the quoteBtn (the buttons div) for the click event.

Inside the event listener:

Math.random() is used to generate a random index within the quotes array.

The innerHTML of the quote span and person div are updated with the randomly selected quote and author.

Setup and Running the Project
Save the four files (index.html, style.css, home.js, download.jpg) in the same directory.

Open index.html in your web browser.
