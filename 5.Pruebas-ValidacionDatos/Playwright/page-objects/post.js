class Post {
  constructor(page) {
    this.page = page;
  }

  async clickNewPost() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('a.ember-view.gh-secondary-action.gh-nav-new-post').click();
  }

  async fillTitle(title) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea.gh-editor-title.ember-text-area.gh-input.ember-view', title);
  }

  async fillBody(body) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content', body);
  }

  async publish() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('button', { hasText: 'Publish' }).click();
  }

  async continue() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Continue, final review →').click();
  }

  async publishRightNow() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Publish post, right now').click();
  }
}

module.exports = Post;
