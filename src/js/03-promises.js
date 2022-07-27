import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelayForm: document.querySelector('[name="delay"]'),
  stepDelayForm: document.querySelector('[name="step"]'),
  amountForm: document.querySelector('[name="amount"]'),
  submitForm: document.querySelector('[type="submit"]'),
}

// Событие по клику. Перебирает значение введенное в amountForm
refs.submitForm.addEventListener('click', onSubmitForm)

function onSubmitForm(e) { 
  e.preventDefault();
  
  let position = 0;
  let delay;

  for (let i = 0; i < Number(refs.amountForm.value); i+=1) {
      position += 1;
      delay = Number(refs.firstDelayForm.value) + Number(refs.stepDelayForm.value) * i;
      createPromise(position, delay)
  }     
}

// Создает промис и выводит результ
function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => { 
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
      

  }).then((result) => {
    Notify.success(result);
  })
  .catch((error) => {
    Notify.failure(error);
  });
  
}



  