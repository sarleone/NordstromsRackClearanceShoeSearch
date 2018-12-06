var Nightmare = require("nightmare");
// Setting up an overall timeout for loading each page (Set in miliseconds)
var nightmare = Nightmare({
  executionTimeout: 3000,
  show: true
});

nightmare
  // Visit Nordstrom Rack Website
  .goto("https://www.nordstromrack.com/")
  // Adjust view so that you can view shoes selected
  .viewport(1200, 800)
  // Go to clearance page
  .click(".primary-nav__link.primary-nav__link--clearance")
  // Screenshot of Clearance Page
  .screenshot("1clearance.png")
  .wait(50)
  // Select the 'Size' option
  .click(".filter__label:nth-of-type(1)")
  .wait(50)
  // Screenshot of selecting a size shoe
  .screenshot("2selectSize.png")
  // Select a shoe size
  .click(".filter__option:nth-of-type(4)")
  // Make sure the page is loaded before taking the screenshot
  .wait(2000)
  // Take a screenshot of the results page
  .screenshot("3viewSelectedShoes.png")
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
  // Take a screenshot of more results.
  .screenshot("4viewMoreSelectedShoes.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
