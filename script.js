// Sticky Navigation Menu
var typed = new Typed('#element', {
    strings: ['<i>Web Developer.</i>', '<i>Graphic Designer.</i>', '<i>Web Designer.</i>', '<i>Backend Developer.</i>'],
    typeSpeed: 85,
});


let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
});



// Get the button element by its ID
let hiremeId = document.getElementById("hireme");
let letschatId = document.getElementById("letschat");

// Add an event listener for the 'click' event
hiremeId.addEventListener('click', function() {
    // Redirect to LinkedIn profile
    window.location.href = 'https://www.linkedin.com/in/ankit-bhagata/';
});


// Add an event listener for the 'click' event
letschatId.addEventListener('click', function() {
    // Open email compose window with specified email address
    window.location.href = 'mailto:ankitbhagata@gmail.com';
});


// Form validation Code 

let submitButton = document.getElementById("submitButton");
let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
let contactForm = document.getElementById("contactForm");

// Error message elements
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let subjectError = document.getElementById("subjectError");
let queryError = document.getElementById("queryError");

// Form validation function
function validateForm() {
    let isValid = true;

    // Name validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Email must include @";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Subject validation
    let subject = document.getElementById("subject").value.trim();
    if (subject === "") {
        subjectError.textContent = "Subject is required";
        isValid = false;
    } else {
        subjectError.textContent = "";
    }

    // Query validation
    let query = document.getElementById("query").value.trim();
    if (query === "") {
        queryError.textContent = "Query is required";
        isValid = false;
    } else {
        queryError.textContent = "";
    }

    return isValid;
}

// Form submission handler
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    if (validateForm()) {
        // Show the popup and overlay
        popup.classList.add('active');
        overlay.classList.add('active');

        // Hide the popup and overlay after 3 seconds
        setTimeout(function() {
            popup.classList.remove('active');
            popup.classList.add('fade-out'); // Add fade-out animation
            overlay.classList.remove('active');

            // Reset the popup after the animation ends
            setTimeout(function() {
                popup.classList.remove('fade-out');
            }, 300); // Match the duration of the fadeOut animation
        }, 3000);
    }
});


function greet(){
    alert("Thanks for submitting your query!\nOur team will contact you soon.")
}