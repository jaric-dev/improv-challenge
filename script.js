let currentLang = "fr";
let challenges = [];
let lastChallenge = null; // Empêche d'afficher deux fois le même défi

// Charger depuis Google Sheets via opensheet
async function loadChallenges() {
  const response = await fetch("https://opensheet.elk.sh/1O5s4jXXwkGsxuRX8Tq1D1t3Iu6_wH9R208M6P02UBCk/banque_defis");
  challenges = await response.json();
  update();
}

// Retourne un défi aléatoire selon la langue, sans répétition immédiate
function randomChallenge() {
  const filtered = challenges.filter(c => c.lang === currentLang);
  let item;

  // Tire un défi différent du précédent (si possible)
  do {
    item = filtered[Math.floor(Math.random() * filtered.length)];
  } while (filtered.length > 1 && item === lastChallenge);

  lastChallenge = item;

  return `
    <strong>${item.type}</strong><br>
    <p>${item.description}</p>
    <em>${item.trucs}</em>
  `;
}

// Met à jour le texte du défi + animation fade-in
function update() {
  const challengeEl = document.getElementById("challenge");

  challengeEl.innerHTML = randomChallenge();

  challengeEl.classList.remove("fade-in");
  void challengeEl.offsetWidth;
  challengeEl.classList.add("fade-in");
}

// Bouton "Nouveau défi"
document.getElementById("refresh").addEventListener("click", update);

// Sélecteur de langue
document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
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
