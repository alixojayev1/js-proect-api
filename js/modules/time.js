function timeS(){
    let dedline = "2024-03-01";

    function getStartTime(endtime) {
      const time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((time / (1000 * 60)) % 60),
        seconds = Math.floor((time / (1000 * 60)) % 60);
  
      return {
        totalTime: time,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds "),
        timeInterval = setInterval(updateClock, 1000);
      updateClock();
      function updateClock() {
        const time = getStartTime(endtime);
        days.textContent = time.days;
        hours.textContent = time.hours;
        minutes.textContent = time.minutes;
        seconds.textContent = time.seconds;
  
        if (time.totalTime <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
    setClock(".timer", dedline);
}

export default timeS