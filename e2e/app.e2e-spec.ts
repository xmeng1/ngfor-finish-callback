import { NgforFinishCallbackPage } from './app.po';

describe('ngfor-finish-callback App', () => {
  let page: NgforFinishCallbackPage;

  beforeEach(() => {
    page = new NgforFinishCallbackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
