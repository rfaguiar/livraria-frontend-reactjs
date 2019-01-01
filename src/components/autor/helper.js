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
}