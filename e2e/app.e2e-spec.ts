import { Angular2MinesweeperPage } from './app.po';

describe('angular2-minesweeper App', () => {
  let page: Angular2MinesweeperPage;

  beforeEach(() => {
    page = new Angular2MinesweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
