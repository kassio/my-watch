import { settingsKeys } from '../common/utils.js';

const colorSet = [
  { color: '#f83c40' }, // fb-red
  { color: '#fc6b3a' }, // fb-orange
  { color: '#ffcc33' }, // fb-peach
  { color: '#5be37d' }, // fb-mint
  { color: '#bd4efc' }, //fb-purple
  { color: 'yellow' },
  { color: '#ffd733' }, // peach
  { color: 'orange' },
  { color: 'red' },
  { color: 'magenta' },
  { color: 'pink' },
  { color: 'plum' },
  { color: 'violet' },
  { color: 'purple' },
  { color: 'indigo' },
  { color: '#7898f8' }, // cerulean
  { color: '#7090b5' }, // slate
  { color: 'lavender' },
  { color: 'blue' },
  { color: 'cyan' },
  { color: 'aqua' },
  { color: 'green' },
  { color: '#67e55d' }, // mint
  { color: 'lime' },
  { color: '#1b2c40' }, // slatepress
  { color: '#394003' }, // yellowpress
  { color: '#134022' }, // greenpress
  { color: 'white' },
  { color: 'lightgray' },
  { color: 'darkgray' },
  { color: '#303030' }
];
const ColorSelector = ({ id, title }) =>
  <Section title={<Text bold>{title}</Text>}>
    <ColorSelect settingsKey={id} colors={colorSet} />
  </Section>
;
const Settings = props =>
  <Page>{Object.values(settingsKeys).map(setting => ColorSelector(setting))}</Page>
;
registerSettingsPage(Settings);
