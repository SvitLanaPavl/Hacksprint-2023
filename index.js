document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio('audio/1-06 It\'s the Most Wonderful Time of the Year.mp3');
  const play = document.getElementById('absolute-button');
  play.addEventListener('click', (event) => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();
    } else {
      audio.pause();
    }
  });

const email = document.querySelector('input');
const subscribe = document.querySelector('.subscribe');
const error = document.querySelector('.email-error');
const emailSpan = document.querySelector('.email-confirmed');
const dismiss = document.querySelector('.dismiss');

const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function submitHandler () {
  const userEmail = email.value;
  if (userEmail === '' || !userEmail.match(emailFormat)) {
    error.classList.remove('hidden');
    email.style.backgroundColor = 'rgba(255, 97, 85, 0.15)';
    email.style.border = '1px solid #FF6155';
    email.style.color = '#FF6155';
  } else {
    document.querySelector('.initial-state').classList.add('hidden');
    document.querySelector('.confirmed-state').classList.remove('hidden');
    emailSpan.innerHTML = `${userEmail}`;
  }
}

function resetState () {
  document.querySelector('.initial-state').classList.remove('hidden');
  document.querySelector('.confirmed-state').classList.add('hidden');
  error.classList.add('hidden');
  email.value = '';
  email.style.backgroundColor = '#fff';
  email.style.border = '1px solid #242742';
  email.style.opacity = '1';
  email.style.color = '#242742';
}

email.addEventListener('keypress', (e) => {
  error.classList.add('hidden');
  email.style.backgroundColor = '#fff';
  email.style.border = '1px solid #242742'
  email.style.opacity = '1';
  email.style.color = '#242742';
    if (e.key === 'Enter') {
      submitHandler();
    }
});

subscribe.addEventListener('click', submitHandler);
dismiss.addEventListener('click', resetState);
});
