import * as mockResponse from './mock';

export default class Helper {

  getLivrosList() {
    return new Promise(resolve => {
      setTimeout(resolve(mockResponse.livros.livros), 500);
    });
  }

  saveLivro(livro) {
    return new Promise( resolve => {
      mockResponse.livros.livros.push(livro);
      setTimeout(resolve({status: 201}), 500);
    });
  }

}