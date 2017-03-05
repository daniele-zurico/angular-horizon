import { AngularOnHorizonPage } from './app.po';

describe('angular-on-horizon App', () => {
  let page: AngularOnHorizonPage;

  beforeEach(() => {
    page = new AngularOnHorizonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
