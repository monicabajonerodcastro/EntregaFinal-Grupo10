const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I click the page members item', async function () {
  const element = await this.driver.$('a[href="#/members/"]');
  return await element.click();
});

When('I click the new member button', async function () {
  const element = await this.driver.$('a[href="#/members/new/"]');
  return await element.click();
});

When('I enter the member name {kraken-string}', async function (location) {
  const element = await this.driver.$('#member-name');
  return await element.setValue(location);
});

When('I enter the member email {kraken-string}', async function (location) {
  const element = await this.driver.$('#member-email');
  return await element.setValue(location);
});

When('I click the subscribed to newsletter button', async function () {
  const element = await this.driver.$('.switch');
  return await element.click();
});

Then('I see the success member creation', async function () {
  const element = await this.driver.$$('span*=Saved');
  expect(element).to.exist;
});

Then('I see a error message', async function () {
  const element = await this.driver.$$('span*=Retry');
  expect(element).to.exist;
});
