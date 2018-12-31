import Helper from '../components/autor/helper';

describe('autor helper tests', () => {

  let helper;

  beforeEach(() => {
    helper = new Helper();
  });

  it('should be get all autores to back server', () => {

    return helper.getAutoresList().then((data) => {
      expect(data);
      expect(data.autores.length).toEqual(2);
    });
  });

  it('should be send autor to back server', () => {

    const autorMock = {nome: 'autorTest', email: 'emailtest@test.com'};
    return helper.saveAutor(autorMock).then( data => {
      expect(data);
      expect(data.status).toEqual(201);
    });
  });

});