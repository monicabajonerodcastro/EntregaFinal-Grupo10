class Page {
  constructor(page) {
    this.page = page;
  }

  async goToNewPage() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=New page').click();
  }

  async goToPages() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Pages').click();
  }

  async goToEditor() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.gh-btn-editor.gh-publish-back-button').click();
  }

  async filterByState(state) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=All pages').click();
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator(`text=${state} pages`).click();
  }

  async fillTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', title);
  }

  async fillBody(body) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', body);
  }

  async fillUrl(url) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id=url]', url);
  }

  async fillExcerpt(excerpt) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id=custom-excerpt]', excerpt);
  }

  async fillScheduleDate(date) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('div.gh-date-time-picker-date > input', date);
  }

  async publish() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('button', { hasText: 'Publish' }).click();
  }

  async clickPageSettings() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
  }

  async clickFeatureImage() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.gh-editor-feature-image-unsplash').click();
  }

  async clickInsertImage() {
    await new Promise((r) => setTimeout(r, 5000));
    const button = await this.page.$('text=Insert image');
    return button.click();
  }

  async clickPublishSettings() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.gh-publish-setting.last').click();
  }

  async clickScheduleForLater() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Schedule for later').click();
  }

  async continue() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Continue, final review →').click();
  }

  async publishRightNow() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Publish page, right now').click();
  }

  async publishScheduled() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
  }

  async getLastPageState() {
    await new Promise((r) => setTimeout(r, 1000));
    const lastState = await this.page.$('.gh-content-entry-status > span');
    return lastState.innerText();
  }

  async getDateErrorMessage() {
    await new Promise((r) => setTimeout(r, 1000));
    const message = await this.page.$('.gh-date-time-picker-error');
    return message.innerText();
  }
}

module.exports = Page;
