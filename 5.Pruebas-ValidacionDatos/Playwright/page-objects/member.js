class Profile {
  constructor(page) {
    this.page = page;
  }

  async goToNewMember() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('a[href="#/members/new/"]').click();
  }

  async fillName(name) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id="member-name"]', name);
  }

  async fillEmail(email) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[id="member-email"]', email);
  }

  async fillLabel(label) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('input[class="ember-power-select-trigger-multiple-input"]', label);
    await this.page.locator('li[class="ember-power-select-option"]>>nth=0').click();
  }

  async fillLabels(labels) {
    labels.reduce((acc, label) => {
      return acc.then(() => this.fillLabel(label));
   }, Promise.resolve());
  }

  async fillNote(note) {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.fill('textarea[id="member-note"]', note);
  }

  async getSavedSuccess() {
    await new Promise((r) => setTimeout(r, 1000));
    return await this.page.locator('span*=Saved');
  }

  async save() {
    await new Promise((r) => setTimeout(r, 1000));
    await this.page.locator('text=Save').click();
  }
}

module.exports = Profile;
