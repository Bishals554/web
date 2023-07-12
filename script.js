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
  

// Get the current page filename
const currentPage = location.pathname.split('/').pop();
// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Iterate over each navigation link and update the active state
navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');

  if (linkPath === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});






