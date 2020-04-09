function timeManager(inputDate) {
  const parseDate = function (date=this.date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    const array = [year, month, day, hour, minute].map((current) => current.toString())
    for (let i = 0; i < array.length; i++) {
      let current = array[i].toString()
      if (current.length === 1) {
        array[i] = '0' + current
      }
    }

    return `${array[0]}-${array[1]}-${array[2]} ${array[3]}:${array[4]}`
  }

  let date = new Date(Date.parse(inputDate))

  let returningObject = {
    add: function (value, type, _subtract) {
      if (value < 0 && ! _subtract) {
        throw new TypeError()
      }

      switch (type) {
        case 'years':
          date.setFullYear(date.getFullYear() + value)
          return this

        case 'months':
          date.setMonth(date.getMonth() + value)
          return this

        case 'days':
          date.setDate(date.getDate() + value)
          return this

        case 'hours':
          date.setHours(date.getHours() + value)
          return this

        case 'minutes':
          date.setMinutes(date.getMinutes() + value)
          return this

        default:
          throw new TypeError()
        }
      },
    subtract: function (value, type) {
      if (value < 0) {
        throw new TypeError()
      }
      this.add(-value, type, true)
      return this
    },
    date,
  }

    Object.defineProperty(returningObject, 'value', {
      get: function () {
        return parseDate(date)
      }
    })

  return returningObject
}

module.exports = timeManager
