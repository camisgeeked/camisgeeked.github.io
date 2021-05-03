/**
 * @function poundToKilo()
 * @summary Converts "lbs" value to metric units.
 * @param {Number} weightInput Pound value from #inputs
 * @returns {Number} The "lbs" value equivalent in metric units (weightInKG).
 */

function poundToKilo(weightInput) {
    var weightInKG = weightInput * 0.45359237;

    return weightInKG;
}