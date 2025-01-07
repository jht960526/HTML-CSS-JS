console.log('Hello World!asdas');

const els = document.querySelectorAll('div');
els.forEach((el) => {
  el.addEventListener('click', () => {
    console.log('click');
  });
});