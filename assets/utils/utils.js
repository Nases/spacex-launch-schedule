import moment from 'moment'
var momentDurationFormatSetup = require("moment-duration-format")

export const getYoutubeEmbedLink = (url) => {
  if (!url) return undefined
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11)
    ? 'https://www.youtube.com/embed/' + match[2]
    : null
}

// given utc time get time left in scaleable simple output -> 02:15:01:11 or 1515412312 & -123124214
export const getTimeLeft = (utc, valueOf = false) => {
  var eventTime = moment(utc).valueOf()
  var currentTime = moment().utc().valueOf()
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime, 'milliseconds')
  return valueOf ? duration._milliseconds : moment.duration(diffTime, "milliseconds").format('dd:hh:mm:ss')
}