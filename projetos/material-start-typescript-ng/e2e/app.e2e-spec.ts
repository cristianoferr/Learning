import { Material2DoNovoPage } from './app.po';

describe('material2-do-novo App', function() {
  let page: Material2DoNovoPage;

  beforeEach(() => {
    page = new Material2DoNovoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
