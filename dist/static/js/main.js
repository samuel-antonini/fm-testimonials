// testimonials database (this would idealy be loaded from an external API
const testimonials = [
    {
        id: 1,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        profilePic: "static/img/image-tanya.jpg",
        testimonial:
            "I’ve been interested in coding for a while but never taken the jump, until now." +
            "I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about" +
            "the future."
    },
    {
        id: 2,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        profilePic: "static/img/image-john.jpg",
        testimonial:
            "If you want to lay the best foundation possible I’d recommend taking this course." +
            "The depth the instructors go into is incredible. I now feel so confident about starting" +
            "up as a professional developer."
    },
];

// select items
const userPicture = document.getElementById('user-picture');
const userQuote = document.getElementById('user-quote');
const userName = document.getElementById('user-name');
const userJobTitle = document.getElementById('user-job');

const prevBtn = document.querySelector('.left-arrow');
const nextBtn = document.querySelector('.right-arrow');

// set starting profile
let userProfile = 0;

// load initial profile to be displayed
window.addEventListener('DOMContentLoaded', function () {
    showTestimonial();
});

// function to show dev based on current userProfile
function showTestimonial() {
    const profile = testimonials[userProfile];
    userPicture.src = profile.profilePic;
    userQuote.textContent = profile.testimonial;
    userName.textContent = profile.name;
    userJobTitle.textContent = profile.job;
}

// show next testimonial
nextBtn.addEventListener('click', function () {
    userProfile++;
    if (userProfile > testimonials.length - 1) {
        userProfile = 0;
    }
    showTestimonial(userProfile);
});

// show prev testimonial
prevBtn.addEventListener('click', function () {
    userProfile--;
    if (userProfile < 0) {
        userProfile = testimonials.length - 1;
    }
    showTestimonial(userProfile);
});