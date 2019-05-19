import document from 'document';
import { me as appbit } from 'appbit';
import { today, goals } from 'user-activity';
import { readSetting } from '../common/settingsFile.js';

let stats = {
  activeMinutes: {
    id: 'active-minutes'
  },
  calories: {
    id: 'calories'
  },
  elevationGain: {
    id: 'elevation-gain'
  },
  steps: {
    id: 'steps'
  },
  distance: {
    id: 'distance'
  }
};

const setStat = ({ id }) => {
  const statName = formatStatName(id);
  const done = today.adjusted[statName];
  const goal = goals[statName];
  const progression = done >= goal ? 360 : 360 * (done / goal);
  const color = readSetting(statName);

  document.getElementById(id).text = formatValue(done);
  document.getElementById(`${id}-progress`).sweepAngle = progression;
  document.getElementById(`${id}-icon`).style.fill = color;
  document.getElementById(`${id}-progress-base`).style.fill = color;
  document.getElementById(`${id}-progress`).style.fill = color;
};

const formatStatName = id => id.replace(/-([a-z])/g, g => g[1].toUpperCase());

const formatValue = value => {
  if (value < 1000) {
    return value;
  } else {
    return `${Math.floor(value / 10) / 100}K`;
  }
};

const render = () => {
  if (appbit.permissions.granted('access_activity')) {
    for (let key in stats) {
      setStat(stats[key]);
    }
  }
};

export default { start: render };
