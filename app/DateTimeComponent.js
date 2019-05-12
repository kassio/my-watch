import document from 'document';
import clock from 'clock';
import { display } from 'display';
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
  const month = util.zeroPad(today.getMonth() + 1);
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

const start = onTick => {
  clock.granularity = 'minutes';
  clock.ontick = event => {
    render(event);
    onTick();
  };

  display.onchange = () => {
    if (display.on) {
      clock.granularity = 'minutes';
    } else {
      clock.granularity = 'hours';
    }
  };
};

export default { start };
