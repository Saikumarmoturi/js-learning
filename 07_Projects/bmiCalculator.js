const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');
  console.log(`results ${results}`);
  console.log(height);
  if (height === '' || isNaN(height) || height < 0) {
    console.log('Nan');
    results.innerHTML = 'Please give a valid Height';
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    console.log('Nan');
    results.innerHTML = 'Please give a valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>UnderWeight</span>`;
    } else if (bmi > 18.6 && bmi < 24.6) {
      results.innerHTML = `<span>Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Over Weight</span>`;
    }
  }
});
