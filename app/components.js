import { preferences } from 'user-settings';
import * as util from '../common/utils';

export function watchTime(evt) {
  const today = evt.date;
  const hours = formatHours(today.getHours());
  const minutes = util.zeroPad(today.getMinutes());

  return {
    hours,
    minutes
  };
}

const formatHours = hours => {
  if (preferences.clockDisplay === '12h') {
    return hours % 12 || 12;
  } else {
    return util.zeroPad(hours);
  }
};

export function watchDate(evt) {
  let today = evt.date;

  let weekDay = util.weekDayName(today.getDay());
  let day = util.zeroPad(today.getDate());
  let month = util.zeroPad(today.getMonth());

  return {
    weekDay,
    day,
    month
  };
}
