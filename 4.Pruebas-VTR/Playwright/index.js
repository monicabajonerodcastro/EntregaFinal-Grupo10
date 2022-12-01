//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:3001/ghost/#/signin';


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
    const adminUser = prompt('Ingrese el correo del usuario administrador: ');
    const password = prompt('Ingrese la contraseña del usuario administrador: ');
    const ghostVersion = '3.42';

    const screenshotPath = `../../screenshots/ghost-${ghostVersion}/playwright_scenario`;
    
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
    console.log('Create Tag - Scenario6: As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}6_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}6_step2.png`})
    await page.type('input[id=tag-name]', 'Nuevo tag2');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('id=tag-slug', '');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('input[id=tag-slug]', 'slugSample');
    await new Promise(r => setTimeout(r, 1000));
    await page.type('textarea[id=tag-description]', 'This is the description');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}6_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}6_step4.png`})
    console.log('Create Tag - Scenario 6 - Completed')   
    
    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario7: As an admin user I want to create a tag with just the name and a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}7_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}7_step2.png`})
    await page.type('input[id=tag-name]', 'Nuevo tag3');
    await new Promise(r => setTimeout(r, 1000));
    await page.locator(':nth-match(:text("Expand"), 3)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}7_step3.png`})
    await page.type('input[id=og-title]', 'Mi titulo de tarjeta');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}7_step4.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}7_step5.png`})
    console.log('Create Tag - Scenario 7 - Completed')    


    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Crear Tag - Scenario8: As an admin user I want to get back to the list of tags without saving the changes of the new tag')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}8_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}8_step2.png`})
    await page.type('input[id=tag-name]', 'Nuevo tag4');
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Tags').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}8_step3.png`})
    await page.locator(':nth-match(:text("Leave"), 2)').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}8_step4.png`})
    console.log('Create Tag - Scenario 8 - Completed')  

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Create Page - Scenario9: As an administrator user, I want to create a page');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}9_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('text=Pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Create a new page').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step2.png`})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'My first page title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'My first page body');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step3.png`})
    await page.locator('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step4.png`})
    await page.click('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step5.png`})
    await new Promise((r) => setTimeout(r, 8000));
    await page.screenshot({path: `${screenshotPath}9_step6.png`})
    console.log('Create page - Scenario 9 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario18: As an administrator user I want to update my profile');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}18_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('div.gh-user-avatar.relative').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}18_step2.png`})
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-location]', 'My updated location');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-website]', 'http://myupdatedwebsite.com');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-facebook]', 'https://www.facebook.com/myusername');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-twitter]', 'https://www.twitter.com/myusername');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('textarea[id=user-bio]', 'My updated bio');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}18_step3.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}18_step4.png`})
    console.log('Update profile - Scenario 18 - Completed');

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
