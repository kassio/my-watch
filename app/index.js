import DateTimeComponent from './DateTimeComponent.js';
import BatteryComponent from './BatteryComponent.js';
import StatsComponent from './StatsComponent.js';
import HeartRateComponent from './HeartRateComponent.js';

BatteryComponent.start();

HeartRateComponent.start();

DateTimeComponent.start({
  onTick: () => {
    StatsComponent.start();
  }
});
