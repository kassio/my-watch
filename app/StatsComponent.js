import document from 'document';
import { me as appbit } from 'appbit';
import { today } from 'user-activity';

const render = () => {
  if (appbit.permissions.granted('access_activity')) {
    document.getElementById('active-minutes').text = today.adjusted.activeMinutes;
    document.getElementById('calories').text = today.adjusted.calories;
    document.getElementById('elevation-gain').text = today.adjusted.elevationGain;
    document.getElementById('steps').text = today.adjusted.steps;
    document.getElementById('distance').text = today.adjusted.distance;
  }
};

export default { render };
