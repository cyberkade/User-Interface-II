const player1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#score1"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#score2"),
};

const resetbtn = document.querySelector("#reset");
const maxScoreSelect = document.querySelector("#maxScore");
let maxScore = parseInt(maxScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.innerText = player.score;
  }
  if (player.score === opponent.score && player.score === maxScore - 1) {
    maxScoreSelect.classList.add("tiebreaker");
    maxScore++;
    for( let i = 0; i <= 6; i++){
      maxScoreSelect[i].innerText = `Win with ${maxScore} points!`;
    }
  }
  if (player.score === maxScore) {
    isGameOver = true;
    opponent.display.classList.add("has-text-danger");
    player.display.classList.add("has-text-success");
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
}

player1.button.addEventListener("click", function (e) {
  updateScore(player1, player2);
});

player2.button.addEventListener("click", function (e) {
  updateScore(player2, player1);
});

maxScoreSelect.addEventListener("change", function () {
  maxScore = parseInt(this.value);
  reset();
});

resetbtn.addEventListener("click", reset);

function reset() {
  if (isGameOver = true) {
    score1.innerText = 0;
    score2.innerText = 0;
    player1.score = 0;
    player2.score = 0;
    score2.classList.remove("has-text-success", "has-text-danger");
    score1.classList.remove("has-text-success", "has-text-danger");
    isGameOver = false;
    player1.button.disabled = false;
    player2.button.disabled = false;
    maxScoreSelect.classList.remove("tiebreaker");
    maxScore = parseInt(maxScoreSelect.value);
    // maxScoreSelect.selectedIndex = index;
    for (let i = 0; i <= 6; i++) {
      maxScoreSelect[i].value = 5 + i;
      maxScoreSelect[i].innerText = 5 + i;
    }
  }
}
