import document from 'document';
import { me as appbit } from 'appbit';
import { today, goals } from 'user-activity';

const stats = {
  activeMinutes: {
    color: 'fb-red',
    id: 'active-minutes'
  },
  calories: {
    color: 'fb-orange',
    id: 'calories'
  },
  elevationGain: {
    color: 'fb-peach',
    id: 'elevation-gain'
  },
  steps: {
    color: 'fb-mint',
    id: 'steps'
  },
  distance: {
    color: 'fb-purple',
    id: 'distance'
  }
};

const render = () => {
  if (appbit.permissions.granted('access_activity')) {
    for (let key in stats) {
      setStat(stats[key]);
    }
  }
};

const setStat = stat => {
  const statName = formatStatName(stat.id);
  const done = today.adjusted[statName];
  const goal = goals[statName];
  const progression = done >= goal ? 360 : 360 * (done / goal);

  document.getElementById(stat.id).text = formatValue(done);
  document.getElementById(`${stat.id}-progress`).sweepAngle = progression;
  document.getElementById(`${stat.id}-icon`).style.fill = stat.color;
  document.getElementById(`${stat.id}-progress-base`).style.fill = stat.color;
  document.getElementById(`${stat.id}-progress`).style.fill = stat.color;
};

const formatStatName = id => id.replace(/-([a-z])/g, g => g[1].toUpperCase());

const formatValue = value => {
  if (value < 1000) {
    return value;
  } else {
    return `${Math.floor(value / 10) / 100}K`;
  }
};

export default { render };
