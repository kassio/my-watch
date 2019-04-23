import document from 'document';
import { charger } from 'power';

const render = battery => {
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

export default { render };
