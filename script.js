setInterval(setClock,1000)

const getHours = document.querySelector("[data-hours-hand]")
const getMinutes = document.querySelector("[data-minutes-hand]")
const getSeconds = document.querySelector("[data-seconds-hand]")

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(getSeconds, secondsRatio);
  setRotation(getMinutes, minutesRatio);
  setRotation(getHours, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360)
}
setClock()
