import { MaterialStartNgPage } from './app.po';

describe('material-start-ng App', function() {
  let page: MaterialStartNgPage;

  beforeEach(() => {
    page = new MaterialStartNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
