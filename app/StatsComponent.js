import document from 'document';
import { me as appbit } from 'appbit';
import { today, goals } from 'user-activity';

const render = () => {
  if (appbit.permissions.granted('access_activity')) {
    setLabel('active-minutes', 'activeMinutes');
    setLabel('calories');
    setLabel('elevation-gain', 'elevationGain');
    setLabel('steps');
    setLabel('distance');
  }
};

const setLabel = (label, value = label) => {
  const text = `${today.adjusted[value]}/${goals[value]}`;
  document.getElementById(label).text = text;
};

export default { render };
