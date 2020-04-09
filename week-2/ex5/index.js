/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let lowerCaseTags = [];

    function lowerCase(tag) {
        lowerCaseTags.push(tag.toLowerCase());
    }

    function getUniqueTags(acc, item) {
        return (acc.includes(item)) ? acc.concat([]) : acc.concat(item)
    }

    hashtags.forEach(lowerCase);
    let uniqueTags = lowerCaseTags.reduce(getUniqueTags, []);
    return uniqueTags.join(', ')
};

