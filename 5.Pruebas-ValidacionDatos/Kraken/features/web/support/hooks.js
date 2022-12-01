const { After, Before, BeforeStep, BeforeAll } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const { GHOST_VERSION, A_PRIORI_SCENARIOS, RANDOM_SCENARIOS } = require('../../../properties.json');
const fs = require('fs');
const { setDataTechnique, convertPrioriFileToArrayObject } = require('../step_definitions/data/converter');

var stepCounter = 1;

Before(async function(scenario) {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);

  this.scenarioName = scenario.pickle.name.split(":")[0].toLowerCase();
  stepCounter = 1;

  const scenarioNumber = parseInt(this.scenarioName.substr(this.scenarioName.length - 2));
  if(A_PRIORI_SCENARIOS.includes(scenarioNumber)) this.dataGenerationTechnique = "PRIORI";
  else if(RANDOM_SCENARIOS.includes(scenarioNumber)) this.dataGenerationTechnique = "RANDOM";
  setDataTechnique(this.dataGenerationTechnique);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

BeforeStep(async function() {
  this.driver.saveScreenshot(`../../screenshots/ghost-${GHOST_VERSION}/kraken_${this.scenarioName}_step${stepCounter}.png`)
  stepCounter++;
})

BeforeAll(async function(){
  const screenshotsDir = `../../screenshots/ghost-${GHOST_VERSION}`;
  if(!fs.existsSync(screenshotsDir)){
    fs.mkdirSync(screenshotsDir, { recursive: true })
  }
  convertPrioriFileToArrayObject();

})
