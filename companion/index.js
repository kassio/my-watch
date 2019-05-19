import { settingsStorage } from 'settings';
import * as messaging from 'messaging';

const messagesQueue = [];

settingsStorage.onchange = function (evt) {
  if (evt.newValue !== evt.oldValue) {
    sendNewSettingValue(evt.key, evt.newValue);
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
    console.log('Dequeueing message');
    let message = messagesQueue.pop();
    messaging.peerSocket.send(message);
  }
};

function sendSettingData(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log(`Enqueueing message: ${JSON.stringify(data)}`);
    messagesQueue.unshift(data);
  }
}
