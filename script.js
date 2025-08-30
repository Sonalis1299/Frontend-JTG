const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open');
  });

  nav.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
}

const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;

    nextBtn.addEventListener('click', () => {
      if (index < track.children.length - 3) {
        index++;
        track.style.transform = `translateX(-${index * 270}px)`;
      }
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * 270}px)`;
      }
    });

    const modal = document.getElementById('dishModal');
    document.querySelector('.request-btn').onclick = () => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };
    document.querySelector('.cancel-btn').onclick = closeModal;
    document.querySelector('.submit-btn').onclick = closeModal;

    function closeModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
