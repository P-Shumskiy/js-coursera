function query(collection) {
    if (arguments.length === 1) {
        return collection
    } else {
        const {fields, filterIn} = formatInput(arguments)

        const {propertyToFilter, valuesToFilter} = filterIn;

        const filteredCollection = collection.filter((obj) => {
            return valuesToFilter.includes(obj[propertyToFilter])
        });

        const selectedCollection = [];
        filteredCollection.forEach((value) => {
            const newObj = {};
            Object.keys(value).map((field) => {
                if (fields.includes(field)) {
                    newObj[field] = value[field]
                }
            });
            if (Object.keys(newObj).length){
                selectedCollection.push(newObj)
            }
        });
        return selectedCollection
    }
}

function select() {
    return {
        args: [...arguments],
        type: 'select'
    }
}

function filterIn(property, values) {
    return {
        propertyToFilter: property,
        valuesToFilter: [...values],
        type: 'filter'
    }
}

function intersect(args) {
    return [...args].reduce(
      (accumulator, current) => accumulator.filter(
        (x) => current.includes(x))
    )
}

function formatInput(args) {
    const selectionsToIntersect = []
    const filtersToIntersect = []
    let propertyToFilter

    for (let i = 1; i < args.length; i++) {
        let obj = args[i]
        if (obj.type === 'select') {
            selectionsToIntersect.push(obj.args)
        } else if (obj.type === 'filter') {
            filtersToIntersect.push(obj.valuesToFilter)
            propertyToFilter = obj.propertyToFilter
        }
    }
    const fields = intersect(selectionsToIntersect)
    const filterIn = {
        propertyToFilter,
        valuesToFilter: intersect(filtersToIntersect)
    }
    return {fields, filterIn}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
