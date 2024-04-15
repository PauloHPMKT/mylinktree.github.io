const label = document.querySelectorAll('input');
const year = document.querySelector('#year');
const showEmailModal = document.querySelector('#showMailModal');
const emailModal = document.querySelector('.send_email');
let slideBorder = document.querySelector('.slide-controls');

label.forEach(input => input.addEventListener('click', (e) => {
  let target = e.target.id
  if(target === 'light') {
    document.body.classList.add('white')
    slideBorder.style.border = '4px solid #3419ce'
  } else {
    document.body.classList.remove('white')
    slideBorder.style.border = ''
  }
}))

// footer year config
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// show email modal
showEmailModal.addEventListener('click', () => {
  emailModal.classList.add('isVisible')
})

window.addEventListener('click', (e) => {
  if(e.target === emailModal) {
    emailModal.classList.remove('isVisible')
  }
})
