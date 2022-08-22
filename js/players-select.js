const selectButton = document.querySelectorAll(".btn-select");
for (const button of selectButton) {
  button.addEventListener("click", function () {
    const playerName = button.parentNode.children[0].innerText;

    const listOderPlayerName = document.getElementById("player-name-show");

    if (listOderPlayerName.children.length < 5) {
      // create a new li list element.
      const li = document.createElement("li");
      li.innerText = playerName;
      listOderPlayerName.appendChild(li);
      button.style.background = "grey";
    } else {
      alert("Not allow above five player name. ");
      return;
    }
    button.disabled = true;
  });
}

document.getElementById("btn-calculate").addEventListener("click", function () {
  const listOderPlayerName = document.getElementById("player-name-show");
  const perPlayerBudget = getInputFieldValueById("per-player-field");

  // input field validtion  check
  if (isNaN(perPlayerBudget) && typeof perPlayerBudget === "number") {
    alert("Please vaild input number!!");
    return;
  } else {
    if (perPlayerBudget >= 0) {
      // total player budget calculate.
      const totalPlayerBudget =
        perPlayerBudget * listOderPlayerName.children.length;
      setTextElementValueById("player-expenses", totalPlayerBudget);
    } else {
      alert("Nagetive value not a allow!!");
      return;
    }
  }
});

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    const managerAmount = getInputFieldValueById("manager-field");
    const coachAmount = getInputFieldValueById("coach-field");
    const playerExpensesAmout = getTextElementValueById("player-expenses");

    // input field validation  check
    if (
      (isNaN(managerAmount) && typeof managerAmount === "number") ||
      (isNaN(coachAmount) && typeof managerAmount === "number")
    ) {
      alert("Please vaild input number!!");
      return;
    } else {
      if (managerAmount >= 0 && coachAmount >= 0) {
        // player, manager, coach total amount
        const totalAmount = managerAmount + coachAmount + playerExpensesAmout;
        setTextElementValueById("total-calculate", totalAmount);
      } else {
        alert("Nagetive value not a allow!!");
        return;
      }
    }
  });
