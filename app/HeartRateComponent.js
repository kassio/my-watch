import document from 'document';
import { display } from 'display';
import { BodyPresenceSensor } from 'body-presence';
import { HeartRateSensor } from 'heart-rate';

const render = () => {
  if (HeartRateSensor) {
    const heartRateSensor = new HeartRateSensor();
    const heartRateLabel = document.getElementById('heart-rate');

    heartRateSensor.addEventListener('reading', () => {
      heartRateLabel.text = heartRateSensor.heartRate;
    });

    startSensor(heartRateSensor);
  }
};

const startSensor = heartRateSensor => {
  if (BodyPresenceSensor) {
    const bodyPresenceSensor = new BodyPresenceSensor();

    bodyPresenceSensor.addEventListener('reading', () => {
      toggle(heartRateSensor, bodyPresenceSensor.present && display.on);
    });

    bodyPresenceSensor.start();
  }

  display.addEventListener('change', () => {
    toggle(heartRateSensor, display.on);
  });
};

const toggle = (heartRateSensor, cond) => {
  if (cond) {
    heartRateSensor.start();
  } else {
    heartRateSensor.stop();
  }
};

export default { render };
