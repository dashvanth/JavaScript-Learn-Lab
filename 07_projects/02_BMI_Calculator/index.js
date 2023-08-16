const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        
        if (bmi < 18.6) {
            results.innerHTML = `<span> BMI is = ${bmi} <br> You're underweight.`;
        } else if (bmi > 24.9) {
            results.innerHTML = `<span> BMI is = ${bmi} <br> You're overweight.`;
        } else {
            results.innerHTML = `<span> BMI is = ${bmi} <br> You're in the normal range.`;
        }
    }
});
