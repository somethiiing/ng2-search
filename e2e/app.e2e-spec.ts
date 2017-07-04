import { Ng2SearchPage } from './app.po';

describe('ng2-search App', () => {
  let page: Ng2SearchPage;

  beforeEach(() => {
    page = new Ng2SearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
