let currentLang = "fr";
let challenges = [];
let lastDescription = null; // On mémorise seulement le texte du défi

async function loadChallenges() {
  const response = await fetch("https://opensheet.elk.sh/1O5s4jXXwkGsxuRX8Tq1D1t3Iu6_wH9R208M6P02UBCk/banque_defis");
  challenges = await response.json();
  update();
}

function randomChallenge() {
  const filtered = challenges.filter(c => c.lang === currentLang);
  if (filtered.length === 0) {
    return "<em>Aucun défi pour cette langue.</em>";
  }

  let item;
  let safety = 0;

  // On évite de reprendre la même description, si possible
  do {
    item = filtered[Math.floor(Math.random() * filtered.length)];
    safety++;
  } while (filtered.length > 1 &&
           item.description === lastDescription &&
           safety < 10);

  lastDescription = item.description;

  return `
    <strong>${item.type}</strong><br>
    <p>${item.description}</p>
    <em>${item.trucs}</em>
  `;
}

function update() {
  const challengeEl = document.getElementById("challenge");
  challengeEl.innerHTML = randomChallenge();
  challengeEl.classList.remove("fade-in");
  void challengeEl.offsetWidth;
  challengeEl.classList.add("fade-in");
}

document.getElementById("refresh").addEventListener("click", update);

document.querySelectorAll("#lang-select button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;

    document.querySelectorAll("#lang-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const refToggle = document.getElementById("references-toggle");
const refSection = document.getElementById("references");

if (refToggle && refSection) {
  refToggle.addEventListener("click", () => {
    refSection.style.display =
      refSection.style.display === "block" ? "none" : "block";
  });
}

loadChallenges();
