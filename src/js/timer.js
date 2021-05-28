class CountdownTimer {
  constructor({ selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.valueDays = document.querySelector(`${selector} [data-value="days"]`);
    this.valueHours = document.querySelector(`${selector} [data-value="hours"]`);
    this.valueMins = document.querySelector(`${selector} [data-value="mins"]`);
    this.valueSecs = document.querySelector(`${selector} [data-value="secs"]`);
    this.onTimeCounter();
  };

  getTimeComponents (time) {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
    return { days, hours, mins, secs };
};

  updateTimeOnPage ({ days, hours, mins, secs }) {
    this.valueDays.textContent = `${days}`;
    this.valueHours.textContent = `${hours}`;
    this.valueMins.textContent = `${mins}`;
    this.valueSecs.textContent = `${secs}`;
}

  onTimeCounter() {
    this.intervalID = setInterval(() => {
      const time = this.targetDate - Date.now();
      this.updateTimeOnPage(this.getTimeComponents(time));
      if (time < 1000) { clearInterval(this.intervalID) }  
    }, 1000);
  }
}

const countTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 16, 2021')
});