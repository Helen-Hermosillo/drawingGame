const templates = [
    "Draw a {adjective} {animal} riding a {object} in front of the {location}.",
    "Sketch a {adjective} {object} that looks like it's {verb} at the {location}",
    "Draw a {animal} on a {object} eating a {food} while {verb}.",
    "Sketch a {adjective} {food} that is {verb}.",
    "Draw a {adjective} {animal} with their friend a {adjective} {animal}, {verb} at the {location}. "
  ];
  const words = {
    adjective: ["funny", "angry", "giant", "tiny"],
    animal: ["cat", "dog", "elephant", "dragon", "bunny", "octopus", "flamingo","sloth"],
    object: ["bicycle", "spaceship", "toaster", "tree", "cloud", "camera", "paintbrush","teddy bear"],
    verb: ["dancing", "flying", "singing", "crying", "painting", "running","swimming", "dancing"],
    food: ["hamburger", "cheese", "salad", "icecream"],
    location: ["park", "castle", "office", "coffee shop", "mall", "city"]
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
