function skillsMember() {
  const member = document.querySelector('.member');
  const skillsMember = document.querySelector('.skills-member');

  member.addEventListener('mouseover', () => {
    skillsMember.classList.add('skills-member--active');
  });

  member.addEventListener('mouseout', () => {
    skillsMember.classList.remove('skills-member--active');
  });
}