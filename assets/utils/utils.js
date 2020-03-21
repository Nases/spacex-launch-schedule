import moment from 'moment'

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
  var meassurements = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
  var withPadding = (duration) => {
    var step = null;
    return meassurements.map((m) => duration[m]()).filter((n, i, a) => {
      var nonEmpty = Boolean(n);
      if (nonEmpty || step || i >= a.length - 2) {
        step = true;
      }
      return step;
    }).map((n) => ('0' + n).slice(-2)).join(':')
  }
  var eventTime = moment(utc).valueOf()
  var currentTime = moment().utc().valueOf()
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime, 'milliseconds')
  return valueOf ? duration._milliseconds : withPadding(duration)
}