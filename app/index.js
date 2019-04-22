import clock from 'clock';
import document from 'document';
import { watchTime, watchDate } from './components.js';

import { battery, charger } from 'power';

clock.granularity = 'minutes';

clock.ontick = evt => {
  setTime(evt);
  setDate(evt);
};

battery.onchange = () => {
  updateBatteryIcon();
};

const setTime = evt => {
  const { hours, minutes } = watchTime(evt);
  const watchTimeLabel = document.getElementById('time');

  watchTimeLabel.text = `${hours}:${minutes}`;
};

const setDate = evt => {
  const { weekDay, day, month } = watchDate(evt);
  const watchDateLabel = document.getElementById('date');

  watchDateLabel.text = `${weekDay}, ${day}/${month}`;
};

const updateBatteryIcon = () => {
  const icon = document.getElementById('battery-icon');
  const batteryLabel = document.getElementById('battery');
  const batteryLevel = Math.floor(battery.chargeLevel);
  const goodPower = charger.connected && !charger.powerIsGood ? '!' : '';

  batteryLabel.text = `${goodPower}${batteryLevel}%`;

  if (batteryLevel < 17 || charger.connected) {
    icon.width = 0;
  } else if (batteryLevel < 50) {
    icon.style.fill = 'orange';
    icon.width = batteryLevel * 5 / 10;
  } else {
    icon.style.fill = 'green';
    icon.width = batteryLevel * 5 / 10;
  }
};
