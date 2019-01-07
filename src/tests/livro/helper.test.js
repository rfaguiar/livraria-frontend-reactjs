import Helper from '../../components/livro/helper';

describe('livro helper tests', () => {

  let helper;

  beforeEach(() => {
    helper = new Helper();
  });

  it('should be get all livros to back server', () => {

    return helper.getLivrosList().then((data) => {
      expect(data);
      expect(data.length).toEqual(2);
    });
  });

});