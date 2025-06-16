var newLine = true;
let value1;
let currentOperator;
function digitBtnPressed(button) {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    var currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;
  }
}
// AC button code, clears the display
function btnACPressed() {
  document.getElementById("inputBox").value = 0;
  newLine = true;
}
// Operator buttons event handler
function operatorBtnPressed(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);

  newLine = true;
}
// Equals Operator
function equalsBtnPressed() {
  let value2 = parseInt(document.getElementById("inputBox").value);
  let finalTotal;

  switch (currentOperator) {
    case "+":
      finalTotal = value1 + value2;
      break;
    case "-":
      finalTotal = value1 - value2;
      break;
    case "/":
      finalTotal = value1 / value2;
      break;
    case "x":
      finalTotal = value1 * value2;
      break;
  }
  document.getElementById("inputBox").value = finalTotal;
  value1 = 0;
  newLine = true;
}
