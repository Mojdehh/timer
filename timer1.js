

const alarms = process.argv.slice(2); // store command line arguments(time intervals) into an array
// const result = alarms.filter(alarm => typeof alarm === "number");
// console.log(alarms)
// console.log(result);
// const sortedAlarms = alarms.sort((a, b) => a - b); // sort the time intervals


for (let alarm of alarms) {
  if ( alarm < 0 ) continue;
  setTimeout(() => {
    console.log(alarm);
    // process.stdout.write('\007');
    // console.log('\u0007');
  }, alarm * 1000);
}