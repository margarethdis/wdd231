document.addEventListener("DOMContentLoaded", () => {
  // --- INFO PARA LAS ETAPAS DEL GATO ---
  const stageData = {
    kitten: "Kittens need warmth, small frequent meals, and safe spaces to explore. Socializing is key during this stage!",
    junior: "Juniors are active and curious. They need playtime, training, and a consistent routine.",
    adult: "Adults enjoy stability. Regular vet checkups, balanced diet, and mental stimulation are important.",
    mature: "Mature cats may slow down. Watch for changes in behavior and continue gentle play and comfort.",
    senior: "Senior cats need extra love, comfy bedding, and regular health monitoring."
  };

  const stageCards = document.querySelectorAll(".stage-card");
  const stageInfo = document.getElementById("stage-info");

  stageCards.forEach(card => {
    card.addEventListener("click", () => {
      const stage = card.dataset.stage;
      stageInfo.textContent = stageData[stage];
      stageInfo.classList.remove("hidden");
    });
  });

  // --- INFO PARA COLORES DE GATOS ---
  const colorData = {
    black: "Black cats are often playful, independent, and mysterious. Many bring good luck!",
    white: "White cats are known for being calm, gentle, and observant.",
    ginger: "Ginger cats are friendly, bold, and love affection. They are often very vocal.",
    gray: "Gray cats tend to be balanced, quiet, and intelligent.",
    tabby: "Tabby cats are energetic, sociable, and curious explorers.",
    calico: "Calico cats are spirited, unique, and full of personality. Many are female!"
  };

  const colorCards = document.querySelectorAll(".color-card");
  const colorInfo = document.getElementById("color-info");

  colorCards.forEach(card => {
    card.addEventListener("click", () => {
      const color = card.dataset.color;
      colorInfo.textContent = colorData[color];
      colorInfo.classList.remove("hidden");
    });
  });

  // --- INFO PARA EMOCIONES DEL GATO ---
  const emotionData = {
    interested: "Your cat is focused! It may be curious about a new sound, object, or creature.",
    friendly: "Your cat wants your attention in a gentle way—try petting or talking to it!",
    relaxed: "A relaxed cat feels safe and comfortable in its environment.",
    trusting: "When a cat exposes its belly, it shows deep trust (but not always an invitation to touch).",
    conflicted: "Your cat is unsure. Give it space and observe its body language.",
    playful: "Time to play! Toys, strings, and chase games are welcome.",
    excited: "Your cat is highly stimulated—this could mean play or even hunting mode!",
    marking: "Cats mark territory by rubbing or scratching. It’s their way of claiming space.",
    anxious: "Look for twitching tails or hiding. Reduce stress with calm routines and hiding spots."
  };

  const emotionCards = document.querySelectorAll(".emotion-card");
  const emotionInfo = document.getElementById("emotion-info");

  emotionCards.forEach(card => {
    card.addEventListener("click", () => {
      const emotion = card.dataset.emotion;
      emotionInfo.textContent = emotionData[emotion];
      emotionInfo.classList.remove("hidden");
    });
  });
});
