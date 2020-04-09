/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let new_time = hours * 60 + minutes + interval;
    let new_hour = (Math.floor(new_time / 60) % 24).toString();
    let new_minutes = (new_time % 60).toString();
    if (new_minutes.length === 1) {
        new_minutes = '0' + new_minutes
    }
    if (new_hour.length === 1) {
        new_hour = '0' + new_hour
    }
    return new_hour + ':' + new_minutes
};
