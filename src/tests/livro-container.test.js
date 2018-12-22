import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import LivroContainer from '../components/livro/livro-container';

describe('test LivroConteiner component', () => {

  const wrapper = shallow(<LivroContainer/>);

  it('should renders without crashing ', () => {
    shallow(<LivroContainer/>);
    const tree = renderer.create(<LivroContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be "Novo Livro" h1 title ', () => {
    expect(wrapper.find('h1')).toHaveText('Novo Livro');
  });

  it('should be input titulo do livro', () => {
    const titulo = wrapper.find('#livroTitulo');
    expect(titulo).toMatchSelector('input');
    expect(titulo).toHaveProp('name', 'titulo');
  });

  it('should be input isbn do livro', () => {
    const isbn = wrapper.find('#livroIsbn');
    expect(isbn).toMatchSelector('input');
    expect(isbn).toHaveProp('name', 'isbn');
  });


});