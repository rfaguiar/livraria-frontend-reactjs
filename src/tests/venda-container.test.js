import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import VendaContainer from '../components/venda/venda-container';


describe('test VendaContainer component', () => {

  const wrapper = shallow(<VendaContainer/>);

  it('should renders without crashing ', () => {
    shallow(<VendaContainer/>);
    const tree = renderer.create(<VendaContainer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be "Vendas" h1 title ', () => {
    expect(wrapper.find('h1')).toHaveText('Vendas');
  });

});

