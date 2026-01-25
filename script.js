let currentLang = "fr";
let challenges = {};

// Charger les défis depuis challenges.json
async function loadChallenges() {
  const response = await fetch("challenges.json");
  challenges = await response.json();
  update();
}

// Retourne un défi aléatoire selon la langue
function randomChallenge() {
  const list = challenges[currentLang];
  return list[Math.floor(Math.random() * list.length)];
}

// Met à jour le texte du défi + animation fade-in
function update() {
  const challengeEl = document.getElementById("challenge");

  // Met à jour le texte AVANT l’animation
  challengeEl.textContent = randomChallenge();

  // Réinitialise l’animation
  challengeEl.classList.remove("fade-in");
  void challengeEl.offsetWidth; // force un recalcul

  // Relance l’animation
  challengeEl.classList.add("fade-in");
}

// Bouton "Nouveau défi"
document.getElementById("refresh").addEventListener("click", update);

// Sélecteur de langue
document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Met à jour l'état visuel des boutons
    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Recharge un défi dans la nouvelle langue
    update();
  });
});

// Références : afficher / masquer
const refToggle = document.getElementById("references-toggle");
const refSection = document.getElementById("references");

if (refToggle && refSection) {
  refToggle.addEventListener("click", () => {
    refSection.style.display =
      refSection.style.display === "block" ? "none" : "block";
  });
}

// Lancer l’application
loadChallenges();
