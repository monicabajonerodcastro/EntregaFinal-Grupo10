const { When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I click next', async function(){
    let element = await this.driver.$('.login');
    return await element.click();
})

When('I click on new post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
})

When('I set the {string} title', async function(title){
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.setValue(title);
});

When('I click into the post body', async function(){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.click();
})

When('I set the {string} body', async function(body){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.setValue(body);
})

When('I publish the post', async function(){
    let element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
})

When ('I confirm the publishing post', async function(){
    let element = await this.driver.$('.gh-publish-cta');
    return await element.click();
})

When ('I double confirm the publishing post', async function(){
    let element = await this.driver.$('.gh-publish-cta > button');
    return await element.click();
})

When('I move to the body field', async function(){
    await this.driver.$('p[data-koenig-dnd-droppable=true]').moveTo();
})

When('I click on the add card button', async function(){
    let element = await this.driver.$('.koenig-plus-menu-button');
    return await element.click();
})

When('I select the bookmark option', async function(){
    let element = await this.driver.$('div[title="Bookmark"]')
    return await element.click();
})

When('I write the url {string}', async function(url){
    let element = await this.driver.$('input[name="url"]');
    return await element.setValue(url);
})

When('I click on the preview button', async function(){
    let element = await this.driver.$('.gh-editor-preview-trigger');
    return await element.click();
})

When('I click on the post settings button', async function(){
    let element = await this.driver.$('button[title="Settings"]')
    return await element.click();
})

When('I click on the facebook card', async function(){
    let element = await this.driver.$$('.nav-list-item')[2];
    return await element.click();
});

When('I fill the title with {string} and the description with {string}', async function(title, description){
    let elementTitle = await this.driver.$('input[name="post-setting-og-title"]');
    await elementTitle.setValue(title);

    let elementDescription = await this.driver.$('textarea[name="post-setting-og-description"]');
    return await elementDescription.setValue(description);
})

When ('I click on Tags section', async function(){
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I click on New Tag button', async function(){
    let element = await this.driver.$('a[href="#/tags/new/"]')
    return await element.click();
})

When ('I set the tag name as {string}', async function(tagName){
    let element = await this.driver.$('input[name="name"]');
    return await element.setValue(tagName);
})

When('I click on the save button', async function(){
    let element = await this.driver.$('.mb15 > .gh-canvas-header > header > section > button');
    return await element.click();
})

When('I set the slug name as {string}', async function(tagSlug){
    let element = await this.driver.$('input[name="slug"]');
    await element.clearValue();
    return await element.setValue(tagSlug);
})

When('I set the description as {string}', async function(tagDescription){
    let element = await this.driver.$('textarea[name="description"]');
    return await element.setValue(tagDescription);
})

When('I select the facebook card section', async function(){
    let element = await this.driver.$$('.gh-btn-expand')[2];
    return await element.click();
});

When('I set the title {string} in the facebook card', async function(title){
    let element = await this.driver.$('input[name="ogTitle"]');
    return await element.setValue(title);
})

When('I click on the leave button', async function(){
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
})

/**
 * "Then" steps
 */

Then('I see the post confirmation', async function(){
    let element = await this.driver.$$('.gh-publish-title');
    expect(element.length > 0).to.equal(true);
})

Then('I see the preview of the bookmark', async function(){
    let element = await this.driver.$$('.koenig-card-click-overlay');
    let elementWaiting = await this.driver.$$('.__mobiledoc-card');
    expect(element.length > 0 || elementWaiting.length > 0).to.equal(true);
})

Then('I see the preview of the post', async function(){
    let element = await this.driver.$$('.gh-post-preview-container');
    expect(element.length > 0).to.equal(true);
})

Then('I see the preview of the facebook card with the title {string} and the description {string}', async function(title, description){
    let elementTitleList = await this.driver.$$('.gh-social-og-preview-title');
    expect(elementTitleList.length > 0).to.equal(true);
    let elementTitle = await elementTitleList[0].getText();
    expect(elementTitle).to.include(title);

    let elementDescriptionList = await this.driver.$$('.gh-social-og-preview-desc');
    expect(elementDescriptionList.length > 0).to.equal(true);
    let elementDescription = await elementDescriptionList[0].getText();
    expect(elementDescription).to.include(description);
})

Then('I expect to find the saved button', async function(){
    let element = await this.driver.$('.mb15 > .gh-canvas-header > header > section > button');
    expect(await element.getText()).to.include("Saved");
})

Then('I expect to see the facebook card preview with title {string}', async function(title){
    let elements = await this.driver.$$('.gh-og-container');
    expect(elements.length > 0).to.equal(true);

    let elementTitle = await this.driver.$('.gh-social-og-preview-title');
    expect(await elementTitle.getText()).to.contain(title);
})

Then('I expect to find the title Tags of the previous section', async function(){
    let elements = await this.driver.$$('.gh-canvas-title');
    expect(elements.length > 0).to.equal(true);

    let text = await elements[0].getText();
    expect(text).to.include("Tags");
})





