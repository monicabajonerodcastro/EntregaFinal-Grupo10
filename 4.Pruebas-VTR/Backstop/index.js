const fs = require('fs');

var scenarios = []; 
var referenceGhostVersion = "5.22.11";
var newGhostVersion = "3.42";
var krakenScenariosName = [];
var playwrightScenariosName = [];

const filenames = fs.readdirSync(`../../screenshots/ghost-${newGhostVersion}`);
filenames.forEach(file => {
    const nameSplit = file.split("_");
    const toolName = nameSplit[0];
    const scenarioName = nameSplit[1];
    if(toolName === 'kraken'){
        if(!krakenScenariosName.includes(scenarioName)){
            krakenScenariosName.push(scenarioName);
        }
    }else{
        if(!playwrightScenariosName.includes(scenarioName)){
            playwrightScenariosName.push(scenarioName);
        }
    }
});




//Kraken scenarios
for(var i = 1; i <= krakenScenariosName.length; i++){
    const scenarioName = krakenScenariosName[i-1];
    const steps = filenames.filter(file => {
        const nameSplit = file.split("_");
        const name = nameSplit[1];
        return name === scenarioName;
    });
    for(var j= 1; j <= steps.length; j++){
        scenarios.push({
            "label": `${scenarioName}-Step${j}`,
            "referenceUrl": `../../screenshots/ghost-${referenceGhostVersion}/kraken_${scenarioName}_step${j}.png`,
            "url": `../../screenshots/ghost-${newGhostVersion}/kraken_${scenarioName}_step${j}.png`,
            "misMatchThreshold" : 1.0
        })
    }
}

//Playwright scenarios
for(var i = 1; i <= playwrightScenariosName.length; i++){
    const scenarioName = playwrightScenariosName[i-1];
    const steps = filenames.filter(file => {
        const nameSplit = file.split("_");
        const name = nameSplit[1];
        return name === scenarioName;
    });
    for(var j= 1; j <= steps.length; j++){
        scenarios.push({
            "label": `${scenarioName}-Step${j}`,
            "referenceUrl": `../../screenshots/ghost-${referenceGhostVersion}/playwright_${scenarioName}_step${j}.png`,
            "url": `../../screenshots/ghost-${newGhostVersion}/playwright_${scenarioName}_step${j}.png`,
            "misMatchThreshold" : 1.0
        })
    }
}
 




// BackstopJS configuration
module.exports =
    {
    "id": "project_config",
    "viewports": [
        {
        "name": "default",
        "width": 800,
        "height": 600
        }
    ],
    "scenarios":
    scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
        },
    "engine": "puppeteer",
    "report": ["browser"],
    "engineOptions": {
        "args": ["--no-sandbox"]
      },
      "asyncCaptureLimit": 5,
      "asyncCompareLimit": 50,
      "debug": false,
      "debugWindow": false
    };