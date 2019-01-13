import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {livros} from '../../components/livro/mock';
import {LivroTable} from '../../components/livro/livro-table';

const getLivrosListMock = jest.fn();
const removeLivroMock = jest.fn();
const component = (
  <LivroTable
    livros={livros.livros}
    getLivrosList={getLivrosListMock}
    removeLivro={removeLivroMock}/>
);

describe('test LivroTable components', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(component);
  });

  it('should renders without crashing', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
    expect(getLivrosListMock).toBeCalled();
  });

  it('should be table with columns Titulo, ISBN, Preço, Data Lançamento', () => {
    const table = wrapper.find('table');
    const thead = table.find('thead').find('tr').find('th');
    expect(table.find('caption')).toHaveText('Livros');
    expect(thead.at(0)).toHaveText('Titulo');
    expect(thead.at(1)).toHaveText('ISBN');
    expect(thead.at(2)).toHaveText('Preço');
    expect(thead.at(3)).toHaveText('Data Lançamento');
  });

  it('should be call props removeLivro when click button remover', () => {
    const rowsTBody = wrapper.find('table').find('tbody').find('tr').find('td');
    const removeButton = rowsTBody.find('button').at(1);

    removeButton.simulate('click');

    expect(removeLivroMock).toBeCalled();
  });

});