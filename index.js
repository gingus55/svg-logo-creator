const inquirer = require("inquirer");
const fs = require("fs");
const { createSVG } = require("./assets/createSVG");
const { questions } = require("./assets/questions");

const start = async () => {
  const data = await inquirer.prompt(questions);
  console.log(data);
  const logo = createSVG(
    data.text,
    data.textColour,
    data.shape,
    data.shapeColour
  );
  fs.writeFileSync("logo.svg", logo);
};

start();
