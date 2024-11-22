const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 7;
    case "Tuesday":
      return 7;
    case "Wednesday":
      return 7;
    case "Thursday":
      return 7;
    case "Friday":
      return 11;
    case "Saturday":
      return 8;
    case "Sunday":
      return 8;
    default:
      return 0;
  }
};
//console.log(getSleepHours('Thursday'));

getActualSleepHours = () => {
 return (
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday") 
);
};
const getIdealSleepHours = () =>{
  let idealHours =8;
  return idealHours*7;
}
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();
console.log(`Your ideal sleep yours are ${idealSleepHours}`);
console.log(`Your actual sleep yours are ${actualSleepHours}`);

if (actualSleepHours === idealSleepHours) {
  console.log(`You got ${actualSleepHours} sleep hours! This is a perfect amount of sleep.`)
}else if (actualSleepHours >= idealSleepHours){
console.log(`You got ${actualSleepHours} sleep hours! This was ${actualSleepHours-idealSleepHours} hour(s) more than what you need. This is more sleep than you need.`);
}else if (actualSleepHours <= idealSleepHours){
  console.log(`You got ${actualSleepHours} sleep hours! Your sleep debt ${idealSleepHours-actualSleepHours} hour(s) less than what you need. You should get more sleep.`);
  }