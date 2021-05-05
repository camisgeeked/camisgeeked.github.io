# Body Mass Index Calculator - Website/App Project (Computer Science Fundamentals)

## Description

Simple BMI Calculator using the imperial system.  Input your height in inches and body weight in pounds to recieve your BMI and weight classification.

![Preview of Site](https://i.imgur.com/2kH0CrI.png)

### How does it work?

1. Once the end user has inputted their information to the 2 forms in `index.html`, they will press the "Calculate!" button.
2. Upon the button being pressed, 2 functions are called.

`getBMI()`
```js
   function getBMI() {

    const measurements = new Measurements(poundToKilo(weightInput.value), inchToMeter(heightInput.value));

    return measurements.BMI;
}
```

`defineBMI()`
```js
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

These functions essentially create a new Object (Measurements) with the user inputted forms and use helper functions to convert the imperial units to metric for easier calculation as seen below:

`inchToMeter(heightInput)`
```js
function inchToMeter(heightInput) {
    var heightInM = heightInput * 0.0254;

    return heightInM;
}
```

`poundToKilo(weightInput)`

```js
function poundToKilo(weightInput) {
    var weightInKG = weightInput * 0.45359237;

    return weightInKG;
}
```

Finally, we have the BMI and the `defineBMI()` function changes the innerHTML of the results element to the returned result of `getBMI()`
