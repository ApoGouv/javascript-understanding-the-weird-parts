function longRunningTask() {
  console.log('Starting long-running task...');
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {} // Simulates a task taking 3 seconds
  console.log('Long-running task finished.');
}

function clickHandler() {
  console.log('Click event handled.');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

console.log('Starting execution.');
longRunningTask();
console.log('Execution finished.');
