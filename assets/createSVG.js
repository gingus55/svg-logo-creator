const createSVG = (text, textColor, shape, shapeColor) => {
  if (shape === "Circle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`;
  } else if (shape === "Square") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect width='150' height='150'  fill="${shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          
          </svg>`;
  } else if (shape === "Triangle") {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points ='150,5 280,190 20,190' fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`;
  }
};

module.exports = { createSVG };
