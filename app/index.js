import DateTimeComponent from './DateTimeComponent.js';
import BatteryComponent from './BatteryComponent.js';
import StatsComponent from './StatsComponent.js';
import HeartRateComponent from './HeartRateComponent.js';
import AppSettings from './AppSettings.js';

AppSettings.start({ onChange: () => StatsComponent.start() });

BatteryComponent.start();

HeartRateComponent.start();

DateTimeComponent.start({ onTick: () => StatsComponent.start() });
