import clock from 'clock';
import { battery } from 'power';
import DateTimeComponent from './DateTimeComponent.js';
import BatteryComponent from './BatteryComponent.js';
import StatsComponent from './StatsComponent.js';
import HeartRateComponent from './HeartRateComponent.js';

clock.granularity = 'minutes';

clock.ontick = event => {
  DateTimeComponent.render(event);
  StatsComponent.render();
};

BatteryComponent.render(battery);
battery.onchange = () => BatteryComponent.render(battery);

HeartRateComponent.render();
