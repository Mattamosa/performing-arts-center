// Adds an event listener for the Phone-icon for mobile devices
document.getElementById('phone-icon').addEventListener('click', function() {
  window.location.href = 'tel:+8001234567';
});

// Places just the current year into footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();