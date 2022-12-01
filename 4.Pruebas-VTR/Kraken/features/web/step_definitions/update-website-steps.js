const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I click the settings button', async function () {
  const element = await this.driver.$('a[href="#/settings/general/"]');
  return await element.click();
});

When('I click the general button', async function () {
  const element = await this.driver.$('a[href="#/settings/general/"]');
  return await element.click();
});

When('I click the title and description expand button', async function () {
  const element = await this.driver.$('span*=Expand');
  const parent = await element.$('..');
  return await parent.click();
});

When('I click the publication language expand button', async function () {
  const elements = await this.driver.$$('span*=Expand');
  const parent = await elements[2].$('..');
  return await parent.click();
});

When('I click the meta data expand button', async function () {
  const elements = await this.driver.$$('span*=Expand');
  const parent = await elements[3].$('..');
  return await parent.click();
});

When('I click the twitter data expand button', async function () {
  const elements = await this.driver.$$('span*=Expand');
  const parent = await elements[4].$('..');
  return await parent.click();
});

When('I click the social accounts expand button', async function () {
  const elements = await this.driver.$$('span*=Expand');
  const parent = await elements[6].$('..');
  return await parent.click();
});

When('I enter the new website title {kraken-string}', async function (location) {
  const element = await this.driver.$('.ember-text-field.gh-input.ember-view');
  return await element.setValue(location);
});

When('I enter the new language {kraken-string}', async function (location) {
  const element = await this.driver.$('.ember-text-field.gh-input.ember-view');
  return await element.setValue(location);
});

When('I enter the meta title {kraken-string}', async function (location) {
  const element = await this.driver.$('.ember-text-field.gh-input.ember-view');
  return await element.setValue(location);
});

When('I enter the twitter title {kraken-string}', async function (location) {
  const element = await this.driver.$('.ember-text-field.gh-input.ember-view');
  return await element.setValue(location);
});

When('I enter a facebook website {kraken-string}', async function (location) {
  const element = await this.driver.$('input[placeholder="https://www.facebook.com/ghost"]');
  return await element.setValue(location);
});

When('I enter a twitter website {kraken-string}', async function (location) {
  const element = await this.driver.$('input[placeholder="https://twitter.com/ghost"]');
  return await element.setValue(location);
});

Then('I see the success update title message', async function () {
  const element = await this.driver.$$('span*=Saved');
  expect(element).to.exist;
});
