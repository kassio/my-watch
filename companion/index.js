import { settingsStorage } from 'settings';
import * as messaging from 'messaging';
import { me } from 'companion';
import { settingsKeys } from '../common/utils.js';

// Settings have been changed
settingsStorage.onchange = event => {
  sendValue(event.key, event.newValue);
};

if (me.launchReasons.wokenUp && !settingsStorage.getItem('defaultSettingsLoaded')) {
  setDefaults();
}

// Settings were changed while the companion was not running
if (me.launchReasons.settingsChanged) {
  if (!settingsStorage.getItem('defaultSettingsLoaded')) {
    setDefaults();
  } else {
    settingsKeys.map(setting => sendValue(setting.id, settingValue(setting.id)));
  }
}

const settingValue = key => console.log('setting');
// settingsStorage.getItem(key) || settingsKeys.find(setting => setting.id === key).defaultValue;

const setDefaults = () => {
  settingsKeys.map(setting =>
    settingsStorage.setItem(setting.id, JSON.stringify(setting.defaultValue))
  );
  settingsStorage.setItem('defaultSettingsLoaded', JSON.parse(true));
};

const sendValue = (key, val) => {
  if (val) {
    sendSettingData({
      key,
      value: JSON.parse(val)
    });
  }
};

const sendSettingData = data => {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log('No peerSocket connection');
  }
};
