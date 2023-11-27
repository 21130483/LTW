document.addEventListener("DOMContentLoaded", function () {
  createButtons();
});

function createButtons() {
  var buttonContainer = document.getElementById("button-container");

  for (var i = 1; i <= 64; i++) {
    var button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function () {
      checkButtonClick(this);
    });
    buttonContainer.appendChild(button);
  }
}

function checkButtonClick(clickedButton) {
  // var buttonNumber = parseInt(clickedButton.textContent);

  // if (buttonNumber === getCurrentButtonNumber()) {
  if (getCurrentButtonNumber2(clickedButton.textContent)) {
    clickedButton.style.visibility = "hidden";
  } else {
    alert("Sai button! Hãy nhấn theo thứ tự từ nhỏ đến lớn.");
  }
}

function getCurrentButtonNumber() {
  var buttons = document.querySelectorAll("#button-container button");
for (var i = 0; i < buttons.length; i++) {
  if (buttons[i].style.visibility !== "hidden") {
    return parseInt(buttons[i].textContent);
  }
}
return -1;
}

function getCurrentButtonNumber2(buttontext) {
  var buttons = document.querySelectorAll("#button-container button");
  var numberbutton = parseInt(buttontext) - 1;
  for (var i = 0; i < numberbutton; i++) {
    if (buttons[i].style.visibility !== "hidden") {
      return false;
    }
  }
  return true;
}
