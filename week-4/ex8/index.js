function query(collection, fields, filterIn) {
    if (fields && filterIn) {
        const {propertyToFilter, valuesToFilter} = filterIn;

        const filteredCollection = collection.filter((obj) => {
            return valuesToFilter.includes(obj[propertyToFilter])
        });

        const selectedCollection = [];
        filteredCollection.forEach((value, index) => {
            const newObj = {};
            Object.keys(value).map((field) => {
                if (fields.includes(field)) {
                    newObj[field] = value[field]
                }
            });
            selectedCollection.push(newObj)
        });
        return selectedCollection
    } else {
        return collection
    }
}

function select() {
    return [...arguments]
}

function filterIn(property, values) {
    return {propertyToFilter: property,
        valuesToFilter: [...values]}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};