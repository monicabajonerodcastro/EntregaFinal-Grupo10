const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

When('I click the user dropdown trigger', async function () {
  const element = await this.driver.$('.ember-view.ember-basic-dropdown-trigger');
  return await element.click();
});

When('I click the profile menu item', async function () {
  const element = await this.driver.$('*=Your profile');
  return await element.click();
});

When('I click the location input', async function () {
  const element = await this.driver.$('#user-location');
  return await element.click();
});

When('I enter location {kraken-string}', async function (location) {
  const element = await this.driver.$('#user-location');
  return await element.setValue(location);
});

When('I enter website {kraken-string}', async function (website) {
  const element = await this.driver.$('#user-website');
  return await element.setValue(website);
});

When('I enter facebook profile {kraken-string}', async function (facebook) {
  const element = await this.driver.$('#user-facebook');
  return await element.setValue(facebook);
});

When('I enter twitter profile {kraken-string}', async function (twitter) {
  const element = await this.driver.$('#user-twitter');
  return await element.setValue(twitter);
});

When('I enter bio {kraken-string}', async function (bio) {
  const element = await this.driver.$('#user-bio');
  return await element.setValue(bio);
});

When('I click the old password input', async function () {
  const element = await this.driver.$('#user-password-old');
  return await element.click();
});

When('I enter the old password {kraken-string}', async function (oldPassword) {
  const element = await this.driver.$('#user-password-old');
  return await element.setValue(oldPassword);
});

When('I enter a wrong password {kraken-string}', async function (wrongPassword) {
  const element = await this.driver.$('#user-password-old');
  return await element.setValue(wrongPassword);
});

When('I enter the new password {kraken-string}', async function (newPassword) {
  const element = await this.driver.$('#user-password-new');
  return await element.setValue(newPassword);
});

When('I confirm the new password {kraken-string}', async function (confirmPassword) {
  const element = await this.driver.$('#user-new-password-verification');
  return await element.setValue(confirmPassword);
});

When('I click the change password button', async function () {
  const element = await this.driver.$('span*=Change Password');
  const parent = await element.$('..');
  return await parent.click();
});

Then('I see the success update profile message', async function () {
  const element = await this.driver.$$('span*=Saved');
  expect(element).to.exist;
});

Then('I see the success change password message', async function () {
  const element = await this.driver.$$('.gh-notification');
  expect(element).to.exist;
});

Then('I see the error change password message', async function () {
  const element = await this.driver.$$('.gh-alert.gh-alert-red');
  expect(element).to.exist;
});
