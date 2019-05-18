import document from 'document';
import { display } from 'display';
import { BodyPresenceSensor } from 'body-presence';
import { HeartRateSensor } from 'heart-rate';

const render = () => {
  if (HeartRateSensor) {
    const heartRateSensor = new HeartRateSensor();

    heartRateSensor.addEventListener('reading', () => {
      document.getElementById('heart-rate').text = `${heartRateSensor.heartRate} BPM`;
    });

    startSensor(heartRateSensor);
  }
};

const startSensor = heartRateSensor => {
  if (BodyPresenceSensor) {
    const bodyPresenceSensor = new BodyPresenceSensor();

    bodyPresenceSensor.addEventListener('reading', () => {
      toggleSensor(heartRateSensor, bodyPresenceSensor.present && display.on);
    });

    bodyPresenceSensor.start();
  }

  display.addEventListener('change', () => {
    toggleSensor(heartRateSensor, display.on);
  });
};

const toggleSensor = (heartRateSensor, cond) => {
  if (cond) {
    heartRateSensor.start();
  } else {
    heartRateSensor.stop();
  }
};

export default { start: render };
