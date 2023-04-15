var slideIndex = 1; // Sets the index of the slide to be displayed to 1
showSlides(slideIndex); // Calls the showSlides function to display the first slide

function plusSlides(n) { // Defines the plusSlides function that takes a parameter 'n'
  showSlides(slideIndex += n); // Calls the showSlides function with the current slide index incremented by 'n'
}

function showSlides(n) { // Defines the showSlides function that takes a parameter 'n'
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Gets all elements with class name "mySlides"
  if (n > slides.length) {slideIndex = 1} // Resets slideIndex to 1 if it exceeds the number of slides
  if (n < 1) {slideIndex = slides.length} // Resets slideIndex to the last slide if it's less than 1
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Hides all slides by default
  }
  slides[slideIndex-1].style.display = "block"; // Displays the slide with the updated slideIndex
}


// Get the navbar
var navbar = document.querySelector('.header');

// Get all buttons with class="nav-link" inside the navbar
var buttons = navbar.getElementsByClassName('nav-link');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

const currentDate = new Date();
const year = currentDate.getFullYear();

const footer = document.querySelector("footer");
footer.innerHTML = `&copy; ${year} Your Company Name. All rights reserved.`;


    // Select the form and input fields the code for news letter functionality
    const form = document.querySelector('#newsletter form');
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    
    // Add event listener to the form submit event
    form.addEventListener('submit', (e) => {
        // Prevent the form from submitting normally
        e.preventDefault();
        
        // Perform validation on the name and email fields
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            // If either field is empty, display an error message and stop the function
            alert('Please fill in all required fields');
            return;
        }
        
        // Submit the form data using an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
            if (xhr.status === 200) {
                // If the request is successful, display a success message and reset the form
                alert('Thank you for subscribing!');
                form.reset();
            } else {
                // If the request fails, display an error message
                alert('An error occurred. Please try again later.');
            }
        };
        // Send the form data as URL-encoded parameters
        xhr.send(`name=${nameInput.value}&email=${emailInput.value}`);
    });