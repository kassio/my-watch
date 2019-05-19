import * as messaging from 'messaging';
import { writeSettings, writeSetting } from '../common/settingsFile.js';

const start = ({ onChange }) => {
  messaging.peerSocket.onmessage = ({ data }) => {
    switch (data.message) {
      case 'writeDefaults':
        writeSettings(data.settings);
        onChange(data);
        break;
      case 'newSettingValue':
        writeSetting(data);
        onChange(data);
        break;
    }
  };
};

export default { start };
