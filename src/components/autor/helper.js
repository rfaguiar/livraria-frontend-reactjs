import * as mockResponse from './mock';

export default class Helper {

  getAutoresList() {
    return new Promise((resolve) => {
      setTimeout(resolve(mockResponse.autores), 500);
    });
  }
}