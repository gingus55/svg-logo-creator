const validateColor = (input) => {
  // Check if the input is a valid color name or a valid hexadecimal number
  if (/^#[0-9A-F]{6}$/i.test(input) || /^[a-z]+$/i.test(input)) {
    return true;
  } else {
    return "Please enter a valid color name or a hexadecimal number (e.g., #FF0000 or red).";
  }
};

const questions = [
  {
    type: "input",
    name: "text",
    message: "What would you call your title? (only 3 letters MAX)",
    validate: function (input) {
      const done = this.async();

      setTimeout(function () {
        if (input.length > 3) {
          done("3 characters max, you muppet");
          return;
        }

        done(null, true);
      }, 1500);
    },
  },
  {
    type: "input",
    name: "textColour",
    message: "What colour would you like your text?",
    validate: validateColor,
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColour",
    message: "What colour would you like your shape?",
    validate: validateColor,
  },
];

module.exports = { questions };
