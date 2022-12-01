class Profile {
  constructor(page) {
    this.page = page;
  }

  async fillName(name) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-name]', name);
  }

  async fillSlug(slug) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-slug]', slug);
  }

  async fillEmail(email) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-email]', email);
  }

  async fillLocation(location) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-location]', location);
  }

  async fillWebsite(website) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-website]', website);
  }

  async fillFacebookUrl(url) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-facebook]', url);
  }

  async fillTwitterUrl(url) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-twitter]', url);
  }

  async fillBio(bio) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id=user-bio]', bio);
  }

  async fillOldPassword(password) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-password-old]', password);
  }

  async fillNewPassword(password) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-password-new]', password);
  }

  async fillConfirmPassword(password) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=user-new-password-verification]', password);
  }

  async getErrorMessage() {
    await new Promise((r) => setTimeout(r, 1000));
    const message = await this.page.$('.form-group.error.ember-view > .response');
    return message.innerText();
  }

  async changePassword() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.gh-btn.gh-btn-icon.button-change-password.gh-btn-red.ember-view').click();
  }

  async updateProfile() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Save').click();
  }

  async getSavedSuccess() {
    await new Promise((r) => setTimeout(r, 1000));
    return await this.page.locator('span*=Saved');
  }
}

module.exports = Profile;
