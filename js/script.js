
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  }
});
