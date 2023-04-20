/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#navbar__list');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.setAttribute('href', `#${section.id}`); 
    navLink.classList.add('menu__link')
    navLink.textContent = section.dataset.nav;

    navItem.appendChild(navLink);
    nav.appendChild(navItem);
});

// Add class 'active' to section when near top of viewport and remove 'active' class from other sections
const options = {
    threshold: 1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);

        if (entry.isIntersecting) {
            entry.target.classList.add('your-active-class');
            navLink.style.color = 'white';
            navLink.style.backgroundColor = '#333';

        } else {
            entry.target.classList.remove('your-active-class');
            //remove navLink inline style
            navLink.style.color = '';
            navLink.style.backgroundColor = '';
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


// Scroll to anchor ID using scrollTO event
//make the nav links scroll to the section
const navLinks = document.querySelectorAll('a.menu__link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(navLink.getAttribute('href'));
        section.scrollIntoView({behavior: 'smooth'});
    });
});


//create button and add it to the page such that it is stick to the bottom of the page and when clicked it will scroll to the top of the page. also it is invisible until the user scrolls down the page.
const btn = document.createElement('button');
btn.textContent = 'Top';
btn.classList.add('top-btn');
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    const nav_bar = document.querySelector('nav');
    //show the nav bar in smooth manner
    nav_bar.style.transform = 'translateY(0)';
    nav_bar.style.transition = 'transform 0.5s ease-in-out';
    var y0 = window.scrollY;
    setTimeout(() => {
        if (y0 === window.scrollY) {
            //hide the nav bar in smooth manner
            nav_bar.style.transform = `translateY(-${nav_bar.offsetHeight}px)`;
            nav_bar.style.transition = 'transform 0.5s ease-in-out';
        }
    }, 2000);
});

//make the nav bar visible when the cursor position is on the top of the page and hide it when the cursor is not on the top of the page
window.addEventListener('mousemove', (e) => {
    const nav_bar = document.querySelector('nav');
    if (e.clientY <= 30) {
        nav_bar.style.transform = 'translateY(0)';
        nav_bar.style.transition = 'transform 0.5s ease-in-out';
    } else {
        setTimeout(() => {
                //hide the nav bar in smooth manner
                nav_bar.style.transform = `translateY(-${nav_bar.offsetHeight}px)`;
                nav_bar.style.transition = 'transform 0.5s ease-in-out';
        }, 2000);
    }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


