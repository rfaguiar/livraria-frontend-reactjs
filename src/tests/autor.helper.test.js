import Helper from '../components/autor/helper';

describe('autor helper tests', () => {

  it('should be get all autores to back server', () => {
    const helper = new Helper();

    return helper.getAutoresList().then((data) => {
      expect(data);
      expect(data.autores.length).toEqual(2);
    });
  });

});