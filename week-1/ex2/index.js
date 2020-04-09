/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    return !(hours > 23 || hours < 0 || minutes < 0 || minutes > 59);

};