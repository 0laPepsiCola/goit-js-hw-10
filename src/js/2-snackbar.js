import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import xOctagonIcon from '../img/bi_x-octagon.svg';
import check2CircleIcon from '../img/bi_check2-circle.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        theme: 'dark',
        color: '#59a10d',
        iconUrl: check2CircleIcon,
        iconColor: '#fff',
        titleColor: '#fff',
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        theme: 'dark',
        color: '#ef4040',
        iconUrl: xOctagonIcon,
        iconColor: '#fff',
        titleColor: '#fff',
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        position: 'topRight',
      });
    });
  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
