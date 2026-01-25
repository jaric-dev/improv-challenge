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

// --- Mise à jour du sélecteur de langue ---
document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Retire la classe active de tous les boutons
    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));

    // Ajoute la classe active au bouton cliqué
    btn.classList.add("active");

    update();
  });
});

loadChallenges();
