import clock from "clock";
import document from "document";
import { watchTime, watchDate } from "./components.js";

import { battery, charger } from "power";
console.log("The charger " + (charger.connected ? "is" : "is not") + " connected");
console.log(battery.chargeLevel + "%");

clock.granularity = "minutes";

clock.ontick = (evt) => {
  const { hours, minutes } = watchTime(evt);
  const { weekDay, day, month } = watchDate(evt);
  const watchTimeLabel = document.getElementById("time");
  const watchDateLabel = document.getElementById("date");
  
  watchTimeLabel.text = `${hours}:${minutes}`;
  watchDateLabel.text = `${weekDay}, ${day}/${month}`;
}
