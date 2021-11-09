

const args = process.argv.slice(2); // store command line arguments(time intervals) into an array
const alarms = args.filter(arg => !isNaN(arg));

// const sortedAlarms = alarms.sort((a, b) => a - b); // sort the time intervals

for (let alarm of alarms) {
  if ( alarm < 0 ) continue;
  setTimeout(() => {
    console.log(alarm);
    // process.stdout.write('\007');
    // console.log('\u0007');
  }, alarm * 1000);
}