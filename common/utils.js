// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    return `0${i}`;
  } else {
    return i;
  }
}

export function weekDayName(day) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
}

export const settingsKeys = [
  {
    id: 'activeMinutes',
    title: 'Active Minutes',
    defaultValue: '#f83c40'
  },
  {
    id: 'calories',
    title: 'Calories',
    defaultValue: '#fc6b3a'
  },
  {
    id: 'elevationGain',
    title: 'Elevation Gain',
    defaultValue: '#ffcc33'
  },
  {
    id: 'steps',
    title: 'Steps',
    defaultValue: '#5be37d'
  },
  {
    id: 'distance',
    title: 'Distance',
    defaultValue: '#bd4efc'
  }
];
