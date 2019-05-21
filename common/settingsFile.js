import * as fs from 'fs';
import { settingsKeys } from '../common/utils.js';

const SETTINGS_FILE = 'QuickStatsSettings.txt';

export const writeSetting = ({ key, value }) => {
  const settings = readSettings();
  writeSettings({ ...settings, [key]: value });
};

export const writeSettings = settings => {
  console.info(`WRITING SETTINGS ${JSON.stringify(settings)}`); // eslint-disable-line no-console
  fs.writeFileSync(SETTINGS_FILE, settings, 'cbor');
};

export const readSetting = key => {
  try {
    return readSettings()[key];
  } catch (error) {
    return null;
  }
};

const readSettings = (retry = false) => {
  try {
    return fs.readFileSync(SETTINGS_FILE, 'cbor') || {};
  } catch (error) {
    if (!retry) {
      writeSettings(defaultSettings());
      return readSettings(true);
    } else {
      console.error(`>>> Failed to read settings: ${error}`); // eslint-disable-line no-console
      return {};
    }
  }
};

const defaultSettings = () => {
  let result = {};

  for (let key in settingsKeys) {
    const { defaultValue } = settingsKeys[key];
    result[key] = defaultValue;
  }

  return result;
};
