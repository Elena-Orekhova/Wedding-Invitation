function updateCountdown() {
  let now = new Date().getTime();
  let countdownDate = new Date("July 26, 2024 13:00:00").getTime();
  let distance = countdownDate - now;

  if (distance <= 0) {
    document.querySelector(".footer__timer-day").style.display = "none";
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "Торжество уже состоялось";
    return;
  }
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
let interval = setInterval(updateCountdown, 1000);

updateCountdown();