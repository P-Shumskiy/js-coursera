/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let tags = [];

    function isTag(word) {
        return word.startsWith('#')
    }

    function getTag(word) {
        tags.push(word.slice(1, word.length))
    }

    tweet.split(' ').filter(isTag).forEach(getTag);

    return tags;
};
