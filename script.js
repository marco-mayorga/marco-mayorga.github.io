const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0]; 
const aboutButton = navbarLinks.getElementsByTagName("li")[0];
const projectsButton = navbarLinks.getElementsByTagName("li")[1];
const projectsDiv = document.querySelector(".centerProjects");
const contactButton = navbarLinks.getElementsByTagName("li")[2];
const resumeButton = navbarLinks.getElementsByTagName("li")[3];

// Makes About button scroll to about
aboutButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  navbarLinks.classList.toggle('active')
});

// Makes contact button scroll to projects
projectsButton.addEventListener('click', () => {
  projectsDiv.scrollIntoView({behavior: "smooth", block: "start"});
  navbarLinks.classList.toggle('active')
});

// Makes contact button scroll to contact
contactButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
  navbarLinks.classList.toggle('active')
});

resumeButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// Lets down menu (For mobile)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})