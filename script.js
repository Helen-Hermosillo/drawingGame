const templates = [
    "Draw a {adjective} {animal} riding a {object}.",
    "Sketch a {adjective} {object} that looks like it's {verb}",
    "Draw a {animal} on a {object} eating a {food} while {verb}."
  ];
  const words = {
    adjective: ["funny", "angry", "giant", "tiny"],
    animal: ["cat", "dog", "elephant", "dragon", "bunny", "octopus", "flamingo","sloth"],
    object: ["bicycle", "spaceship", "toaster", "tree"],
    verb: ["dancing", "flying", "singing", "crying"],
    food: ["hamburger", "cheese", "salad", "icecream"]
  };
  
  function generatePrompt() {
    const template = templates[Math.floor(Math.random() * templates.length)];
    return template.replace(/{(.*?)}/g, (_, key) =>
      words[key][Math.floor(Math.random() * words[key].length)]
    );
  }

  // Start button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    let prompt =  generatePrompt();
    alert(prompt);
});
