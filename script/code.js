let screen = document.querySelector("#screen");
let inputValue = document.querySelector("#inputValue");
let unit = document.querySelector("#unit-of-measure");
let btn = document.querySelector("#calc-btn");

btn.addEventListener("click", () => {
  unit = unit.options[unit.selectedIndex].text;

  if (unit == "To Farenheit") {
    let farenValue = (+inputValue.value) * (1.8 + 32);
    screen.value = farenValue;
  } else if (unit == "To Celcius") {
    let celiusValue = (+inputValue.value - 32) * (5 / 9);
    screen.value = celiusValue;
  } else {
    throw new Error("user input not valid");
  }
});
