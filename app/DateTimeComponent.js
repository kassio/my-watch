import document from 'document';
import { preferences } from 'user-settings';
import * as util from '../common/utils';

const render = event => {
  renderTime(event);
  renderDate(event);
};

const renderTime = event => {
  const today = event.date;
  const hours = formatHours(today.getHours());
  const minutes = util.zeroPad(today.getMinutes());
  const watchTimeLabel = document.getElementById('time');

  watchTimeLabel.text = `${hours}:${minutes}`;
};

const renderDate = event => {
  const today = event.date;
  const weekDay = util.weekDayName(today.getDay());
  const day = util.zeroPad(today.getDate());
  const month = util.zeroPad(today.getMonth());
  const watchDateLabel = document.getElementById('date');

  watchDateLabel.text = `${weekDay}, ${day}/${month}`;
};

const formatHours = hours => {
  if (preferences.clockDisplay === '12h') {
    return hours % 12 || 12;
  } else {
    return util.zeroPad(hours);
  }
};

export default { render };
