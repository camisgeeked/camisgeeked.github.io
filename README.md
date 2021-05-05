# Body Mass Index Calculator - Website/App Project (Computer Science Fundamentals)

## Description

Simple BMI Calculator using the imperial system.  Input your height in inches and body weight in pounds to recieve your BMI and weight classification.

![Preview of Site](https://i.imgur.com/2kH0CrI.png)

### How does it work?

Once the end user has inputted their information to the 2 forms in `index.html`, they will press the "Calculate!" button.

Upon the button being pressed, 2 functions are called.

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

These functions essentially create a new Object (Measurements) via a constructor with the user inputted forms: 

```js
/**
 * @class
 * @classdesc Creates a new person in the workspace to calculate a BMI for.
 */

class Measurements {

    /**
     * @constructor
     * @param {Number} weight Weight of given person.
     * @param {Number} height Height of given person.
     * @summary Defining height and weight measurements.
     */

    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    /**
     * @method BMIcalc()
     * @summary BMI Calculation Function
     * @returns {Number} BMI of Object.Measurements
     */

    BMIcalc() {
        return Math.round(this.weight / Math.pow(this.height, 2));
    }

    get BMI() {
        return this.BMIcalc();
    }
}
```

Finally, we have the BMI and the `defineBMI()` function changes the innerHTML of the results element to the returned result of `getBMI()`!
