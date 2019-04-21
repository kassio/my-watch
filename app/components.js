import { preferences } from "user-settings";
import * as util from "../common/utils";

export function watchTime(evt)  {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let minutes = util.zeroPad(today.getMinutes());

  return {
    hours,
    minutes
  }
}

export function watchDate(evt)  {
  let today = evt.date;

  let weekDay = util.weekDayName(today.getDay());
  let day = util.zeroPad(today.getDate());
  let month = util.zeroPad(today.getMonth());

  return {
    weekDay,
    day,
    month
  }
}