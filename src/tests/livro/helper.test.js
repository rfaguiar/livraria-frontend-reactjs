import Helper from '../../components/livro/helper';
import * as mockResponse from '../../components/livro/mock';



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

  it('should send livro to backserver when call saveLivro method', () => {
    return helper.saveLivro(mockResponse.livros.livros[0]).then( (data) => {
      expect(data);
      expect(data.status).toEqual(201);
    });
  });

  it('should be remove livro to backserver', () => {

    return helper.removeLivro(mockResponse.livros.livros[0]).then( data => {
      expect(data.status).toEqual(200);
      return helper.getLivrosList().then((data) => {
        expect(data);
        expect(data.length).toEqual(2);
      });
    });
  });


});