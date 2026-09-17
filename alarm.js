let alarmTime = null;

function setAlarm() {
  alarmTime = document.getElementById('alarmTime').value;
  checkAlarm();
}

function checkAlarm() {
  setInterval(() => {
    const now = new Date();
    const current = now.toTimeString().slice(0,5);
    if (current === alarmTime) {
      document.getElementById('alarmSound').play();
    }
  }, 1000);
}
