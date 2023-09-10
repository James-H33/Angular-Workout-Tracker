export const makeGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}

export const convertTimeFromDates = (time: number) => {
  return Math.round((new Date().valueOf() - time) / 1000);
}

export const formatTimeFromSeconds = (t: number) => {
  const oneHourInSec = 3600;
  const oneMinInSec = 60;
  let hour = 0;

  if (t >= oneMinInSec) {
    hour = Math.floor(t / oneHourInSec);
    t = t - (hour * oneHourInSec);
  }

  const minutes = getRemainingTimeFromSeconds(t);

  return hour + ':' + minutes
}

function getRemainingTimeFromSeconds(t: number) {
  if (t >= 60) {
    const m = Math.floor(t / 60);
    const s = t % 60;

    const sec = s < 10 ? `0${s}` : s;
    const min = m < 10 ? `0${m}` : m;

    return `${min}:${sec}`;
  } else {
    if (t < 10) {
      return `00:0${t}`;
    }

    return `00:${t}`;
  }
}
