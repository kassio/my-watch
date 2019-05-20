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
    console.info('Dequeueing message');
    let message = messagesQueue.pop();
    messaging.peerSocket.send(message);
  }
};

const sendSettingData = data => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.info(`Enqueueing message: ${JSON.stringify(data)}`);
    messagesQueue.unshift(data);
  }
};
