import moment from 'moment'

export const valueToTime = (value, currentDate) => {
  if (value === '') {
    return null
  } else {
    let div = value.indexOf(':')
    let hour = parseInt(value.slice(0, div))
    let min = parseInt(value.slice(div + 1, div + 3))

    let tod = value.slice(-2)

    if (tod === 'PM') {
      hour = hour < 12 ? hour + 12 : 12
    } else {
      hour = hour < 12 ? hour : 0
    }

    return moment(currentDate, 'MM/DD/YYYY')
      .hour(hour).minute(min).toDate()
  }
}
