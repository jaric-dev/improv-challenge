let currentLang = "fr";
let challenges = {};

async function loadChallenges() {
  const response = await fetch("challenges.json");
  challenges = await response.json();
  update();
}

function randomChallenge() {
  const list = challenges[currentLang];
  return list[Math.floor(Math.random() * list.length)];
}

function update() {
  document.getElementById("challenge").textContent = randomChallenge();
}

document.getElementById("refresh").addEventListener("click", update);

document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    update();
  });
});

loadChallenges();
