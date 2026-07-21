function updateClock() {
  const now = new Date();
  const clockElement = document.getElementById('my-clock');
  if (clockElement) {
    clockElement.textContent = now.toLocaleTimeString('ja-JP');
  }
}

setInterval(updateClock, 1000);
updateClock();
