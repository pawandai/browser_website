const profile = document.getElementById('profile');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const navigation = document.getElementById('navigation');

profile.addEventListener('click', function() {
  profile.classList.add('active');
  skills.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
  navigation.classList.add('profile-active');
  navigation.classList.remove('skills-active');
  navigation.classList.remove('projects-active');
  navigation.classList.remove('contact-active');
});

skills.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.add('active');
  projects.classList.remove('active');
  contact.classList.remove('active');
  navigation.classList.remove('profile-active');
  navigation.classList.add('skills-active');
  navigation.classList.remove('projects-active');
  navigation.classList.remove('contact-active');
});

projects.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.remove('active');
  projects.classList.add('active');
  contact.classList.remove('active');
  navigation.classList.remove('profile-active');
  navigation.classList.remove('skills-active');
  navigation.classList.add('projects-active');
  navigation.classList.remove('contact-active');
});

contact.addEventListener('click', function() {
  profile.classList.remove('active');
  skills.classList.remove('active');
  projects.classList.remove('active');
  contact.classList.add('active');
  navigation.classList.remove('profile-active');
  navigation.classList.remove('skills-active');
  navigation.classList.remove('projects-active');
  navigation.classList.add('contact-active');
});