function my_Clock() {
  this.cur_date = new Date();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  if (this.seconds < 10) {
    this.seconds = "0" + String(this.seconds);
  }
  if (this.minutes < 10) {
    this.minutes = "0" + String(this.minutes);
  }
  if (this.cur_date.getHours() >= 12) {
    this.hours = this.cur_date.getHours();
    if (this.hours != 12) {
      this.hours -= 12;
    }
    this.seconds += " PM";
  } else {
    this.hours = this.cur_date.getHours();
    if (this.hours == 0) {
      this.hours += 12;
    }
    this.seconds += " AM";
  }
  const dayWeek = this.cur_date.getDay();
  const dates = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  this.dayOfWeek = dates[dayWeek];
  this.date = this.cur_date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  this.month = months[this.cur_date.getMonth()];
  this.year = this.cur_date.getFullYear();
}
my_Clock.prototype.run = function () {
  setInterval(this.update.bind(this), 1);
};
my_Clock.prototype.update = function () {
  this.updateTime();
  document.getElementById("time").innerHTML =
    this.hours + ":" + this.minutes + ":" + this.seconds;
  document.getElementById(
    "day"
  ).innerText = `${this.dayOfWeek}, ${this.month} ${this.date}, ${this.year}`;
};
my_Clock.prototype.updateTime = function () {
  this.cur_date = new Date();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  if (this.seconds < 10) {
    this.seconds = "0" + String(this.seconds);
  }
  if (this.minutes < 10) {
    this.minutes = "0" + String(this.minutes);
  }
  if (this.cur_date.getHours() >= 12) {
    this.hours = this.cur_date.getHours();
    if (this.hours != 12) {
      this.hours -= 12;
    }
    this.seconds += " PM";
  } else {
    this.hours = this.cur_date.getHours();
    if (this.hours == 0) {
      this.hours += 12;
    }
    this.seconds += " AM";
  }
  const dayWeek = this.cur_date.getDay();
  const dates = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  this.dayOfWeek = dates[dayWeek];
  this.date = this.cur_date.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  this.month = months[this.cur_date.getMonth()];
  this.year = this.cur_date.getFullYear();
};
var clock = new my_Clock();
clock.run();

const backgroundURL = document.querySelector("#background-url");
backgroundURL.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    try {
      const value = backgroundURL.value;
      if (value) {
        document.body.style.background = "url('" + value + "')";
      } else {
        document.body.style.background =
          'url("https://wallpapershome.com/images/wallpapers/lake-aurora-3840x2160-4k-hd-wallpaper-florida-night-sky-stars-12771.jpg")';
      }
    } catch (err) {
      alert("Invalid wallpaper URL.");
    }
  }
});

const settingsBtn = document.querySelector("#settings-btn");
const settings = document.getElementsByClassName("settings")[0];
const backgroundLabel = document.getElementById("background-label");
settingsBtn.addEventListener("click", function (e) {
  settings.classList.toggle("blur-background");
  if (backgroundURL.style.display === "none") {
    backgroundURL.style.display = "inline";
    backgroundLabel.style.display = "inline";
  } else {
    backgroundURL.style.display = "none";
    backgroundLabel.style.display = "none";
  }
});
