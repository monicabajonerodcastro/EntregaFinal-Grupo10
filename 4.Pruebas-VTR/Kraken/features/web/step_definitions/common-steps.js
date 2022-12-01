const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate page {kraken-string}', async function (url) {
  return await this.driver.url(url);
});

When('I enter email {kraken-string}', async function (email) {
  const element = await this.driver.$('input[name="identification"]');
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  const element = await this.driver.$('input[name="password"]');
  return await element.setValue(password);
});

When('I click the login button', async function () {
  const element = await this.driver.$('button.login.gh-btn');
  return await element.click();
});

When('I click the save button', async function () {
  const element = await this.driver.$('span*=Save');
  const parent = await element.$('..');
  return await parent.click();
});
