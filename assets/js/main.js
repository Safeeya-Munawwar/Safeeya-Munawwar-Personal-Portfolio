/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close');
/*=============== SHOW MENU ===============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*=============== HIDE MENU ===============*/
if(navClose){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')    
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.65,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
})

/*=============== SWIPER TESTIMONIAL ===============*/
// ! comments swiper
let swiperComments = new Swiper(".comments_container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    resistance: true,
    resistanceRatio: 0.65,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact_form"),
      contactName = document.getElementById("contact_name"),
      contactEmail = document.getElementById("contact_email"),
      contactProject = document.getElementById("contact_textarea"),
      contactMessage = document.getElementById("contact_message");

const sendEmail = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
        contactMessage.classList.add("color_red");
        contactMessage.textContent = "Please fill in all fields!";
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);
        return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(contactEmail.value)) {
        contactMessage.classList.add("color_red");
        contactMessage.textContent = "Please enter a valid email address!";
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);
        return;
    }

    // Server ID, template ID, form ID, public key (EmailJS)
    emailjs.sendForm('service_4738ygi', 'template_1t1ssv1', '#contact_form', 'V6ZMioOe9GnndO1Y-')
        .then(() => {
            // Show success message and add color
            contactMessage.classList.add("color_blue");
            contactMessage.textContent = "Message sent ✔";

            // Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        })
        .catch((error) => {
            console.error("Error sending email:", error); // Log detailed error in the console
            contactMessage.classList.add("color_red");
            contactMessage.textContent = `OOPS! Something went wrong... ${error.text || ''}`;
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        });

    // Clear form
    contactForm.reset();
};

contactForm.addEventListener('submit', sendEmail);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// ! scoll actiove link
// select all sections id
const sections = document.querySelectorAll("section[id]")
// add active-link class while scrolling
const scrollActive = ()=>{
    // get scrallY value 
    const scrollY = window.pageYOffset
    // check where scroll currently is
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active_link")
        }else{
            sectionsClass.classList.remove("active_link")
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ! show scroll up
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll_up')
    this.scrollY >= 350? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 
// ! theme
const   themeButton = document.getElementById("theme_button"),
        darkTheme = "dark_theme",
        iconTheme = "ri-sun-line"
// saved theme
const   selectedTheme = localStorage.getItem("selected_theme"),
        selectedIcon = localStorage.getItem("selected_icon")
// check theme
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"
// set old theme
if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}
// activte deactivate theme
themeButton.addEventListener('click', ()=>{
    // add remove
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save theme
    localStorage.setItem("selected_theme", getCurrentTheme())
    localStorage.setItem("selected_icon", getCurrentIcon())
})
// ! change background header
const scrollHeader = () =>{
    const header = document.getElementById('header') 
    this.scrollY >= 50 ? header.classList.add("bg_header") : header.classList.remove("bg_header")
}
window.addEventListener('scroll', scrollHeader)
// ! scroll animation
const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2500,
    delay: 400,
})
sr.reveal(".home_data, .projects_container, .comments_container, .footer_container")
sr.reveal(".home_info", {delay:600,origin:"bottom",interval:100})
sr.reveal(".skills_content:nth-child(1), .contact_content:nth-child(1)", {origin:"left"})
sr.reveal(".skills_content:nth-child(2), .contact_content:nth-child(2)", {origin:"right"})
sr.reveal(".qualification_content, .services_card", {interval:100})
sr.reveal(".links__content", {delay:400, interval:50})

/*=============== LOADER ===============*/
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    // Increase time to show full animation sequence with rotating tech icons
    setTimeout(() => {
        loader.classList.add('loader--hidden');
        
        loader.addEventListener('transitionend', () => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        });
    }, 6500); // Extended to 6.5 seconds to match the complete animation sequence
});

/*=============== MOBILE OPTIMIZATIONS ===============*/
// Add passive event listeners for better scroll performance
document.addEventListener('touchstart', function() {}, {passive: true});
document.addEventListener('touchmove', function() {}, {passive: true});

// Optimize scroll handlers
let scrollTimeout;
const optimizedScrollHandler = () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
            scrollActive();
            scrollUp();
            scrollHeader();
        }, 16); // ~60fps
    }
};

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollUp);
window.removeEventListener('scroll', scrollHeader);
window.addEventListener('scroll', optimizedScrollHandler);

// Optimize loader for mobile
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (window.innerWidth <= 320) {
        // Reduce animation time for smaller devices
        setTimeout(() => {
            loader.classList.add('loader--hidden');
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
            }
        }, 4000);
    } else {
        // ...existing loader code...
    }
});

// Add fast click for mobile devices
document.querySelectorAll('a, button, .nav__link, .services_card').forEach(element => {
    element.addEventListener('touchstart', function() {}, {passive: true});
});