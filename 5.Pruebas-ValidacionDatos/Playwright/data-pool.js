const { faker } = require('@faker-js/faker');

faker.seed(10);

function createProfileDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    empty: '',
    name: faker.name.firstName(),
    nameTooLong: faker.random.alpha(200),
    email: faker.internet.email(),
    emailInvalid: faker.lorem.sentence(),
    url: faker.internet.url(),
    urlInvalid: faker.lorem.sentence(),
    slug: faker.random.alpha(20),
    location: faker.address.country(),
    bio: faker.lorem.sentence(),
    bioTooLong: faker.random.alpha(300),
    oldPasswordIncorrect: faker.internet.password(),
    oldPasswordInsecure: '1234567890',
    website: faker.internet.url(),
    facebookUrl: faker.random.alpha(10),
    twitterUrl: faker.random.alpha(10), 
  }));
}

function createPageDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    url: faker.random.alpha(10),
    excerpt: faker.lorem.sentence(),
    future: faker.date.future().toISOString().split('T')[0],
  }));
}

function createSettingDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    metadataTitle: faker.lorem.sentence(),
    metadataDescription: faker.lorem.sentence(),
    twitterTitle: faker.lorem.sentence(),
    twitterDescription: faker.lorem.sentence(),
    facebookTitle: faker.lorem.sentence(),
    facebookDescription: faker.lorem.sentence(),
    facebookUrl: faker.random.alpha(10),
    twitterUrl: faker.random.alpha(10),
  }));
}

function createMemberDataPool(size) {
  const data = new Array(size).fill(undefined);
  return data.map(() => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    note: faker.lorem.sentence(),
    label: faker.lorem.sentence(),
  }));
}

module.exports = {
  createProfileDataPool,
  createSettingDataPool,
  createPageDataPool,
  createMemberDataPool,
};
