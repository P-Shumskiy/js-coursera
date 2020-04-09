// Телефонная книга
let phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function(command) {
        function addContact(name, phonesList) {
            let phones = phonesList.split(',');
            if (phoneBook.hasOwnProperty(name)) {
                for (let i = 0; i < phones.length; i++) {
                    phoneBook[name].push(phones[i]);
                }
            } else {
                phoneBook[name] = [];
                for (let i = 0; i < phones.length; i++) {
                    phoneBook[name].push(phones[i]);
                }
            }
        }

        function removePhone(phone) {
            let keys = Object.keys(phoneBook);
            for (let i = 0; i < keys.length; i++) {
                let name = keys[i];
                const index = phoneBook[name].indexOf(phone);
                if (index > -1) {
                    phoneBook[name].splice(index, 1);
                    return true
                }
            }
            return false
        }

        function show() {
            let result = [];
            let sortedKeys = Object.keys(phoneBook).sort();
            //console.log(sortedKeys);
            for (let i = 0; i < sortedKeys.length; i++) {
                let namePhones = phoneBook[sortedKeys[i]];
                let name = sortedKeys[i];
                if(namePhones.length !== 0) {
                    let phones = namePhones.length === 1 ? namePhones.join('') : namePhones.join(', ');
                    let resultString = name + ': ' + phones;
                    //console.log(resultString);
                    result.push(resultString)
                }
            }
            return result
        }

        let inputCommand = command.split(' '),
            commandName = inputCommand[0];

        if (commandName === 'ADD') {
            return addContact(inputCommand[1], inputCommand[2])

        } else if(commandName === 'REMOVE_PHONE') {
            return removePhone(inputCommand[1])
        } else if(commandName === 'SHOW') {
            return show()

        }
};

