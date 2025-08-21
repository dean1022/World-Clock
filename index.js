function showClocks() {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("dddd, MMMM D, YYYY");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("hh:mm:ss [<small>]A[</small>]");

  let colomboElement = document.querySelector("#colombo");
  let colomboDateElement = colomboElement.querySelector(".date");
  let colomboTimeElement = colomboElement.querySelector(".time");
  colomboDateElement.innerHTML = moment()
    .tz("Asia/Colombo")
    .format("dddd, MMMM D, YYYY");
  colomboTimeElement.innerHTML = moment()
    .tz("Asia/Colombo")
    .format("hh:mm:ss [<small>]A[</small>]");

  let adelaideElement = document.querySelector("#adelaide");
  let adelaideDateElement = adelaideElement.querySelector(".date");
  let adelaideTimeElement = adelaideElement.querySelector(".time");
  adelaideDateElement.innerHTML = moment()
    .tz("Australia/Adelaide")
    .format("dddd, MMMM D, YYYY");
  adelaideTimeElement.innerHTML = moment()
    .tz("Australia/Adelaide")
    .format("hh:mm:ss [<small>]A[</small>]");

  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  madridDateElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("dddd, MMMM D, YYYY");
  madridTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
}

function updateClock(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${moment()
              .tz(cityTimeZone)
              .format("dddd, MMMM D, YYYY")}</div>
        </div>
    <div class="time">${moment()
      .tz(cityTimeZone)
      .format("hh:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
}

showClocks();
setInterval(showClocks, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateClock);
