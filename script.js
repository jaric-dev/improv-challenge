const challenges = [
  "Créer un personnage à partir d'une posture.",
  "Énoncer une théorie farfelue. L'argumenter de façon rationnelle.",
  "Dire une répliquer. La jouer dans 5 contexte différent.",
  "Étirement. Laisser le mouvement se transformer en dance. Puis en démarche. Trouver la voix qui corresponds à cette démarche."
];

function randomChallenge() {
  return challenges[Math.floor(Math.random() * challenges.length)];
}

const output = document.getElementById("challenge");
const button = document.getElementById("refresh");

function update() {
  output.textContent = randomChallenge();
}

button.addEventListener("click", update);
update();
