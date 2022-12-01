const playwright = require('playwright');
const { faker } = require('@faker-js/faker');
const url = 'http://localhost:2368/ghost/#/signin';
const dataPoolSizeMocka = 9;
var newTag;
var textContentAux;
const url_tag_normal='https://my.api.mockaroo.com/tag_normal.json?key=473bb5a0'
const url_tag_long_wrong='https://my.api.mockaroo.com/tag_long_wrong.json?key=473bb5a0'
const_tag_normal_tag='./Tag_normal.csv';
const_tag_wrong_tag='./Tag_long_wrong.csv';
const fetch = require("node-fetch");

class Tag {
  constructor(name, slug, description, facebook_title, facebook_description, color) {
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.facebook_title = facebook_title;
    this.facebook_description = facebook_description;
    this.color = color;
  }
}

async function fetchTest(url) {
    let response = await fetch(url);
    let responseText = await response.text();
    textContentAux=responseText
}

function leerCsv(texto) {
  if (typeof texto !== 'string') {
      throw TypeError('El argumento debe ser una cadena de caracteres.');
  }

  return texto.slice(0)
  .split('\n')
  .map(l => l.split(','));
}

function actualizarTag(pathFile) {

  fs = require("fs"),
    NOMBRE_ARCHIVO = pathFile
    
  fileData = fs.readFileSync(NOMBRE_ARCHIVO, "utf8");

  tagMat=leerCsv(fileData)[Math.floor(Math.random() * dataPoolSizeMocka)];
  newTag = new Tag(tagMat[0],tagMat[1],tagMat[2],tagMat[3],tagMat[4],tagMat[5]);
}

function actualizarTagAPI(textcontent) {
  tagMat=leerCsv(textcontent)[0];
  newTag = new Tag(tagMat[0],tagMat[1],tagMat[2],tagMat[3],tagMat[4],tagMat[5]);
}



const fillLogin = async (page, adminUser, password) => {
  await page.fill('input.email.gh-input', adminUser);
  await new Promise(r => setTimeout(r, 1000));
  await page.fill('input.password.gh-input', password);
  await new Promise(r => setTimeout(r, 1000));
};

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['firefox']) {

    const prompt = require('prompt-sync')();
    //const adminUser = prompt('Ingrese el correo del usuario administrador: ');
    //const password = prompt('Ingrese la contraseña del usuario administrador: ');

    const adminUser = 'n.gomezb2@uniandes.edu.co';
    const password = 'Pass123456';

    const ghostVersion = '5.22.11';

    const screenshotPath = `../../screenshots/ghost-${ghostVersion}/playwright_scenario_random`;
    
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    //Interactuar con la aplicación web

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario31: As an admin user, I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_normal_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}31_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}31_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}31_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}31_step4.png`})
    console.log('Create Tag - Scenario 31 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario32: As an admin user, I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_normal);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}32_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}32_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}32_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}32_step4.png`})
    console.log('Create Tag - Scenario 32 - Completed') 

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario33: As an admin user, I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}33_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}33_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}33_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}33_step4.png`})
    console.log('Create Tag - Scenario 33 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario34: As an admin user, I want to create a tag with just the name and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_normal_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}34_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}34_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}34_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}34_step4.png`})
    console.log('Create Tag - Scenario 34 - Completed')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario35: As an admin user, I want to create a tag with just the name and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_normal);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}35_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}35_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}35_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}35_step4.png`})
    console.log('Create Tag - Scenario 35 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario36: As an admin user, I want to create a tag with just the name and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}36_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}36_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', faker.lorem.sentence());
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}36_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}36_step4.png`})
    console.log('Create Tag - Scenario 36 - Completed')



    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario37: As an admin user, I want to create a tag with just the name and a long description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_wrong_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}37_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}37_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}37_step3.png`})
    console.log('Create Tag - Scenario 37 - Completed')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario38: As an admin user, I want to create a tag with just the name and a long description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_long_wrong);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}38_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}38_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}38_step3.png`})
    console.log('Create Tag - Scenario 38 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario39: As an admin user, I want to create a tag with just the name and a long description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}39_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}39_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', faker.lorem.sentence(250));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}39_step3.png`})
    console.log('Create Tag - Scenario 39 - Completed')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario40: As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_normal_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}40_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}40_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', newTag.slug);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}40_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}40_step4.png`})
    console.log('Create Tag - Scenario 40 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    
    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario41: As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_normal);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}41_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}41_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', newTag.slug);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', newTag.description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}41_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}41_step4.png`})
    console.log('Create Tag - Scenario 41 - Completed') 

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario42: As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}42_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}42_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', faker.lorem.sentence());
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}42_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}42_step4.png`})
    console.log('Create Tag - Scenario 42 - Completed')

  
    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario43: As an admin user, I want to create a tag with just the name and a specific long slug')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_wrong_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}43_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}43_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', newTag.slug);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}43_step3.png`})
    console.log('Create Tag - Scenario 43 - Completed')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario44: As an admin user, I want to create a tag with just the name and a specific long slug')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_long_wrong);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}44_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}44_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', newTag.slug);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}44_step3.png`})
    console.log('Create Tag - Scenario 44 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario45: As an admin user, I want to create a tag with just the name and a specific long slug')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}45_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}45_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', faker.lorem.sentence(100));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}45_step3.png`})
    console.log('Create Tag - Scenario 45 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')   
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario46: As an admin user, I want to create a tag with just the name and a specific color (HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_normal_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}46_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}46_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(newTag.color.slice(1));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}46_step3.png`})
    console.log('Create Tag - Scenario 46 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario47: As an admin user, I want to create a tag with just the name and a specific color (HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_normal);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}47_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}47_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(newTag.color.slice(1));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}47_step3.png`})
    console.log('Create Tag - Scenario 47 - Completed')  

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario48: As an admin user, I want to create a tag with just the name and a specific color (HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}48_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}48_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(faker.color.rgb({ format: 'hex', casing: 'lower' }).slice(1));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}48_step3.png`})
    console.log('Create Tag - Scenario 48 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')   
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario49: As an admin user, I want to create a tag with just the name and a specific color (Non HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_wrong_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}49_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}49_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(newTag.color.slice(1));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}49_step3.png`})
    console.log('Create Tag - Scenario 49 - Completed')


    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario50: As an admin user, I want to create a tag with just the name and a specific color (Non HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_long_wrong);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}50_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}50_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(newTag.color.slice(1));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}50_step3.png`})
    console.log('Create Tag - Scenario 50 - Completed')  

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
   
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')    
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario51: As an admin user, I want to create a tag with just the name and a specific color (Non HEX value)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}51_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}51_step2.png`})
    await page.type('input[id=tag-name]', faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('[placeholder="15171A"]').fill(faker.lorem.word({length: {min: 1, max: 5}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}51_step3.png`})
    console.log('Create Tag - Scenario 51 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario52: As an admin user, I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_normal_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}52_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}52_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}52_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', newTag.facebook_description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}52_step4.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}52_step5.png`})
    console.log('Create Tag - Scenario 52 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario53: As an admin user, I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_normal);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}53_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}53_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}53_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', newTag.facebook_description);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}53_step4.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}53_step5.png`})
    console.log('Create Tag - Scenario 53 - Completed')



    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario54: As an admin user, I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}54_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}54_step2.png`})
    await page.type('input[id=tag-name]',  faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}54_step3.png`})
    await page.type('input[id=og-title]',  faker.lorem.word({length: {min: 1, max: 100}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', faker.lorem.word({length: {min: 1, max: 65}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}54_step4.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}54_step5.png`})
    console.log('Create Tag - Scenario 54 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario55: As an admin user, I want to create a tag with just the name and a facebook card (facebook name long)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_wrong_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}55_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}55_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}55_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}55_step4.png`})
    console.log('Create Tag - Scenario 55 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario56: As an admin user, I want to create a tag with just the name and a facebook card (facebook name long)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_long_wrong);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}56_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}56_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}56_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}56_step4.png`})
    console.log('Create Tag - Scenario 56 - Completed')



    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario57: As an admin user, I want to create a tag with just the name and a facebook card (facebook name long)')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}57_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}57_step2.png`})
    await page.type('input[id=tag-name]',  faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}57_step3.png`})
    await page.type('input[id=og-title]',  faker.lorem.sentence(50));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}57_step4.png`})
    console.log('Create Tag - Scenario 57 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')      
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario58: As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc')
    console.log('--------------------------------------------------------------------------------------------------------------')
    actualizarTag(const_tag_wrong_tag);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}58_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}58_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}58_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', newTag.facebook_description);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}58_step4.png`})
    console.log('Create Tag - Scenario 58 - Completed')


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario59: As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fetchTest(url_tag_long_wrong);
    actualizarTagAPI(textContentAux);
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}59_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}59_step2.png`})
    await page.type('input[id=tag-name]', newTag.name);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}59_step3.png`})
    await page.type('input[id=og-title]', newTag.facebook_title);
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', newTag.facebook_description);
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}59_step4.png`})
    console.log('Create Tag - Scenario 59 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario60: As an admin user, I want to create a tag with just the name and a facebook card with very long facebok desc')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}60_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}60_step2.png`})
    await page.type('input[id=tag-name]',  faker.lorem.word({length: {min: 1, max: 190}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}60_step3.png`})
    await page.type('input[id=og-title]',  faker.lorem.word({length: {min: 102, max: 200}}));
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=og-description]', faker.lorem.sentence(300));
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}60_step4.png`})
    console.log('Create Tag - Scenario 60 - Completed')

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función


