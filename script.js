const form = document.getElementById('contactForm');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    response.textContent = `Thanks, ${name}. Your message has been received.`;
    response.style.color = "green";
    form.reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }
});
