const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I click the page menu item', async function () {
  const element = await this.driver.$('*=Pages');
  return await element.click();
});

When('I click the new page button', async function () {
  const element = await this.driver.$('span*=New page');
  const parent = await element.$('..');
  return await parent.click();
});

When('I click the add feature image button from Unsplash', async function () {
  const element = await this.driver.$('.gh-editor-feature-image-unsplash');
  return await element.click();
});

When('I select the first image', async function () {
  const element = await this.driver.$('.gh-unsplash-button*=Insert image');
  return await element.click();
});

When('I click the page title input', async function () {
  const element = await this.driver.$('textarea.gh-editor-title');
  return await element.click();
});

When('I enter the title {kraken-string}', async function (title) {
  const element = await this.driver.$('textarea.gh-editor-title');
  return await element.setValue(title);
});

When('I click the page body editor', async function () {
  const element = await this.driver.$('.koenig-editor__editor-wrapper');
  return await element.click();
});

When('I enter the body {kraken-string}', async function (body) {
  const element = await this.driver.$('p[data-koenig-dnd-droppable=true]');
  return await element.setValue(body);
});

When('I click the publish button', async function () {
  const element = await this.driver.$('span*=Publish');
  const parent = await element.$('..');
  return await parent.click();
});

When('I click the continue button', async function () {
  const element = await this.driver.$('span*=Continue');
  const parent = await element.$('..');
  return await parent.click();
});

When('I click the confirm button', async function () {
  const element = await this.driver.$('span*=Publish page');
  const parent = await element.$('..');
  return await parent.click();
});

Then('I see the success page creation message', async function () {
  const element = await this.driver.$$('.gh-publish-title');
  expect(element).to.exist;
});
