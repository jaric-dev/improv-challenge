let currentLang = "fr";
let challenges = [];
let lastDescription = null; // Empêche d'afficher deux fois le même défi

// Charger depuis Google Sheets via opensheet
async function loadChallenges() {
  const response = await fetch("https://opensheet.elk.sh/1O5s4jXXwkGsxuRX8Tq1D1t3Iu6_wH9R208M6P02UBCk/banque_defis");
  challenges = await response.json();
  update();
}

// Charger les références depuis Google Sheets via opensheet
async function loadReferences() {
  const response = await fetch("https://opensheet.elk.sh/1O5s4jXXwkGsxuRX8Tq1D1t3Iu6_wH9R208M6P02UBCk/banque_references");
  const references = await response.json();
  renderReferences(references);
}

// Retourne un défi aléatoire selon la langue, sans répétition immédiate
function randomChallenge() {
  const filtered = challenges.filter(c => c.lang === currentLang);
  if (filtered.length === 0) {
    return "<em>Aucun défi pour cette langue.</em>";
  }

  let item;
  let safety = 0;

  // Tire un défi différent du précédent (si possible)
  do {
    item = filtered[Math.floor(Math.random() * filtered.length)];
    safety++;
  } while (filtered.length > 1 &&
           item.description === lastDescription &&
           safety < 10);

 lastDescription = item.description;

const tipsLabel = currentLang === "fr" ? "Trucs:" : "Tips:";

const trucsFormatted = (() => {
  if (!item.trucs) return "";

  // Découper selon les retours à la ligne
  const lines = item.trucs.split(/\n/).map(l => l.trim()).filter(l => l !== "");

  // S'il n'y a qu'une seule ligne → pas de puce
  if (lines.length <= 1) {
    return lines[0] || "";
  }

  // Sinon → liste avec puces
  return lines.map(line => `• ${line}`).join("<br>");
})();

return `
  <div class="challenge-type">
    <span class="label">Type:</span> ${item.type}
  </div>

  <div class="challenge-description">
    ${item.description}
  </div>

  <div class="challenge-tips">
    <span class="label">${tipsLabel}</span> ${trucsFormatted}
  </div>
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

// Affiche la liste des références dans la section dédiée
function renderReferences(references) {
  const container = document.getElementById("references-list");
  if (!container) return;

  container.innerHTML = "";

  if (!Array.isArray(references) || references.length === 0) {
    container.innerHTML = "<p>Aucune référence disponible.</p>";
    return;
  }

  references.forEach(ref => {
    const item = document.createElement("div");
    item.className = "reference-item";

    // Découper les sites web (séparés par virgules)
    const websites = ref.Website
      ? ref.Website.split(",").map(w => w.trim()).filter(w => w.startsWith("http"))
      : [];

    // Découper les livres (séparés par virgules)
    const books = ref.Book
      ? ref.Book.split(",").map(b => b.trim()).filter(b => b.length > 0)
      : [];

  item.innerHTML = `
  <h3><strong>${ref.Name || "Sans nom"}</strong></h3>

  ${websites.length > 0 ? `
    <p>Site${websites.length > 1 ? "s" : ""} :</p>
    <ul>
      ${websites.map(w => `<li><a href="${w}" target="_blank">${w}</a></li>`).join("")}
    </ul>
  ` : ""}

  ${books.length > 0 ? `
    <p>Book${books.length > 1 ? "s" : ""} :</p>
    <ul>
      ${books.map(b => `<li>${b}</li>`).join("")}
    </ul>
  ` : ""}

  ${ref.Quote ? `<p><em>"${ref.Quote}"</em></p>` : ""}
`;

    container.appendChild(item);
  });
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
    const isOpen = refSection.style.display === "block";

    // Ouvre ou ferme la section
    refSection.style.display = isOpen ? "none" : "block";

    // Ajoute/enlève la classe pour faire pivoter la flèche
    refToggle.classList.toggle("open", !isOpen);
  });
}
// Contact : afficher / masquer avec flèche pivotante
const contactToggle = document.getElementById("contact-toggle");
const contactSection = document.getElementById("contact-section");

if (contactToggle && contactSection) {
  contactToggle.addEventListener("click", () => {
    const isOpen = contactSection.style.display === "block";

    contactSection.style.display = isOpen ? "none" : "block";

    contactToggle.classList.toggle("open", !isOpen);
  });
}


// Lancer l’application
loadChallenges();
loadReferences();

