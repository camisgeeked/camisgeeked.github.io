/**
 * @function getBMI()
 * @summary Calculating BMI of weightInput and heightInput.
 * @returns Quotient of BMI formula given class Measurements.
 */

function getBMI() {

    const measurements = new Measurements(poundToKilo(weightInput.value), inchToMeter(heightInput.value));

    return measurements.BMI;
}

/**
 * @function defineBMI()
 * @summary Defines BMI on webpage.
 * @returns {Null}
 */

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


/**
 * @name underweight
 * @summary List of underweight BMI classifications.
 * @type {Array.Number}
 * @returns {null}
 */

var underweight = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
];

/**
 * @name healthy
 * @summary List of healthy BMI classifications.
 * @type {Array.Number}
 * @returns {null}
 */

var healthy = [19, 20, 21, 22, 23, 24];

/**
 * @name overweight
 * @summary List of overweight BMI classifications.
 * @type {Array.Number}
 * @returns {null}
 */

var overweight = [25, 26, 27, 28, 29];

/**
 * @name obese
 * @summary List of obese BMI classifications.
 * @type {Array.Number}
 * @returns {null}
 */

var obese = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

/**
 * @name extremelyObese
 * @summary List of extremely obese BMI classifications.
 * @type {Array.Number}
 * @returns {null}
 */

var extremelyObese = [40, 41, 42];

/**
 * @function getClassification()
 * @summary Returns the classification of the result of getBMI()
 * @todo fix
 * @returns {String} BMI classification
 */

function getClassification() {
    let roundBMI = getBMI();
    let classification;

    if (underweight.includes(roundBMI)) {
        return "Underweight";
    } else if (healthy.includes(roundBMI)) {
        return "Healthy!";
    } else if (overweight.includes(roundBMI)) {
        return "Overweight";
    } else if (obese.includes(roundBMI)) {
        return "Obese";
    } else if (extremelyObese.includes(roundBMI)) {
        return "Extremely Obese"
    } else {
        return "Error! Please see above."
    }

}

/**
 * @function defineClassification()
 * @summary Checks classification of BMI.
 * @returns {Number} BMI classification for generated BMI to classOut.
 */

function defineClassification() {
    let roundBMI = getBMI();
    let classOut = document.getElementById("classOut");
    let classification = getClassification();

    if (roundBMI <= 0) {
        classOut.textContent =
            "Error! BMI is below 0; Please input valid numbers.";
    } else {
        classOut.textContent = classification;
    }
}

/**
 * @function changeTheme()
 * @param {String} theme Passes the value of the key in window.sessionStorage.getItem('theme')
 * @summary Changes theme of the page to dark mode/light mode
 * @returns {Null}
 */

function changeTheme(theme) {
    if (theme === 'dark') {
        for (let item of document.querySelectorAll(".light")) {
            item.classList.remove("light");
            item.classList.add("dark");
        }
    } else if (theme === 'light') {
        for (let item of document.querySelectorAll(".dark")) {
            item.classList.remove("dark");
            item.classList.add("light");
        }
    }
    // if (theme === 'light') {
    //     document.getElementById('change').textContent = "Light Mode!";
    // } else {
    //     document.getElementById('change').textContent = "Dark Mode!";
    // }
}

/**
 * @function createKey()
 * @summary Checks whether or not the key 'theme' exists in window.sessionStorage, if it returns null, a new key is created with the default theme.
 * @returns {Null}
 */

function createKey() {
    if (window.sessionStorage.getItem('theme') === null) {
        window.sessionStorage.setItem('theme', 'light');
    }
}

/**
 * @function triggerChangeTheme()
 * @summary Checks the theme of the current page and changes it upon being called (via HTML button)
 * @returns {Null}
 */

function triggerChangeTheme() {
    if (window.sessionStorage.getItem('theme') === 'light') {
        changeTheme('dark');
        window.sessionStorage.setItem('theme', 'dark');
    } else {
        changeTheme('light');
        window.sessionStorage.setItem('theme', 'light');
    }
}

document.onload = function() {
    createKey();
    changeTheme(window.sessionStorage.getItem('theme'));
};