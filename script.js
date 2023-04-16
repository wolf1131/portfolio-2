
// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()  => {
menuIcon.classList.toggle("bx-x");
navbar.classList.toggle("active");
};

//  scroll section active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

Window.onscroll = () => {
sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute("id");

if(top >= offset && top < offset + height) {

navLinks.forEach(links => {
links.classList.remove("active");
document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
});

};
});
/* sticky nav bar*/

let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);


// remove toggle icon and navbar when click navbar link

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
};

// Email js
const contactForm = document.querySelector('#contact form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_tvrgkqh", "template_agi1kjx", contactForm, "aYuZwdcqznqt1z5Iu")
        .then(() => {
            // show success message
            contactMessage.textContent = "Message sent successfully ✅";
            
            // remove success message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);
            
            // clear input fields
            contactForm.reset();
        })
        .catch(() => {
            // show error message
            contactMessage.textContent = "Message not sent (service error) ❌";
        });
};

contactForm.addEventListener("submit", sendEmail);



// scroll reveal
ScrollReveal({
    reset: true,
    distance: "80px",
    duration : 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

