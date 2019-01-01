import * as mockResponse from './mock';

export default class Helper {

  getAutoresList() {
    return new Promise(resolve => {
      setTimeout(resolve(mockResponse.autores.autores), 500);
    });
  }

  saveAutor(autor) {
    return new Promise(resolve => {
      mockResponse.autores.autores.push(autor);
      setTimeout(resolve({status: 201}), 500);
    });
  }

  removeAutor(autor) {
    return new Promise(resolve => {
      const index = mockResponse.autores.autores.indexOf(autor);
      mockResponse.autores.autores.splice(index, 1);
      setTimeout(resolve({status: 200}), 500);
    });
  }
}