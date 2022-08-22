function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseInt(textElementValueString);
  return textElementValue;
}
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

const selectButton = document.querySelectorAll(".btn-select");
for (const button of selectButton) {
  button.addEventListener("click", function () {
    const allPlayerName = button.parentNode.children[0].innerText;

    if ((button.disabled = true)) {
      const listContainer = document.getElementById("player-name-show");

      const li = document.createElement("li");
      li.innerText = allPlayerName;
      listContainer.appendChild(li);

      button.style.background = "grey";
    }
  });
}
