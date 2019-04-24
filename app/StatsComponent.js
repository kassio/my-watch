import document from 'document';
import { me as appbit } from 'appbit';
import { today, goals } from 'user-activity';

const render = () => {
  if (appbit.permissions.granted('access_activity')) {
    setStat('active-minutes', 'activeMinutes');
    setStat('calories');
    setStat('elevation-gain', 'elevationGain');
    setStat('steps');
    setStat('distance');
  }
};

const setStat = (stat, statName = stat) => {
  const done = today.adjusted[statName];
  const goal = goals[statName];
  const progression = done >= goal ? 360 : 360 * (done / goal);

  document.getElementById(stat).text = done;
  document.getElementById(`${stat}-progress`).sweepAngle = progression;
};

export default { render };
