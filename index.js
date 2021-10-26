class CountdownTimer {   
    constructor({ selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.container = document.querySelector(this.selector);
        this.days = this.container.querySelector('[data-value="days"]');
        this.hours = this.container.querySelector('[data-value="hours"]');
        this.secs = this.container.querySelector('[data-value="secs"]');
        this.mins = this.container.querySelector('[data-value="mins"]');

     }
    getRefs () {
        // const container = document.querySelector(this.selector);
        // const days = container.querySelector('[data-value="days"]');
        // const hours = container.querySelector('[data-value="hours"]');
        // const mins = container.querySelector('[data-value="mins"]');
        // const secs = container.querySelector('[data-value="secs"]');
        
        const days = this.days;
        const hours = this.hours;
        const secs = this.secs;
        const mins = this.mins;
        return { days, hours, mins, secs };
    }
    startTimer ({ days, hours, mins, secs }) {
        const time= this.targetDate - Date.now();
        days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
    }
    pad(value) {
        return String(value).padStart(2, "0");
    }
    start () {
        setInterval(() => {
            this.startTimer(this.getRefs())
        })
    }
    // updateClockface({ days, hours, mins, secs }) {
    //     container.textContent = `${days.textContent}:${hours.textContent}:${mins.textContent}:${secs.textContent}`
    //  }
}
 
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2021'),
});
timer.start();
// timer.updateClockface({ days, hours, mins, secs });