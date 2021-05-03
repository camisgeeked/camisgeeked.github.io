/**
 * @function inchToMeter()
 * @summary Converts inch value to metric units.
 * @param {Number} heightInput Inch value from #inputs
 * @returns {Number} The "in" value equivalent in metric units (heightInM).
 */

function inchToMeter(heightInput) {
    var heightInM = heightInput * 0.0254;

    return heightInM;
}