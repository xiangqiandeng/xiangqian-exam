import { XiangqianExamPage } from './app.po';

describe('xiangqian-exam App', function() {
  let page: XiangqianExamPage;

  beforeEach(() => {
    page = new XiangqianExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
