// https://stackblitz.com/edit/dom-project-chaiaurcode-wnyibq?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js,2-BMICalculator%2Findex.html

const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
console.log(body);
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'grey') {
    body.style.backgroundColor = e.target.id;
    // }
  });
});
