const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { getDataFromArray, getDataTechnique, getFakerData } = require('./data/converter');

async function getDataByTechnique(field){
    if(this.technique === undefined || this.technique === null)  this.technique = await getDataTechnique()
    if(this.technique === 'PRIORI'){
        return getDataFromArray(field);
    }else{
        return getFakerData(field);
    }
}

Given('I navigate page {kraken-string}', async function (url) {
    return await this.driver.url(url);
  });
  
When('I enter email {kraken-string}', async function (email) {
    const element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    const element = await this.driver.$('#password');
    return await element.setValue(password);
});

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
    return await element.setValue(await getDataByTechnique(title));
});

When('I delete the title text', async function(){
    let element = await this.driver.$('textarea[placeholder="Post title"]');
    return await element.clearValue();
})

When('I click into the post body', async function(){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.click();
})

When('I set the {string} body', async function(body){
    let element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
    return await element.setValue(await getDataByTechnique(body));
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

When ('I click the settings button', async function (){
    let element = await this.driver.$('.settings-menu-toggle');
    return await element.click()
})

When('I set the url {string}', async function(url){
    let element = await this.driver.$('.post-setting-slug');
    return await element.setValue(await getDataByTechnique(url));
})

When('I set the date {string}', async function(date){
    let element = await this.driver.$('input[placeholder="YYYY-MM-DD"]')
    return await element.setValue(await getDataByTechnique(date))
})

When('I set the tags {string}', async function(tags){
    let element = await this.driver.$$('.ember-power-select-trigger-multiple-input')[0];
    await element.setValue(await getDataByTechnique(tags))
    let dropdown = await this.driver.$('.ember-power-select-option');
    return await dropdown.click()
})


/**
 * "Then" steps
 */

Then('I see the post confirmation', async function(){
    let element = await this.driver.$$('.gh-publish-title');
    expect(element.length > 0).to.equal(true);
})

//todo PUBLICAR ISSUE
Then('I do not expect to see the publish button', async function(){
    let element = await this.driver.$$('.gh-publish-trigger');
    expect(element.length <= 0).to.equal(true);
})

//todo PUBLICAR ISSUE
Then('I see the error with the dates', async function(){
    let element = await this.driver.$$('.gh-alert-content');
    expect(element.length > 0).to.equal(true);
    let alertText = await element[0].getText();
    expect(alertText).to.equal("Validation failed: Must be in the past");
})

Then('I see the post error', async function(){
    let element = await this.driver.$$('.retry_svg__retry-animated');
    expect(element.length > 0).to.equal(true);
    let alertText = await this.driver.$('.gh-box-error').getText();
    expect(alertText).to.equal("Validation error, cannot edit post.");
})
