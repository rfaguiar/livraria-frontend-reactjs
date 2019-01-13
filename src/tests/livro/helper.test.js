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

  it('should send livro to backserver when call saveLivro method', () => {
    const livroMock = {
      titulo: 'reactjs',
      isbn: '12345678',
      preco: 20.0,
      dtLancamento: '11/05/2018',
      autores: [
        {nome: 'fulano', email: 'fulano@email.com'}
        ]
    };
    return helper.saveLivro(livroMock).then( (data) => {
      expect(data);
      expect(data.status).toEqual(201);
    });
  });

});