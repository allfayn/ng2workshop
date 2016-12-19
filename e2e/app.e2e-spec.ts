import { Training2Page } from './app.po';

describe('training2 App', function() {
  let page: Training2Page;

  beforeEach(() => {
    page = new Training2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
