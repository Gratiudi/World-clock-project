function updateTime() {
  let berlin = document.querySelector("#berlin");
  let berlinDate = berlin.querySelector(".date");
  let berlinTime = berlin.querySelector(".time");
  berlinDate.innerHTML = moment().format("MMMM Do YYYY");
  berlinTime.innerHTML = moment()
    .tz("Europe/Berlin")
    .format("h:mm:ss [<small>]A[</small>]");

  let mexico = document.querySelector("#mexico");
  let mexicoDate = mexico.querySelector(".date");
  let mexicoTime = mexico.querySelector(".time");
  mexicoDate.innerHTML = moment().format("MMMM Do YYYY");
  mexicoTime.innerHTML = moment()
    .tz("America/Mexico_City")
    .format("h:mm:ss [<small>]A[</small>]");

  let bangkok = document.querySelector("#bangkok");
  let bangkokDate = bangkok.querySelector(".date");
  let bangkokTime = bangkok.querySelector(".time");
  bangkokDate.innerHTML = moment().format("MMMM Do YYYY");
  bangkokTime.innerHTML = moment()
    .tz("Asia/Bangkok")
    .format("h:mm:ss [<small>]A[</small>]");

  let zurich = document.querySelector("#zurich");
  let zurichDate = zurich.querySelector(".date");
  let zurichTime = zurich.querySelector(".time");
  zurichDate.innerHTML = moment().format("MMMM Do YYYY");
  zurichTime.innerHTML = moment()
    .tz("Europe/Zurich")
    .format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
