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