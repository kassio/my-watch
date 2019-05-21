import { settingsStorage } from 'settings';
import * as messaging from 'messaging';

const messagesQueue = [];

settingsStorage.onchange = event => {
  if (event.newValue !== event.oldValue) {
    sendNewSettingValue(event.key, event.newValue);
  }
};

const sendNewSettingValue = (key, val) => {
  if (key && val) {
    sendSettingData({
      key,
      value: JSON.parse(val),
      message: 'newSettingValue'
    });
  }
};

messaging.peerSocket.onopen = () => {
  while (messagesQueue.length > 0) {
    let message = messagesQueue.pop();
    console.info(`Dequeueing message ${JSON.stringify(message)}`); // eslint-disable-line no-console
    messaging.peerSocket.send(message);
  }
};

const sendSettingData = data => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.info(`Enqueueing message: ${JSON.stringify(data)}`); // eslint-disable-line no-console
    messagesQueue.unshift(data);
  }
};
