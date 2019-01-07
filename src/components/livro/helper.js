import * as mockResponse from './mock';

export default class Helper {

  getLivrosList() {
    return new Promise(resolve => {
      setTimeout(resolve(mockResponse.livros.livros), 500);
    });
  }

}