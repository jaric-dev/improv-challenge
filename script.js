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
  const challengeEl = document.getElementById("challenge");

  // Retire l’animation si elle est déjà là
  challengeEl.classList.remove("fade-in");

  // Force le navigateur à recalculer (permet de rejouer l’animation)
  void challengeEl.offsetWidth;

  // Ajoute l’animation
  challengeEl.classList.add("fade-in");

  // Met à jour le texte
  challengeEl.textContent = randomChallenge();
}


document.getElementById("refresh").addEventListener("click", update);

// --- Sélecteur de langue ---
document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


// --- Ajout du script pour afficher/masquer les références ---
const refToggle = document.getElementById("references-toggle");
const refSection = document.getElementById("references");

if (refToggle && refSection) {
  refToggle.addEventListener("click", () => {
    refSection.style.display =
      refSection.style.display === "block" ? "none" : "block";
  });
}


// --- Ne pas toucher à cette ligne ---
loadChallenges();
