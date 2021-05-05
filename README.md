# Body Mass Index Calculator - Website/App Project (Computer Science Fundamentals)

## Description

Simple BMI Calculator using the imperial system.  Input your height in inches and body weight in pounds to recieve your BMI and weight classification.

![Preview of Site](https://i.imgur.com/2kH0CrI.png)

### How does it work?

1. Once the end user has inputted their information to the 2 forms in `index.html`, they will press the "Calculate!" button.
1. Upon the button being pressed, 2 functions are called.
   1. `getBMI`
```js

    const measurements = new Measurements(poundToKilo(weightInput.value), inchToMeter(heightInput.value));

    return measurements.BMI;
}
```
   1. `defineBMI`
function defineBMI() {

    let BMI = getBMI();
    let bmiOut = document.getElementById("bmiOut");

    if (isNaN(BMI)) {
        bmiOut.textContent = "Please input valid height/weight.";
    } else {
        bmiOut.textContent = BMI;
        console.log("BMI calculated and printed.")
    }
}
```
