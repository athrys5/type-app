let _words = [];

async function fetchWords() {
  const response = await fetch("./english.json");
  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();

  _words = data.words;
}

function getWords() {
  if (!Array.isArray(_words)) {
    throw new Error("_words is not an array yet!");
  }
  return _words.map((word) => {
    const div = document.createElement("div");
    div.textContent = word.toLowerCase();
    return div;
  });
}

function renderWords() {
  const container = document.getElementById("word-container");
  container.innerHTML = "";

  const elements = getWords();
  elements.forEach((el) => container.appendChild(el));
}

function startButton() {
  set;
}

document.addEventListener("DOMContentLoaded", async () => {
  await fetchWords();
  renderWords();
});
