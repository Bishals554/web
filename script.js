document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve form values
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
  
    // Perform form validation (you can customize this as needed)
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Form submission successful
    alert('Message sent!');
  
    // Clear form fields
    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('message')[0].value = '';
  });
  

// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Iterate over each navigation link and add click event listener
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const targetPage = link.getAttribute('href'); // Get target page path

    // If the target page is the current page, prevent default link behavior
    if (targetPage === window.location.pathname) {
      event.preventDefault();
      return;
    }
  });
});
