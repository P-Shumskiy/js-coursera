// Встроенный в Node.JS модуль для проверок
let assert = require('assert');

// Подключаем свою функцию
let normalizeHashTags = require('./index.js');

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

console.info('OK!');
