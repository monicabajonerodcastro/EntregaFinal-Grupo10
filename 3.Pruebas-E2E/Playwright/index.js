//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2371/ghost/';


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
    const ghostVersion = '5.22.11';

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
    console.log('Create Post - Scenario1: As an admin user, I want to create a post')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}1_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step2.png`})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step3.png`})
    await page.locator('button', { hasText: 'Publish' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step4.png`})
    await page.locator('text=Continue, final review →').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}1_step5.png`})
    await page.locator('text=Publish post, right now').click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: `${screenshotPath}1_step6.png`})
    console.log('Create Post - Scenario 1 - Completed')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Post - Scenario2: As an admin user, I want to create a post with a bookmark')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}2_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step2.png`})
    await page.locator('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w7.h7.w9-ns.h9-ns.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step3.png`})
    await page.locator('div.f8.lh-heading.darkgrey.tracked-1.fw4.ma0.ml4.flex-grow-1.truncate', { hasText: 'Bookmark' }).click();  
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step4.png`})
    await page.fill('input.miw-100.pa2.ba.br2.b--lightgrey-d2.f7.form-text.lh-title.tracked-2.h10.nl2.nr2','https://www.uniandes.edu.co');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post con bookmark');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step5.png`})
    await page.locator('span', { hasText: 'Publish' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step6.png`})
    await page.locator('text=Continue, final review →').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}2_step7.png`})
    await page.locator('text=Publish post, right now').click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: `${screenshotPath}2_step8.png`})
    console.log('Create Post - Scenario 2 - Completed')  

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Post - Scenario3: As an admin user, I want to preview my post')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}3_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}3_step2.png`})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'Titulo post preview');
    await new Promise(r => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'Cuerpo post preview"');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}3_step3.png`})
    await page.locator('button', { hasText: 'Preview' }).click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}3_step4.png`})
    console.log('Create Post - Scenario 3 - Completed')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Post - Scenario4: As an admin user, I want to create a post with a facebook card')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}4_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    console.log('Create Post - Scenario 4 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');
    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario5: As an admin user I want to create a tag with just the name')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}5_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}5_step2.png`})
    await page.type('input[id=tag-name]', 'Nuevo tag1');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}5_step3.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}5_step4.png`})
    console.log('Create Tag - Scenario 5 - Completed')    

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();
    
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded')

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create Tag - Scenario6: As an admin user I want to create a tag with the name, a specific slug and a description')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}6_step1.png`})
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
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
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
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
    await page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise(r => setTimeout(r, 3000));
    await page.locator('text=Tags').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=New tag').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}8_step2.png`})
    await page.type('input[id=tag-name]', 'Nuevo tag4');
    await new Promise(r => setTimeout(r, 1000));
    await page.goBack();
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
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('text=Pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=New page').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step2.png`})
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'My first page title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'My first page body');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step3.png`})
    await page.locator('text=Publish').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step4.png`})
    await page.locator('text=Continue, final review →').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}9_step5.png`})
    await page.locator('text=Publish page, right now').click();
    await new Promise((r) => setTimeout(r, 1000));
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
    console.log('Create Page - Scenario10: As an administrator user I want to create a page with a feature image');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}10_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('text=Pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=New page').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}10_step2.png`})
    await page.locator('.gh-editor-feature-image-unsplash').click();
    await new Promise((r) => setTimeout(r, 5000));
    await page.screenshot({path: `${screenshotPath}10_step3.png`})
    await page.locator('text=Insert image').first().click();
    await new Promise((r) => setTimeout(r, 5000));
    await page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', 'My first page title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', 'My first page body');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}10_step4.png`})
    await page.locator('text=Publish').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}10_step5.png`})
    await page.locator('text=Continue, final review →').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}10_step6.png`})
    await page.locator('text=Publish page, right now').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}10_step7.png`})
    console.log('Create page - Scenario 10 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');
    
    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario11: As an administrator user I want to update my website title');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}11_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}11_step2.png`})
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand').first().click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.ember-text-field.gh-input.ember-view').first().fill('My updated website title');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}11_step3.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}11_step4.png`})
    console.log('Update website - Scenario 11 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario12: As an administrator user I want to update my website publication language');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}12_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}12_step2.png`})
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=2').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.ember-text-field.gh-input.ember-view').first().fill('es');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}12_step3.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}12_step4.png`})
    console.log('Update website - Scenario 12 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario13: As an administrator user I want to update my website meta data');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}13_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}13_step2.png`})
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=3').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('#metaTitle').fill('content management system');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}13_step3.png`})
    await page.locator('#metaDescription').fill('custom pages');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}13_step4.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}13_step5.png`})
    console.log('Update website - Scenario 13 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario14: As an administrator user I want to update my website twitter card');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}14_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}14_step2.png`})
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=4').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('#twitterTitle').fill('My website title updated');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}14_step3.png`})
    await page.locator('#twitterDescription').fill('content');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}14_step4.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}14_step5.png`})
    console.log('Update website - Scenario 14 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update website - Scenario15: As an administrator user I want to update my website social accounts');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}15_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/settings/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}15_step2.png`})
    await page.locator('a[href="#/settings/general/"]').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('text=Expand>>nth=6').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.locator('.gh-input').first().fill('https://www.facebook.com/ghost');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}15_step3.png`})
    await page.locator('.gh-input>>nth=1').fill('https://www.twitter.com/ghost');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}15_step4.png`})
    await page.locator('text=Save').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}15_step5.png`})
    console.log('Update website - Scenario 15 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create member - Scenario16: As an administrator user I want to create a member')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}16_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/members/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}16_step2.png`})
    await page.locator('a[href="#/members/new/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}16_step3.png`})
    await page.type('input[id=member-name]', 'New member');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}16_step4.png`})
    await page.type('input[id=member-email]', adminUser);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}16_step5.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}16_step6.png`})
    console.log('Create member - Scenario 16 - Completed')

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------')
    console.log('Create member - Scenario17: As an administrator user I want to avoid creating a member with an invalid email')
    console.log('--------------------------------------------------------------------------------------------------------------')
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}17_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('a[href="#/members/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}17_step2.png`})
    await page.locator('a[href="#/members/new/"]').first().click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}17_step3.png`})
    await page.type('input[id=member-name]', 'New member');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}17_step4.png`})
    await page.type('input[id=member-email]', 'invalid-email');
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}17_step5.png`})
    await page.locator('text=Save').click();
    await new Promise(r => setTimeout(r, 1000));
    await page.locator('text=Invalid Email.')
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}17_step6.png`})
    console.log('Create member - Scenario 17 - Completed')

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
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.pe-all > .ember-view.ember-basic-dropdown-trigger').click();
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

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario19: As an administrator user I want to ensure my password can not be changed if it is not correct');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}19_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.pe-all > .ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}19_step2.png`})
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-old]', 'FakePassword');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-new]', 'MISW202216');
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-new-password-verification]', 'MISW202216');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}19_step3.png`})
    await page.locator('text=Change Password').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}19_step4.png`})
    console.log('Update profile - Scenario 19 - Completed');

    browser = await playwright[browserType].launch();
    context = await browser.newContext();
    page = await context.newPage();

    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(url);
    await new Promise(r => setTimeout(r, 3000));
    console.log('Project loaded');

    console.log('--------------------------------------------------------------------------------------------------------------');
    console.log('Update profile - Scenario20: As an administrator user I want to change my password');
    console.log('--------------------------------------------------------------------------------------------------------------');
    await fillLogin(page, adminUser, password);
    await page.screenshot({path: `${screenshotPath}20_step1.png`})
    await page.click('.login.gh-btn.gh-btn-login');
    await new Promise((r) => setTimeout(r, 3000));
    await page.locator('.pe-all > .ember-view.ember-basic-dropdown-trigger').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}20_step2.png`})
    await page.locator('text=Your profile').click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-old]', password);
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-password-new]', password);
    await new Promise((r) => setTimeout(r, 1000));
    await page.type('input[id=user-new-password-verification]', password);
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({path: `${screenshotPath}20_step3.png`})
    await page.locator('text=Change Password').click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({path: `${screenshotPath}20_step4.png`})
    console.log('Update profile - Scenario 20 - Completed');

    console.log('Todas las pruebas finalizaron correctamente')   
    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función
