class Setting {
  constructor(page) {
    this.page = page;
  }

  async fillTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('.ember-text-field.gh-input.ember-view>>nth=0', title);
  }

  async fillDescription(description) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('.ember-text-field.gh-input.ember-view>>nth=1', description);
  }

  async fillMetadataTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id="metaTitle"]', title);
  }

  async fillMetadataDescription(description) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id="metaDescription"]', description);
  }

  async fillTwitterTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id="twitterTitle"]', title);
  }

  async fillTwitterDescription(description) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id="twitterDescription"]', description);
  }

  async fillFacebookTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id="ogTitle"]', title);
  }

  async fillFacebookDescription(description) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id="ogDescription"]', description);
  }

  async fillFacebookUrl(url) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[placeholder="https://www.facebook.com/username"]', url);
  }

  async fillTwitterUrl(url) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[placeholder="https://twitter.com/username"]', url);
  }

  async expandTitleAndDescription() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(':nth-match(:text("Expand"), 1)').click();
  }

  async expandMetadata() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(':nth-match(:text("Expand"), 4)').click();
  }

  async expandTwitterCard() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(':nth-match(:text("Expand"), 5)').click();
  }

  async expandFacebookCard() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(':nth-match(:text("Expand"), 6)').click();
  }

  async expandSocialAccounts() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(':nth-match(:text("Expand"), 7)').click();
  }

  async updateSetting() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Save').click();
  }

  async getSavedSuccess() {
    await new Promise((r) => setTimeout(r, 1000));
    return await this.page.locator('text=Saved');
  }
}

module.exports = Setting;
