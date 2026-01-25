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

// --- Sélecteur de langue sans changement de défi ---
document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    // Mise à jour visuelle du bouton actif
    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // On ne change PAS le défi ici
  });
});

loadChallenges();
