
/* =================================
   PORTFOLIO WEBSITE JAVASCRIPT
================================= */

// 1. Navigation active link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar ul li a").forEach(function(link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});


// 2. Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const status = document.getElementById("formStatus");

        if (!name || !email || !subject || !message) {
            status.textContent = "Please fill in all fields.";
            return;
        }

        const yourEmail = "your-email@example.com";

        if (yourEmail === "your-email@example.com") {
            status.textContent =
                "Please update your email address in script.js.";
            return;
        }

        const mailSubject = encodeURIComponent(subject);

        const mailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        status.textContent =
            "Opening your email application...";

        window.location.href =
            "mailto:" + yourEmail +
            "?subject=" + mailSubject +
            "&body=" + mailBody;
    });
}


// 3. Scroll Animation
const animatedItems = document.querySelectorAll(
    ".info-card, .project-card, .timeline-card, .contact-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-animation");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedItems.forEach(function(item) {
        observer.observe(item);
    });
}
