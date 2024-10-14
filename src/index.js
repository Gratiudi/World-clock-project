function updateTime() {
  let berlin = document.querySelector("#berlin");
  let berlinDate = berlin.querySelector(".date");
  let berlinTime = berlin.querySelector(".time");
  berlinDate.innerHTML = moment().tz("Europe/Berlin").format("MMMM Do YYYY");
  berlinTime.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("h:mm:ss [<small>]A[</small>]");

  let mexico = document.querySelector("#mexico");
  let mexicoDate = mexico.querySelector(".date");
  let mexicoTime = mexico.querySelector(".time");
  mexicoDate.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("MMMM Do YYYY");
  mexicoTime.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("h:mm:ss [<small>]A[</small>]");

  let bangkok = document.querySelector("#bangkok");
  let bangkokDate = bangkok.querySelector(".date");
  let bangkokTime = bangkok.querySelector(".time");
  bangkokDate.innerHTML = moment().tz("Asia/Bangkok").format("MMMM Do YYYY");
  bangkokTime.innerHTML = moment()
    .tz("Asia/Bangkok")
    .format("h:mm:ss [<small>]A[</small>]");

  let zurich = document.querySelector("#zurich");
  let zurichDate = zurich.querySelector(".date");
  let zurichTime = zurich.querySelector(".time");
  zurichDate.innerHTML = moment().tz("Europe/Zurich").format("MMMM Do YYYY");
  zurichTime.innerHTML = moment()
    .tz("Europe/Zurich")
    .format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

function displayCity(event) {
  let cityTime = moment().tz(event.target.value);
  let display = document.querySelector(".display");
  display.innerHTML = `<div class="city">
          <div>
            <h2>${event.target.value.split("/")[1]}</h2>
            <div class="date">${moment()
              .tz(event.target.value)
              .format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${moment()
            .tz(event.target.value)
            .format("h:mm:ss [<small>]A[</small>]")}</div>
        </div>`;
}

let selectedCity = document.querySelector("#city-drop-down");
selectedCity.addEventListener("change", displayCity);
