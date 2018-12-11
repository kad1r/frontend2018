export function getFormattedHourAndMinute(date) {
  return `${date.getHours()}:${date.getMinutes()}`.toString()
}

export function getFormattedDiffTime(arrivalTime, departureTime) {
  let timeDiff = Math.abs(arrivalTime.getTime() - departureTime.getTime())
  let hours = Math.floor((timeDiff % 86400000) / 3600000)
  let minutes = Math.round(((timeDiff % 86400000) % 3600000) / 60000)

  return `${hours} saat ${minutes} dakika`
}

export function getFormattedHourAndMinuteText(minute) {
  let hours = Math.floor(minute / 60)
  let minutes = minute % 60

  return `${hours} Saat ${minutes} Dakika`
}
