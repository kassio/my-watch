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

export const settingsKeys = {
  activeMinutes: {
    id: 'activeMinutes',
    title: 'Active Minutes',
    defaultValue: '#f83c40'
  },
  calories: {
    id: 'calories',
    title: 'Calories',
    defaultValue: '#fc6b3a'
  },
  elevationGain: {
    id: 'elevationGain',
    title: 'Elevation Gain',
    defaultValue: '#ffcc33'
  },
  steps: {
    id: 'steps',
    title: 'Steps',
    defaultValue: '#5be37d'
  },
  distance: {
    id: 'distance',
    title: 'Distance',
    defaultValue: '#bd4efc'
  }
};
