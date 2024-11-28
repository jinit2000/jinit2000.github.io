// Initialize EmailJS
emailjs.init("p2oPS5P_0qRMrF1YG");

// Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_xb9ye74", "template_vlfgpwl", this)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("status").textContent = "Message sent successfully!";
      document.getElementById("status").className = "success";
    }, function(error) {
      console.log("FAILED...", error);
      document.getElementById("status").textContent = "Failed to send message. Please try again.";
      document.getElementById("status").className = "error";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul"); // Updated to match the `<ul>` in your nav

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

