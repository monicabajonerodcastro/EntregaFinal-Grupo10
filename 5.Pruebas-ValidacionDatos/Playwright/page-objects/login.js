class Login {
  constructor(page) {
    this.page = page;
  }

  async fillForm(username, password) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input.email.gh-input', username);
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input.password.gh-input', password);
  }

  async clickLogin() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.click('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    await new Promise((r) => setTimeout(r, 1000));
  }
}

module.exports = Login;
