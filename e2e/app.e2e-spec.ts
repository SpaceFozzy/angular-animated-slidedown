import { AngularAnimationExamplePage } from './app.po';

describe('angular-animation-example App', () => {
  let page: AngularAnimationExamplePage;

  beforeEach(() => {
    page = new AngularAnimationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
