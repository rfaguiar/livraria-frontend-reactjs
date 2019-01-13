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

  removeLivro(livro) {
    return new Promise(resolve => {
      const index = mockResponse.livros.livros.indexOf(livro);
      mockResponse.livros.livros.splice(index, 1);
      setTimeout(resolve({status: 200}), 500);
    });
  }

}