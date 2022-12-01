const playwright = require('playwright');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const config = require('./config.json');
const Login = require('./page-objects/login');
const Home = require('./page-objects/home');
const Profile = require('./page-objects/profile');
const Member = require('./page-objects/member');
const Setting = require('./page-objects/setting');
const Page = require('./page-objects/page');
const {
  createProfileDataPool, createPageDataPool,
  createMemberDataPool, createSettingDataPool,
} = require('./data-pool');

const { headless, url, username, password, screenshotPath } = config;

let name;
let page;
let browser;
let context;

let pageDataPool;
let profileDataPool;
let memberDataPool;
let settingDataPool;
const dataPoolSize = 1000;

before(async () => {
  pageDataPool = createPageDataPool(dataPoolSize);
  profileDataPool = createProfileDataPool(dataPoolSize);
  memberDataPool = createMemberDataPool(dataPoolSize);
  settingDataPool = createSettingDataPool(dataPoolSize);
});

beforeEach(async () => {
  browser = await playwright['firefox'].launch({ headless });
  context = await browser.newContext();
  page = await context.newPage();
});

afterEach(async () => {
  browser.close();
});

it('Scenario 61: Create a new member with name and email', async () => {
  name = 'scenario-61';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const userName = memberDataPool[randomIndex(dataPoolSize)].name;
  const email = memberDataPool[randomIndex(dataPoolSize)].email;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(userName);
  await saveScreenshot(4);
  await member.fillEmail(email);
  await saveScreenshot(4);
  await member.save();
  await saveScreenshot(5);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 62: Create a new member with name, email and note', async () => {
  name = 'scenario-62';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const userName = memberDataPool[randomIndex(dataPoolSize)].name;
  const email = memberDataPool[randomIndex(dataPoolSize)].email;
  const note = memberDataPool[randomIndex(dataPoolSize)].note;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(userName);
  await saveScreenshot(4);
  await member.fillEmail(email);
  await saveScreenshot(5);
  await member.fillNote(note);
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 63: Create a new member with email, note and label', async () => {
  name = 'scenario-63';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const email = memberDataPool[randomIndex(dataPoolSize)].email;
  const note = memberDataPool[randomIndex(dataPoolSize)].note;
  const label = memberDataPool[randomIndex(dataPoolSize)].label;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillEmail(email);
  await saveScreenshot(4);
  await member.fillLabel(label);
  await saveScreenshot(5);
  await member.fillNote(note);
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 64: Update website title and description', async () => {
  name = 'scenario-64';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const title = settingDataPool[randomIndex(dataPoolSize)].title;
  const description = settingDataPool[randomIndex(dataPoolSize)].description;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTitleAndDescription();
  await saveScreenshot(4);
  await setting.fillTitle(title);
  await saveScreenshot(5);
  await setting.fillDescription(description);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 65: Update website metadata', async () => {
  name = 'scenario-65';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const title = settingDataPool[randomIndex(dataPoolSize)].metadataTitle;
  const description = settingDataPool[randomIndex(dataPoolSize)].metadataDescription;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandMetadata();
  await saveScreenshot(4);
  await setting.fillMetadataTitle(title);
  await saveScreenshot(5);
  await setting.fillMetadataDescription(description);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 66: Update website twitter card', async () => {
  name = 'scenario-66';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const title = settingDataPool[randomIndex(dataPoolSize)].twitterTitle;
  const description = settingDataPool[randomIndex(dataPoolSize)].twitterDescription;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTwitterCard();
  await saveScreenshot(4);
  await setting.fillTwitterTitle(title);
  await saveScreenshot(5);
  await setting.fillTwitterDescription(description);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 67: Update website facebook card', async () => {
  name = 'scenario-67';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const title = settingDataPool[randomIndex(dataPoolSize)].facebookTitle;
  const description = settingDataPool[randomIndex(dataPoolSize)].facebookDescription;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandFacebookCard();
  await saveScreenshot(4);
  await setting.fillFacebookTitle(title);
  await saveScreenshot(5);
  await setting.fillFacebookDescription(description);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 68: Update website social networks urls', async () => {
  name = 'scenario-68';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const facebookUrl = settingDataPool[randomIndex(dataPoolSize)].facebookUrl;
  const twitterUrl = settingDataPool[randomIndex(dataPoolSize)].twitterUrl;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandSocialAccounts();
  await saveScreenshot(4);
  await setting.fillFacebookUrl(facebookUrl);
  await saveScreenshot(5);
  await setting.fillTwitterUrl(twitterUrl);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 69: Update the owner full name, slug and location', async () => {
  name = 'scenario-69';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fullName = profileDataPool[randomIndex(dataPoolSize)].name;
  const slug = profileDataPool[randomIndex(dataPoolSize)].slug;
  const location = profileDataPool[randomIndex(dataPoolSize)].location;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(fullName);
  await saveScreenshot(3);
  await profile.fillSlug(slug);
  await saveScreenshot(4);
  await profile.fillLocation(location);
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 70: Update the owner website, Facebook Profile, Twitter profile and Bio', async () => {
  name = 'scenario-90';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const website = profileDataPool[randomIndex(dataPoolSize)].website;
  const facebookUrl = profileDataPool[randomIndex(dataPoolSize)].facebookUrl;
  const twitterUrl = profileDataPool[randomIndex(dataPoolSize)].twitterUrl;
  const bio = profileDataPool[randomIndex(dataPoolSize)].bio;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(website);
  await saveScreenshot(3);
  await profile.fillFacebookUrl(facebookUrl);
  await saveScreenshot(4);
  await profile.fillTwitterUrl(twitterUrl);
  await saveScreenshot(4);
  await profile.fillBio(bio);
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});


it('Scenario 71: Create a new member with name and email', async () => {
  name = 'scenario-71';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const data = memberDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(data.name);
  await saveScreenshot(4);
  await member.fillEmail(data.email);
  await saveScreenshot(4);
  await member.save();
  await saveScreenshot(5);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 72: Create a new member with name, email and note', async () => {
  name = 'scenario-72';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const data = memberDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(data.name);
  await saveScreenshot(4);
  await member.fillEmail(data.email);
  await saveScreenshot(5);
  await member.fillNote(data.note);
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 73: Create a new member with email, note and label', async () => {
  name = 'scenario-73';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  const data = memberDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillEmail(data.email);
  await saveScreenshot(4);
  await member.fillLabel(data.label);
  await saveScreenshot(5);
  await member.fillNote(data.note);
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 74: Update website title and description', async () => {
  name = 'scenario-74';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const data = settingDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTitleAndDescription();
  await saveScreenshot(4);
  await setting.fillTitle(data.title);
  await saveScreenshot(5);
  await setting.fillDescription(data.description);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 75: Update website metadata', async () => {
  name = 'scenario-75';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const data = settingDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandMetadata();
  await saveScreenshot(4);
  await setting.fillMetadataTitle(data.metadataTitle);
  await saveScreenshot(5);
  await setting.fillMetadataDescription(data.metadataDescription);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 76: Update website twitter card', async () => {
  name = 'scenario-76';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const data = settingDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTwitterCard();
  await saveScreenshot(4);
  await setting.fillTwitterTitle(data.twitterTitle);
  await saveScreenshot(5);
  await setting.fillTwitterDescription(data.twitterDescription);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 77: Update website facebook card', async () => {
  name = 'scenario-77';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const data = settingDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandFacebookCard();
  await saveScreenshot(4);
  await setting.fillFacebookTitle(data.facebookTitle);
  await saveScreenshot(5);
  await setting.fillFacebookDescription(data.facebookDescription);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 78: Update website social networks urls', async () => {
  name = 'scenario-78';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  const data = settingDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandSocialAccounts();
  await saveScreenshot(4);
  await setting.fillFacebookUrl(data.facebookUrl);
  await saveScreenshot(5);
  await setting.fillTwitterUrl(data.twitterUrl);
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 79: Update the owner full name, slug and location', async () => {
  name = 'scenario-79';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const data = profileDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(data.name);
  await saveScreenshot(3);
  await profile.fillSlug(data.slug);
  await saveScreenshot(4);
  await profile.fillLocation(data.location);
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 80: Update the owner website, Facebook Profile, Twitter profile and Bio', async () => {
  name = 'scenario-80';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const data = profileDataPool[randomIndex(dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(data.website);
  await saveScreenshot(3);
  await profile.fillFacebookUrl(data.facebookUrl);
  await saveScreenshot(4);
  await profile.fillTwitterUrl(data.twitterUrl);
  await saveScreenshot(4);
  await profile.fillBio(data.bio);
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 81: Create a new member with name and email', async () => {
  name = 'scenario-81';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(faker.name.firstName());
  await saveScreenshot(4);
  await member.fillEmail(faker.internet.email());
  await saveScreenshot(4);
  await member.save();
  await saveScreenshot(5);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 82: Create a new member with name, email and note', async () => {
  name = 'scenario-82';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillName(faker.name.firstName());
  await saveScreenshot(4);
  await member.fillEmail(faker.internet.email());
  await saveScreenshot(5);
  await member.fillNote(faker.lorem.sentence());
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 83: Create a new member with email, note and label', async () => {
  name = 'scenario-83';
  const login = new Login(page);
  const home = new Home(page);
  const member = new Member(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMembers();
  await saveScreenshot(2);
  await member.goToNewMember();
  await saveScreenshot(3);
  await member.fillEmail(faker.internet.email());
  await saveScreenshot(4);
  await member.fillLabel(faker.lorem.sentence());
  await saveScreenshot(5);
  await member.fillNote(faker.lorem.sentence());
  await saveScreenshot(6);
  await member.save();
  await saveScreenshot(7);
  const success = await member.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 84: Update website title and description', async () => {
  name = 'scenario-84';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTitleAndDescription();
  await saveScreenshot(4);
  await setting.fillTitle(faker.lorem.sentence());
  await saveScreenshot(5);
  await setting.fillDescription(faker.lorem.sentence());
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 85: Update website metadata', async () => {
  name = 'scenario-85';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandMetadata();
  await saveScreenshot(4);
  await setting.fillMetadataTitle(faker.lorem.sentence());
  await saveScreenshot(5);
  await setting.fillMetadataDescription(faker.lorem.sentence());
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 86: Update website twitter card', async () => {
  name = 'scenario-86';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandTwitterCard();
  await saveScreenshot(4);
  await setting.fillTwitterTitle(faker.lorem.sentence());
  await saveScreenshot(5);
  await setting.fillTwitterDescription(faker.lorem.sentence());
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 87: Update website facebook card', async () => {
  name = 'scenario-87';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandFacebookCard();
  await saveScreenshot(4);
  await setting.fillFacebookTitle(faker.lorem.sentence());
  await saveScreenshot(5);
  await setting.fillFacebookDescription(faker.lorem.sentence());
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 88: Update website social networks urls', async () => {
  name = 'scenario-88';
  const login = new Login(page);
  const home = new Home(page);
  const setting = new Setting(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMySettings();
  await saveScreenshot(2);
  await home.goToMyGeneralSettings();
  await saveScreenshot(3);
  await setting.expandSocialAccounts();
  await saveScreenshot(4);
  await setting.fillFacebookUrl(faker.random.alpha(10));
  await saveScreenshot(5);
  await setting.fillTwitterUrl(faker.random.alpha(10));
  await saveScreenshot(6);
  await setting.updateSetting();
  await saveScreenshot(7);
  const success = await setting.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 89: Update the owner full name, slug and location', async () => {
  name = 'scenario-89';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(faker.name.firstName());
  await saveScreenshot(3);
  await profile.fillSlug(faker.random.alpha(20));
  await saveScreenshot(4);
  await profile.fillLocation(faker.address.country());
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 90: Update the owner website, Facebook Profile, Twitter profile and Bio', async () => {
  name = 'scenario-90';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(faker.internet.url());
  await saveScreenshot(3);
  await profile.fillFacebookUrl(faker.random.alpha(10));
  await saveScreenshot(4);
  await profile.fillTwitterUrl(faker.random.alpha(10));
  await saveScreenshot(4);
  await profile.fillBio(faker.lorem.sentence());
  await saveScreenshot(5);
  await profile.updateProfile();
  await saveScreenshot(6);
  const success = await profile.getSavedSuccess();
  expect(success).to.exist;
});

it('Scenario 91: Update name with an empty name', async () => {
  name = 'scenario-91';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const newName = profileDataPool[Math.floor(Math.random() * dataPoolSize)].empty;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(newName);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please enter a name');
});

it('Scenario 92: Update name with a name too long', async () => {
  name = 'scenario-92';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillName(fake.nameTooLong);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Name is too long');
});

it('Scenario 93: Update email with an empty email', async () => {
  name = 'scenario-93';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const email = profileDataPool[Math.floor(Math.random() * dataPoolSize)].empty;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail(email);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 94: Update email with an invalid email', async () => {
  name = 'scenario-94';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillEmail(fake.emailInvalid);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Please supply a valid email address');
});

it('Scenario 95: Update website with an invalid URL', async () => {
  name = 'scenario-95';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const newUrl = profileDataPool[Math.floor(Math.random() * dataPoolSize)].urlInvalid;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(newUrl);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Website is not a valid url');
});

it('Scenario 96: Update website with an URL that exceeds max length', async () => {
  name = 'scenario-96';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const website = `https://${faker.random.alpha(2000)}.com`;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillWebsite(website);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Website is not a valid url');
});

it('Scenario 97: Update website with a bio that exceeds max length', async () => {
  name = 'scenario-97';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const bio = profileDataPool[Math.floor(Math.random() * dataPoolSize)].bioTooLong;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillBio(bio);
  await saveScreenshot(3);
  await profile.updateProfile();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Bio is too long');
});

it('Scenario 98: Update password with old password incorrect', async () => {
  name = 'scenario-98';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(fake.oldPasswordIncorrect);
  await profile.fillNewPassword(password);
  await profile.fillConfirmPassword(password);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await home.getAlertMessage();
  expect(error).to.contain('Your password is incorrect');
});

it('Scenario 99: Update password with verify password that does not match', async () => {
  name = 'scenario-99';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(faker.internet.password());
  await profile.fillConfirmPassword(faker.internet.password());
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Your new passwords do not match');
});

it('Scenario 100: Update password with new password insecure', async () => {
  name = 'scenario-100';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  const fake = profileDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(fake.oldPasswordInsecure);
  await profile.fillConfirmPassword(fake.oldPasswordInsecure);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await profile.getErrorMessage();
  expect(error).to.contain('Sorry, you cannot use an insecure password');
});

it('Scenario 101: Update password with the same password as before', async () => {
  name = 'scenario-101';
  const login = new Login(page);
  const home = new Home(page);
  const profile = new Profile(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToMyProfile();
  await saveScreenshot(2);
  await profile.fillOldPassword(password);
  await profile.fillNewPassword(password);
  await profile.fillConfirmPassword(password);
  await saveScreenshot(3);
  await profile.changePassword();
  await saveScreenshot(4);
  const error = await home.getNotificationMessage();
  expect(error).to.contain('Password updated');
});

it('Scenario 102: Create a page with a publish date incorrect', async () => {
  name = 'scenario-102';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(faker.random.alpha());
  await saveScreenshot(4);
  await pages.continue();
  await saveScreenshot(5);
  const error = await pages.getDateErrorMessage();
  expect(error).to.contain('Invalid date format');
});

it('Scenario 103: Create a page with title and body without publishing it', async () => {
  name = 'scenario-103';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 104: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-104';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(faker.date.future().toISOString().split('T')[0]);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 105: Create a page with title and body and publish it', async () => {
  name = 'scenario-105';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 106: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-106';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(faker.random.alpha(10));
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 107: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-107';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(faker.lorem.sentence());
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 108: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-108';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(faker.lorem.sentence());
  await pages.fillBody(faker.lorem.paragraph());
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 109: Create a page with title and body without publishing it', async () => {
  name = 'scenario-109';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 110: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-110';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(fake.future);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 111: Create a page with title and body and publish it', async () => {
  name = 'scenario-111';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 112: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-112';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(fake.url);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 113: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-113';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(fake.excerpt);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 114: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-114';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const fake = pageDataPool[Math.floor(Math.random() * dataPoolSize)];

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(fake.title);
  await pages.fillBody(fake.body);
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 115: Create a page with title and body without publishing it', async () => {
  name = 'scenario-115';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.goToPages();
  await pages.filterByState('Draft');
  await saveScreenshot(4);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Draft');
});

it('Scenario 116: Create a page with title and body and schedule it for later', async () => {
  name = 'scenario-116';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const future = pageDataPool[Math.floor(Math.random() * dataPoolSize)].future;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.clickPublishSettings();
  await pages.clickScheduleForLater();
  await pages.fillScheduleDate(future);
  await saveScreenshot(4);
  await pages.continue();
  await pages.publishScheduled();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Scheduled');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Scheduled');
});

it('Scenario 117: Create a page with title and body and publish it', async () => {
  name = 'scenario-117';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(4);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(5);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 118: Create a page with title, body and page URL and publish it', async () => {
  name = 'scenario-118';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const url = pageDataPool[Math.floor(Math.random() * dataPoolSize)].url;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillUrl(url);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 119: Create a page with title, body and excerpt and publish it', async () => {
  name = 'scenario-119';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;
  const excerpt = pageDataPool[Math.floor(Math.random() * dataPoolSize)].excerpt;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(3);
  await pages.clickPageSettings();
  await pages.fillExcerpt(excerpt);
  await saveScreenshot(4);
  await pages.clickPageSettings();
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

it('Scenario 120: Create a page with title, body and feature image and publish it', async () => {
  name = 'scenario-120';
  const login = new Login(page);
  const home = new Home(page);
  const pages = new Page(page);

  const title = pageDataPool[Math.floor(Math.random() * dataPoolSize)].title;
  const body = pageDataPool[Math.floor(Math.random() * dataPoolSize)].body;

  await page.goto(url);
  await login.fillForm(username, password);
  await saveScreenshot(1);
  await login.clickLogin();
  await home.goToPages();
  await pages.goToNewPage();
  await saveScreenshot(2);
  await pages.clickFeatureImage();
  await pages.clickInsertImage();
  await saveScreenshot(3);
  await pages.fillTitle(title);
  await pages.fillBody(body);
  await saveScreenshot(4);
  await pages.publish();
  await pages.continue();
  await pages.publishRightNow();
  await saveScreenshot(5);
  await pages.goToEditor();
  await pages.goToPages();
  await pages.filterByState('Published');
  await saveScreenshot(6);
  const lastState = await pages.getLastPageState();
  expect(lastState).to.contain('Published');
});

async function saveScreenshot(step) {
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: `${screenshotPath}/${name}/step-${step}.png` });
}

function randomIndex(size) {
  return Math.floor(Math.random() * dataPoolSize)
}
